import {CollectionFacade} from '../../core/collection/domain/collectionFacade';
import {Collection} from '../../core/collection/domain/collection';


export class CollectionService {

  constructor(private collectionFacade: CollectionFacade) { }

  async getAllCollections(): Promise<Collection[]> {
    return await this.collectionFacade.getAllCollections();
  }
  async getCollectionById(id: string): Promise<Collection> {
    throw new Error();
    // return await this.collectionFacade.getCollectionByID(id);
  }

}
