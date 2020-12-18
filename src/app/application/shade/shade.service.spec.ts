// @ts-ignore
import {anyString, instance, mock, reset, verify, when} from 'ts-mockito';
import {shadeFixture, shadeListFixturePage1} from '../../../fixture/shade';
import {ShadeFacade} from '../../core/shade/domain/shadeFacade';
import { ShadeService} from './shade.service';
import {TestScheduler} from 'rxjs/testing';
import {HttpErrorResponse} from '@angular/common/http';

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

  describe('getAllShades', () => {
    it('should get all shades when calling getAllShades', async () => {
      const data = [shadeFixture, shadeFixture];
      when(MockShadeFacade.getAll()).thenResolve(data);

      let currentState = 0;
      const expectedState: any = {
        0: {...shadeService.InitialEntityState},
        1: {...shadeService.InitialEntityState, loading: true},
        2: {...shadeService.InitialEntityState, loading: true, entities: data},
        3: {...shadeService.InitialEntityState, loading: false, entities: data}
      };

      const subscription = shadeService.state$.subscribe((e) => {
        expect(e).toEqual(expectedState[currentState]);
        currentState++;
      });

      await shadeService.getAllShades();
      subscription.unsubscribe();
      verify(MockShadeFacade.getAll()).called();
    });
    it('should set error state true when facade throws an error', async () => {
      when(MockShadeFacade.getAll()).thenThrow(new HttpErrorResponse({status: 500}));

      let currentState = 0;
      const expectedState: any = {
        0: {...shadeService.InitialEntityState},
        1: {...shadeService.InitialEntityState, loading: true},
        2: {...shadeService.InitialEntityState, loading: true, error: true},
        3: {...shadeService.InitialEntityState, loading: false, error: true}
      };

      const subscription = shadeService.state$.subscribe((e) => {
        expect(e).toEqual(expectedState[currentState]);
        currentState++;
      });

      await shadeService.getAllShades();
      subscription.unsubscribe();
      verify(MockShadeFacade.getAll()).called();

      // Check if error state is set to false the next time a request is made.

      const data = shadeListFixturePage1;
      when(MockShadeFacade.getAll()).thenResolve(data);
      let currentState2 = 0;
      const expectedState2: any = {
        0: {...shadeService.InitialEntityState, loading: false, error: true},
        1: {...shadeService.InitialEntityState, loading: true, error: false},
        2: {...shadeService.InitialEntityState, loading: true, entities: data},
        3: {...shadeService.InitialEntityState, loading: false, entities: data}
      };

      const subscription2 = shadeService.state$.subscribe((e) => {
        expect(e).toEqual(expectedState2[currentState2]);
        currentState2++;
      });

      await shadeService.getAllShades();
      subscription2.unsubscribe();
      verify(MockShadeFacade.getAll()).called();


    });
  });

  describe('getShadeById', () => {
    it('should get a single shade when calling getShadeById', async () => {
      const data = shadeFixture;
      when(MockShadeFacade.getShadeById(anyString())).thenResolve(data);

      let currentState = 0;
      const expectedState: any = {
        0: {...shadeService.InitialEntityState},
        1: {...shadeService.InitialEntityState, loading: true},
        2: {...shadeService.InitialEntityState, loading: true, entities: data},
        3: {...shadeService.InitialEntityState, loading: false, entities: data}
      };

      const subscription = shadeService.state$.subscribe((e) => {
        expect(e).toEqual(expectedState[currentState]);
        currentState++;
      });

      await shadeService.getShadeById('any');
      subscription.unsubscribe();
      verify(MockShadeFacade.getShadeById(anyString())).called();
    });

    it('should set error state true when facade throws an error', async () => {
      when(MockShadeFacade.getShadeById(anyString())).thenThrow(new HttpErrorResponse({status: 500}));

      let currentState = 0;
      const expectedState: any = {
        0: {...shadeService.InitialEntityState},
        1: {...shadeService.InitialEntityState, loading: true},
        2: {...shadeService.InitialEntityState, loading: true, error: true},
        3: {...shadeService.InitialEntityState, loading: false, error: true}
      };

      const subscription = shadeService.state$.subscribe((e) => {
        expect(e).toEqual(expectedState[currentState]);
        currentState++;
      });

      await shadeService.getShadeById('any');
      subscription.unsubscribe();
      verify(MockShadeFacade.getShadeById(anyString())).called();

      // Check if error state is set to false the next time a request is made.

      const data = shadeListFixturePage1;
      when(MockShadeFacade.getAll()).thenResolve(data);
      let currentState2 = 0;
      const expectedState2: any = {
        0: {...shadeService.InitialEntityState, loading: false, error: true},
        1: {...shadeService.InitialEntityState, loading: true, error: false},
        2: {...shadeService.InitialEntityState, loading: true, entities: [data]},
        3: {...shadeService.InitialEntityState, loading: false, entities: [data]}
      };

      const subscription2 = shadeService.state$.subscribe((e) => {
        expect(e).toEqual(expectedState2[currentState2]);
        currentState2++;
      });

      await shadeService.getShadeById('any');
      subscription2.unsubscribe();
      verify(MockShadeFacade.getShadeById(anyString())).called();


    });
  });


});
