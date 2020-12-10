import {CollectionFacade} from '../domain/collectionFacade';
import {Collection} from '../domain/collection';
import {collectionFixture} from '../../../../fixture/collection';

export class TestCollectionFacade implements CollectionFacade {
  async getAllCollections(): Promise<Collection[]> {
    return Promise.resolve([collectionFixture]);
  }

  async getCollectionByID(id: string): Promise<Collection> {
    return Promise.resolve(collectionFixture);
  }
}
