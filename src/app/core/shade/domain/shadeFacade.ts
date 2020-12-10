import {Shade} from './shade';

export abstract class ShadeFacade {
  abstract async getAll(): Promise<Shade[]>;
  abstract async getShadeById(id: string): Promise<Shade>;
  abstract async getShadesByCollectionId(collectionId: string): Promise<Shade[]>;
  abstract async create(): Promise<void>;
}

