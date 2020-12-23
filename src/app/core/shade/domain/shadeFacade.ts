import {Shade} from './shade';
import {BaseFacade} from '../../../shared/domain/BaseFacade';

export abstract class ShadeFacade extends BaseFacade<Shade>{
  abstract async getByCollectionId(collectionId: string): Promise<Shade[]>;
  abstract async getByCollectionIdAsPage(collectionId: string, page: number): Promise<Shade[]>;
}
