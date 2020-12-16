import {Product} from '../../core/product/domain/product';
import {UniqueId} from '../../shared/domain/uniqueId';
import {ProductFacade} from '../../core/product/domain/productFacade';

export class ProductService {
  constructor(private productFacade: ProductFacade) {
  }

  async getList(): Promise<Product[]> {
    return await this.productFacade.getAll();
  }

  async create(product: Product): Promise<Product> {
    return await this.productFacade.create(product);
  }

  async getById(id: UniqueId): Promise<Product> {
    return await this.productFacade.getById(id.value);
  }

}

