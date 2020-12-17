import {CollectionFacade} from '../../core/collection/domain/collectionFacade';
import {Collection} from '../../core/collection/domain/collection';
import {BaseService} from '../../shared/application/base.service';


export class CollectionService extends BaseService<Collection> {

  constructor(private collectionFacade: CollectionFacade) {
    super();
  }

  async getAllCollections(): Promise<void> {
    this.setLoading(true);
    const shades = await this.collectionFacade.getAllCollections();
    this.setEntities(shades);
    this.setLoading(false);
  }
  async getCollectionById(id: string): Promise<void> {
    this.setLoading(true);
    const shade = await this.collectionFacade.getCollectionByID(id);
    this.setEntities([shade]);
    this.setLoading(false);
  }

}
