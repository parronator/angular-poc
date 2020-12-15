import {ProductFacade} from "../domain/productFacade";
import {Product} from "../domain/product";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Injectable} from "@angular/core";
import {UniqueId} from "../../shared/uniqueId";

export class ProductHttpError {
}

@Injectable()
export class ProductHttpFacade implements ProductFacade{
  constructor(private httpClient : HttpClient) {
  }

  async getAll(): Promise<Product[]> {
    try {
      return await this.httpClient.get('/getListOfProducts')
        .pipe(
          map((values: any) => values.map((v: any)=>Product.create(v)))
        ).toPromise();
    }
    catch(e){
      throw new ProductHttpError();
    }
  }

  async create(product: Product): Promise<Product> {
    try {
      return await this.httpClient.post<Product>('/createProduct', JSON.stringify(product)).toPromise();
    } catch (e) {
      throw new ProductHttpError();
    }
  }

  async getById(id: string): Promise<Product> {
    try {
      return await this.httpClient.get('/getProductById?id='+ id)
        .pipe(
          map((values: any)  => {
            console.log(values);
            return Product.create(values);
          })
        ).toPromise();
    } catch (e) {
      throw new ProductHttpError();
    }
  }


}
