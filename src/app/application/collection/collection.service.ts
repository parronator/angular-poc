import {CollectionFacade} from '../../core/collection/domain/collectionFacade';
import {Collection} from '../../core/collection/domain/collection';
import {BaseService} from '../../shared/application/base.service';
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class CollectionService extends BaseService<Collection> {

  constructor(private collectionFacade: CollectionFacade) {
    super();
  }

  async getAll(): Promise<void> {
    await this.tryLoad(async () => {
      const load = await this.collectionFacade.getAll();
      this.setEntities(load);
    });
  }
  async getById(id: string): Promise<void> {
    await this.tryLoad(async () => {
      const load = await this.collectionFacade.getById(id);
      console.log('loaded');
      console.log(load);
      this.setEntity(load);
    });
  }
  async create(collection: Collection): Promise<void>{
    await this.tryLoad(async () => {
      const created = await this.collectionFacade.create(collection);
      this.setEntity(created);
      // TODO: Discuss. Does Promise<void> really make sense here?
      // The created item is immediatly used upon creation, can't we just return it?
    });
  }

  protected refreshEntities(): void {
    this.getAll();
  }

}
