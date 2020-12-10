import {Product} from "../../core/product/domain/product";
import {productFixture} from "../../../fixture/product";
import {of} from "rxjs";
import {ProductFacade} from "./productFacade";

export class ProductService{
  constructor(private productFacade:ProductFacade){

  }

  async getList(): Promise<Product[]>{
    return await this.productFacade.getAll();
  }

}
