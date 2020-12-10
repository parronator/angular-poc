// @ts-ignore
import {instance, mock, verify, when} from 'ts-mockito';
import { CollectionService } from './collection.service';
import {CollectionFacade} from '../../core/collection/domain/collectionFacade';
import {collectionFixture} from '../../../fixture/collection';

const MockCollectionFacade = mock<CollectionFacade>();

describe('CollectionService', () => {
  let collectionService: CollectionService;
  let mockCollectionFacade: CollectionFacade;

  beforeEach(() => {
    mockCollectionFacade = instance(MockCollectionFacade);
    collectionService = new CollectionService(mockCollectionFacade);
  });

  it('should be created', () => {
    expect(collectionService).toBeTruthy();
  });

  it('should return all collections when calling getAllCollections', async () => {
    const data = [collectionFixture];
    when(mockCollectionFacade.getAllCollections()).thenResolve(data);
    const response = await collectionService.getAllCollections();
    expect(response).toEqual(data);
    verify(mockCollectionFacade.getAllCollections()).called();
  });
});
