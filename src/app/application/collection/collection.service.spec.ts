// @ts-ignore
import {anyString, instance, mock, verify, when} from 'ts-mockito';
import { CollectionService } from './collection.service';
import {CollectionFacade} from '../../core/collection/domain/collectionFacade';
import {collectionListFixture, collectionSingleFixture} from '../../../fixture/collection';
import {TestScheduler} from 'rxjs/testing';
import {HttpErrorResponse} from '@angular/common/http';
import {singleProductFixture} from "../../../fixture/product";

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
      when(MockCollectionFacade.getAll()).thenResolve(data);

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

      await collectionService.getAll();
      subscription.unsubscribe();
      verify(MockCollectionFacade.getAll()).called();
    });
    it('should set error state true when facade throws an error', async () => {
      when(MockCollectionFacade.getAll()).thenThrow(new HttpErrorResponse({status: 500}));

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

      await collectionService.getAll();
      subscription.unsubscribe();
      verify(MockCollectionFacade.getAll()).called();

      // Check if error state is set to false the next time a request is made.

      const data = collectionListFixture;
      when(MockCollectionFacade.getAll()).thenResolve(data);
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

      await collectionService.getAll();
      subscription2.unsubscribe();
      verify(MockCollectionFacade.getAll()).called();


    });
  });

  describe('getCollectionById', () => {
    it('should return single collection when calling getCollectionById', async () => {
      const data = collectionSingleFixture;
      when(MockCollectionFacade.getById(anyString())).thenResolve(data);

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

      await collectionService.getById('any');
      subscription.unsubscribe();
      verify(MockCollectionFacade.getById(anyString())).called();
    });
    it('should set error state true when facade throws an error', async () => {
      when(MockCollectionFacade.getById(anyString())).thenThrow(new HttpErrorResponse({status: 500}));

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

      await collectionService.getById('any');
      subscription.unsubscribe();
      verify(MockCollectionFacade.getById(anyString())).called();


      // Check if error state is set to false the next time a request is made.

      const data = collectionSingleFixture;
      when(MockCollectionFacade.getById(anyString())).thenResolve(data);
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

      await collectionService.getById('any');
      subscription2.unsubscribe();
      verify(MockCollectionFacade.getById(anyString())).called();


    });
  });

  it('should create a new collection', async () => {
    const singleCollection = collectionSingleFixture;
    when(MockCollectionFacade.create(singleCollection)).thenResolve(singleCollection);

    let currentState = 0;
    const expectedState: any = {
      0: {...collectionService.InitialEntityState},
      1: {...collectionService.InitialEntityState, loading: true},
      2: {...collectionService.InitialEntityState, loading: true, entities: [singleCollection]},
      3: {...collectionService.InitialEntityState, loading: false, entities: [singleCollection]}
    };

    const subscription = collectionService.state$.subscribe((e) => {
      expect(e).toEqual(expectedState[currentState]);
      currentState++;
    });

    await collectionService.create(singleCollection);
    subscription.unsubscribe();
    verify(MockCollectionFacade.create(singleCollection)).called();
  });


});
