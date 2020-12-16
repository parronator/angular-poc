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
    scheduler.run(({expectObservable, hot, cold}) => {
      cold('a', {
        a: 'begin',
      }).subscribe(methodName => {
        shadeService.loadList();
      })
      const expectedMarble = 'abcd|';
      const expectedState = {
        a: { ...InitialShadeState },
        b: { ...InitialShadeState, loading: true },
        c: { ...InitialShadeState, loading: true, entities: data },
        d: { ...InitialShadeState, loading: false, entities: data }
      }
      expectObservable(shadeService.state$).toBe(expectedMarble, expectedState);
    });
  });
});
