import {Collection} from './collection';

export abstract class CollectionFacade{
  async abstract getAllCollections(): Promise<Collection[]>;
  async abstract getCollectionByID(id: string): Promise<Collection>;

  // TODO: other crud operations
}
