// @ts-ignore
import {anything, instance, mock, reset, verify, when} from 'ts-mockito';
import {singleShadeFixture} from '../../../fixture/shade';
import {ShadeFacade} from '../../core/shade/domain/shadeFacade';
import {TestScheduler} from 'rxjs/testing';
import {InitialShadeState, ShadeService} from './shade.service';
import {GetAllFilteredResponse} from "../../shared/domain/GetAllFilteredResponse";
import {Shade} from "../../core/shade/domain/shade";

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

  it('should stream the correct state when loading', async () => {
    const data: GetAllFilteredResponse<Shade> = {pageSize: 3, totalPages: 2, entities: [singleShadeFixture, singleShadeFixture]};
    when(MockShadeFacade.getAllFiltered(anything())).thenResolve(data);

    let currentState = 0;
    const expectedState: any = {
      0: {...InitialShadeState},
      1: {...InitialShadeState, loading: true},
      2: {...InitialShadeState, loading: true, entities: data.entities, totalPages: data.totalPages, pageSize: data.pageSize},
      3: {...InitialShadeState, loading: false, entities: data.entities, totalPages: data.totalPages, pageSize: data.pageSize}
    };

    const subscription = shadeService.state$.subscribe((e) => {
      expect(e).toEqual(expectedState[currentState]);
      currentState++;
    });

    await shadeService.getAll();
    subscription.unsubscribe();
    verify(MockShadeFacade.getAllFiltered(anything())).called();
  });

  it('should stream the correct state when changing page', async () => {
    const data: GetAllFilteredResponse<Shade> = {pageSize: 3, totalPages: 2, entities: [singleShadeFixture, singleShadeFixture]};
    when(MockShadeFacade.getAllFiltered(anything())).thenResolve(data);

    let currentState = 0;
    const newState = {...InitialShadeState, filters: {...InitialShadeState.filters, page: 2}};
    const expectedState: any = {
      0: {...InitialShadeState},
      1: {...newState},
      2: {...newState, loading: true},
      3: {...newState, loading: true, entities: data.entities, totalPages: data.totalPages, pageSize: data.pageSize},
      4: {...newState, loading: false, entities: data.entities, totalPages: data.totalPages, pageSize: data.pageSize}
    };

    const subscription = shadeService.state$.subscribe((e) => {
      expect(e).toEqual(expectedState[currentState]);
      currentState++;
    });

    await shadeService.changePage(2);
    subscription.unsubscribe();
    verify(MockShadeFacade.getAllFiltered(anything())).called();
  });

  it('should stream the correct state when changing order', async () => {
    const data: GetAllFilteredResponse<Shade> = {pageSize: 3, totalPages: 2, entities: [singleShadeFixture, singleShadeFixture]};
    when(MockShadeFacade.getAllFiltered(anything())).thenResolve(data);

    let currentState = 0;
    const newState = {...InitialShadeState, filters: {...InitialShadeState.filters, orderBy: 'id', orderDirection: 'ascend'}};
    const expectedState: any = {
      0: {...InitialShadeState},
      1: {...newState},
      2: {...newState, loading: true},
      3: {...newState, loading: true, entities: data.entities, totalPages: data.totalPages, pageSize: data.pageSize},
      4: {...newState, loading: false, entities: data.entities, totalPages: data.totalPages, pageSize: data.pageSize}
    };

    const subscription = shadeService.state$.subscribe((e) => {
      expect(e).toEqual(expectedState[currentState]);
      currentState++;
    });

    await shadeService.changeOrder('id', 'ascend');
    subscription.unsubscribe();
    verify(MockShadeFacade.getAllFiltered(anything())).called();
  });
});
