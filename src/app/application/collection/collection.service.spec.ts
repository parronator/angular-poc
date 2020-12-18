// @ts-ignore
import {anyString, instance, mock, verify, when} from 'ts-mockito';
import { CollectionService } from './collection.service';
import {CollectionFacade} from '../../core/collection/domain/collectionFacade';
import {collectionListFixture, collectionSingleFixture} from '../../../fixture/collection';
import {TestScheduler} from 'rxjs/testing';
import {HttpErrorResponse} from '@angular/common/http';

const MockCollectionFacade = mock<CollectionFacade>();

describe('CollectionService', () => {
  let collectionService: CollectionService;
  let mockCollectionFacade: CollectionFacade;
  let scheduler: TestScheduler;

  beforeEach(() => {
    mockCollectionFacade = instance(MockCollectionFacade);
    collectionService = new CollectionService(mockCollectionFacade);
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should be created', () => {
    expect(collectionService).toBeTruthy();
  });

  describe('getAllCollections', () => {
    it('should return all collections when calling getAllCollections', async () => {
      const data = collectionListFixture;
      when(MockCollectionFacade.getAllCollections()).thenResolve(data);

      let currentState = 0;
      const expectedState: any = {
        0: {...collectionService.InitialEntityState},
        1: {...collectionService.InitialEntityState, loading: true},
        2: {...collectionService.InitialEntityState, loading: true, entities: data},
        3: {...collectionService.InitialEntityState, loading: false, entities: data}
      };

      const subscription = collectionService.state$.subscribe((e) => {
        expect(e).toEqual(expectedState[currentState]);
        currentState++;
      });

      await collectionService.getAllCollections();
      subscription.unsubscribe();
      verify(MockCollectionFacade.getAllCollections()).called();
    });
    it('should set error state true when facade throws an error', async () => {
      when(MockCollectionFacade.getAllCollections()).thenThrow(new HttpErrorResponse({status: 500}));

      let currentState = 0;
      const expectedState: any = {
        0: {...collectionService.InitialEntityState},
        1: {...collectionService.InitialEntityState, loading: true},
        2: {...collectionService.InitialEntityState, loading: true, error: true},
        3: {...collectionService.InitialEntityState, loading: false, error: true}
      };

      const subscription = collectionService.state$.subscribe((e) => {
        expect(e).toEqual(expectedState[currentState]);
        currentState++;
      });

      await collectionService.getAllCollections();
      subscription.unsubscribe();
      verify(MockCollectionFacade.getAllCollections()).called();

      // Check if error state is set to false the next time a request is made.

      const data = collectionListFixture;
      when(MockCollectionFacade.getAllCollections()).thenResolve(data);
      let currentState2 = 0;
      const expectedState2: any = {
        0: {...collectionService.InitialEntityState, loading: false, error: true},
        1: {...collectionService.InitialEntityState, loading: true, error: false},
        2: {...collectionService.InitialEntityState, loading: true, entities: data},
        3: {...collectionService.InitialEntityState, loading: false, entities: data}
      };

      const subscription2 = collectionService.state$.subscribe((e) => {
        expect(e).toEqual(expectedState2[currentState2]);
        currentState2++;
      });

      await collectionService.getAllCollections();
      subscription2.unsubscribe();
      verify(MockCollectionFacade.getAllCollections()).called();


    });
  });

  describe('getCollectionById', () => {
    it('should return single collection when calling getCollectionById', async () => {
      const data = collectionSingleFixture;
      when(MockCollectionFacade.getCollectionByID(anyString())).thenResolve(data);

      let currentState = 0;
      const expectedState: any = {
        0: {...collectionService.InitialEntityState},
        1: {...collectionService.InitialEntityState, loading: true},
        2: {...collectionService.InitialEntityState, loading: true, entities: [data]},
        3: {...collectionService.InitialEntityState, loading: false, entities: [data]}
      };

      const subscription = collectionService.state$.subscribe((e) => {
        expect(e).toEqual(expectedState[currentState]);
        currentState++;
      });

      await collectionService.getCollectionById('any');
      subscription.unsubscribe();
      verify(MockCollectionFacade.getCollectionByID(anyString())).called();
    });
    it('should set error state true when facade throws an error', async () => {
      when(MockCollectionFacade.getCollectionByID(anyString())).thenThrow(new HttpErrorResponse({status: 500}));

      let currentState = 0;
      const expectedState: any = {
        0: {...collectionService.InitialEntityState},
        1: {...collectionService.InitialEntityState, loading: true},
        2: {...collectionService.InitialEntityState, loading: true, error: true},
        3: {...collectionService.InitialEntityState, loading: false, error: true}
      };

      const subscription = collectionService.state$.subscribe((e) => {
        expect(e).toEqual(expectedState[currentState]);
        currentState++;
      });

      await collectionService.getCollectionById('any');
      subscription.unsubscribe();
      verify(MockCollectionFacade.getCollectionByID(anyString())).called();


      // Check if error state is set to false the next time a request is made.

      const data = collectionSingleFixture;
      when(MockCollectionFacade.getCollectionByID(anyString())).thenResolve(data);
      let currentState2 = 0;
      const expectedState2: any = {
        0: {...collectionService.InitialEntityState, loading: false, error: true},
        1: {...collectionService.InitialEntityState, loading: true, error: false},
        2: {...collectionService.InitialEntityState, loading: true, entities: [data]},
        3: {...collectionService.InitialEntityState, loading: false, entities: [data]}
      };

      const subscription2 = collectionService.state$.subscribe((e) => {
        expect(e).toEqual(expectedState2[currentState2]);
        currentState2++;
      });

      await collectionService.getCollectionById('any');
      subscription2.unsubscribe();
      verify(MockCollectionFacade.getCollectionByID(anyString())).called();


    });
  });


});
