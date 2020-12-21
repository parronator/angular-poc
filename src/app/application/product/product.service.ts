import {Product} from '../../core/product/domain/product';
import {UniqueId} from '../../shared/domain/uniqueId';
import {ProductFacade} from '../../core/product/domain/productFacade';
import {BaseService} from '../../shared/application/base.service';

export class ProductService extends BaseService<Product>{
  constructor(private productFacade: ProductFacade) {
    super();
  }

  async getAllProducts(): Promise<void>{
    this.setLoading(true);
    const products = await this.productFacade.getAll();
    this.setEntities(products);
    this.setLoading(false);
  }

  async createProduct(product: Product): Promise<void> {
    this.setLoading(true);
    await this.productFacade.create(product);
    this.addEntity(product);
    this.setLoading(false);
  }

  async getProductById(id: UniqueId): Promise<void> {
    this.setLoading(true);
    const products = await this.productFacade.getById(id.value);
    // TODO: Discuss what the state should look like when loading by Id.
    this.setEntities([products]);
    this.setLoading(false);
  }

}

