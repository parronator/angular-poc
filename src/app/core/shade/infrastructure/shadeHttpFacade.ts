import {ShadeFacade} from '../domain/shadeFacade';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Shade} from '../domain/shade';
import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {
  ShadeGetAllHttpError,
  ShadeGetByCollectionIdAsPageHttpError,
  ShadeGetByCollectionIdHttpError,
  ShadeGetByIdHttpError
} from '../domain/exceptions';
import {GetAllFilteredResponse} from '../../../shared/domain/GetAllFilteredResponse';
import {EntityFilter} from '../../../shared/application/entity-state';
import {serialize} from '../../../shared/domain/FacadeUtils';

@Injectable()
export class ShadeHttpFacade implements ShadeFacade {
  constructor(private httpClient: HttpClient) {
  }


  async create(): Promise<void> {
    return undefined;
  }

  async getAll(): Promise<Shade[]> {
    try {
      return await this.httpClient.get('/api/shades').pipe(
        map((values: any) => values.map((v: any) => Shade.create(v)))
      ).toPromise();
    } catch (e) {
      throw new ShadeGetAllHttpError();
    }
  }

  async getAllFiltered(filters: EntityFilter): Promise<GetAllFilteredResponse<Shade>> {
    try {
      return await this.httpClient.get('/api/shades?' + serialize(filters)).pipe(
        map((data: any) => {
          return {
            pageSize: data.pageSize,
            totalPages: data.totalPages,
            entities: data.values.map((v: any) => Shade.create(v))
          };
        })
      ).toPromise();
    } catch (e) {
      throw new ShadeGetAllHttpError();
    }
  }


  async getById(id: string): Promise<Shade> {
    try {
      return await this.httpClient.get(`/api/shades/${id}`)
        .pipe(
          map((values: any) => Shade.create(values))
        ).toPromise();
    } catch (e) {
      throw new ShadeGetByIdHttpError();
    }
  }

  async getByCollectionId(collectionId: string): Promise<Shade[]> {
    throw new ShadeGetByCollectionIdHttpError();
  }

  async getByCollectionIdAsPage(collectionId: string, page: number): Promise<Shade[]> {
    try {
      return await this.httpClient.get(`/shades?collectionid=${collectionId}&page=${page}`)
        .pipe(
          map((values: any) => values.map((v: any) => Shade.create(v)))
        ).toPromise();
    } catch (e) {
      throw new ShadeGetByCollectionIdAsPageHttpError();
    }
  }
}

