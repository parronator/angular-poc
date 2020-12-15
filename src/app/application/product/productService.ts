import {Product} from "../../core/product/domain/product";
import {ProductFacade} from "./productFacade";
import {UniqueId} from "../../core/shared/uniqueId";

export class ProductService{
  constructor(private productFacade:ProductFacade){

  }

  async getList(): Promise<Product[]>{
    return await this.productFacade.getAll();
  }

  async create(product: Product): Promise<Product> {
    return await this.productFacade.create(product);
  }

  async getById(id: UniqueId): Promise<Product> {
    return await this.productFacade.getById(id.value);
  }

}

