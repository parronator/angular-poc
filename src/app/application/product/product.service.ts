import {Product} from '../../core/product/domain/product';
import {UniqueId} from '../../shared/domain/uniqueId';
import {ProductFacade} from '../../core/product/domain/productFacade';
import {BaseService} from '../../shared/application/base.service';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class ProductService extends BaseService<Product>{

  constructor(private productFacade: ProductFacade) {
    super();
  }

  protected refreshEntities(): void {
    this.getAll();
  }

  async getAll(): Promise<void>{
    await this.tryLoad(async () => {
      const load = await this.productFacade.getAll();
      this.setEntities(load);
    });
  }

  async create(product: Product): Promise<void> {
    await this.tryLoad(async () => {
      await this.productFacade.create(product);
      this.addEntity(product);
    });
  }

  async getById(id: UniqueId): Promise<void> {
    await this.tryLoad(async () => {
      const products = await this.productFacade.getById(id.value);
      this.setEntities([products]);
    });
  }

}

