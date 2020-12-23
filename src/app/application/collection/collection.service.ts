import {CollectionFacade} from '../../core/collection/domain/collectionFacade';
import {Collection} from '../../core/collection/domain/collection';
import {BaseService} from '../../shared/application/base.service';


export class CollectionService extends BaseService<Collection> {

  constructor(private collectionFacade: CollectionFacade) {
    super();
  }

  async getAll(): Promise<void> {
    this.setLoading(true);
    try{
      const collections = await this.collectionFacade.getAllCollections();
      this.setEntities(collections);
    } catch (e) {
      this.setError(e);
    }
    this.setLoading(false);
  }
  async getCollectionById(id: string): Promise<void> {
    this.setLoading(true);
    try {
      const collection = await this.collectionFacade.getCollectionByID(id);
      this.setEntity(collection);
    }
    catch (e){
      this.setError(e);
    }
    this.setLoading(false);
  }
  async createCollection(collection: Collection): Promise<void>{
    throw new Error('Not yet implemented');
  }

  protected refreshEntities(): void {
    this.getAll();
  }

}
