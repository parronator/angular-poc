import {Product} from '../domain/product';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {ProductFacade} from '../domain/productFacade';
import {EntityFilter} from '../../shade/domain/filters';
import {GetAllFilteredResponse} from '../../../shared/domain/GetAllFilteredResponse';
import {serialize} from '../../../shared/domain/FacadeUtils';

export class ProductHttpError {
}

@Injectable()
export class ProductHttpFacade implements ProductFacade {
  constructor(private httpClient: HttpClient) {
  }

  async getAll(): Promise<Product[]> {
    try {
      return await this.httpClient.get('/api/products')
        .pipe(
          map((values: any) => values.map((v: any) => Product.create(v)))
        ).toPromise();
    } catch (e) {
      throw new ProductHttpError();
    }
  }

  async create(product: Product): Promise<Product> {
    try {
      return await this.httpClient.post<Product>('/createProduct', product).toPromise();
    } catch (e) {
      throw new ProductHttpError();
    }
  }

  async getById(id: string): Promise<Product> {
    try {
      return await this.httpClient.get('/getProductById?id=' + id)
        .pipe(
          map((values: any) => Product.create(values))
        ).toPromise();
    } catch (e) {
      throw new ProductHttpError();
    }
  }

  async getAllFiltered(filters: EntityFilter): Promise<GetAllFilteredResponse<Product>> {
    try {
      return await this.httpClient.get('/api/products?' + serialize(filters)).pipe(
        map((data: any) => {
          return {
            pageSize: data.pageSize,
            totalPages: data.totalPages,
            entities: data.values.map((v: any) => Product.create(v))
          };
        })
      ).toPromise();
    } catch (e) {
      throw e; // Todo: create exceptions. For now, caught exception is just passed further
    }
  }


}
