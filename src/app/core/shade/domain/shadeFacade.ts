import {Shade} from './shade';
import {ShadeFilters} from './filters';

export abstract class ShadeFacade {
  abstract async getAll(): Promise<Shade[]>;
  abstract async getAllFiltered(filters: ShadeFilters): Promise<ShadeGetAllFilteredResponse>;
  abstract async getShadeById(id: string): Promise<Shade>;
  abstract async getShadesByCollectionId(collectionId: string): Promise<Shade[]>;
  abstract async getShadesByCollectionIdAsPage(collectionId: string, page: number): Promise<Shade[]>;
  abstract async create(): Promise<void>;
}

export interface ShadeGetAllFilteredResponse {
  totalPages: number;
  pageSize: number;
  shades: Shade[];
}
