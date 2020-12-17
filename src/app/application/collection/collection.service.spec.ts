// @ts-ignore
import {instance, mock, verify, when} from 'ts-mockito';
import { CollectionService } from './collection.service';
import {CollectionFacade} from '../../core/collection/domain/collectionFacade';
import {collectionFixture} from '../../../fixture/collection';
import {InitialShadeState} from "../shade/shadeService";
import {TestScheduler} from "rxjs/testing";

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

  it('should return all collections when calling getAllCollections', async () => {
    const data = [collectionFixture];
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
});
