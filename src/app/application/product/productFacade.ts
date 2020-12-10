import {Product} from "../../core/product/domain/product";

export abstract class ProductFacade {
  abstract async getAll(): Promise<Product[]>;
}

