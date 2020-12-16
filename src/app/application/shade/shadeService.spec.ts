// @ts-ignore
import {instance, mock, reset, verify, when} from 'ts-mockito';
import {shadeFixture} from '../../../fixture/shade';
import {ShadeFacade} from '../../core/shade/domain/shadeFacade';
import {InitialShadeState, ShadeService} from './shadeService';
import {TestScheduler} from 'rxjs/testing';

const MockShadeFacade = mock<ShadeFacade>();

describe('ShadeService', () => {
  let mockShadeFacade: ShadeFacade;
  let shadeService: ShadeService;
  let scheduler: TestScheduler;

  beforeEach(() => {
    mockShadeFacade = instance(MockShadeFacade);
    shadeService = new ShadeService(mockShadeFacade);
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  afterEach(() => {
    reset(MockShadeFacade);
  });

  it('should stream the correct state', async () => {
    const data = [shadeFixture, shadeFixture];
    when(MockShadeFacade.getAll()).thenResolve(data);

    let currentState = 0;
    const expectedState: any = {
      0: {...InitialShadeState},
      1: {...InitialShadeState, loading: true},
      2: {...InitialShadeState, loading: true, entities: data},
      3: {...InitialShadeState, loading: false, entities: data}
    };

    const subscription = shadeService.state$.subscribe((e) => {
      expect(e).toEqual(expectedState[currentState]);
      currentState++;
    });

    await shadeService.loadList();
    subscription.unsubscribe();
    verify(MockShadeFacade.getAll()).called();
  });
});
