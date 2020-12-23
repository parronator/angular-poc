import {EntityFilter} from '../../core/shade/domain/filters';
import {GetAllFilteredResponse} from './GetAllFilteredResponse';

export abstract class BaseFacade<T>{
  abstract async getAll(): Promise<T[]>;
  abstract async getAllFiltered(filters: EntityFilter): Promise<GetAllFilteredResponse<T>>;
  abstract async getById(id: string): Promise<T>;
  abstract async create(entity: T): Promise<void>;
}
