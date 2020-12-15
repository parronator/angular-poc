import {Product} from "../../core/product/domain/product";
import {UniqueId} from "../../core/shared/uniqueId";

export abstract class ProductFacade {
  abstract async getAll(): Promise<Product[]>;
  abstract async create(product: Product): Promise<Product>;
  abstract async getById(id: string): Promise<Product>;
}

