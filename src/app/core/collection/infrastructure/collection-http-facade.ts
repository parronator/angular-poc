import {CollectionFacade} from '../domain/collectionFacade';
import {Collection} from '../domain/collection';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {EntityFilter} from '../../../shared/application/entity-state';
import {GetAllFilteredResponse} from '../../../shared/domain/GetAllFilteredResponse';
import {Injectable} from "@angular/core";

export class CollectionHttpError {
}
@Injectable()
export class CollectionHttpFacade implements CollectionFacade {

  constructor(private http: HttpClient) {
  }

  async getAll(): Promise<Collection[]> {
    try {
      return await this.http.get('/api/collection')
        .pipe(
          map((values: any) => values.map((v: any) => Collection.create(v)))
        ).toPromise();
    } catch (e) {
      throw new CollectionHttpError();
    }
  }

  async getById(id: string): Promise<Collection> {
    try {
      return await this.http.get(`/api/collection/${id}`)
        .pipe(
          map((v: any) => Collection.create(v))
        ).toPromise();
    } catch (e) {
      throw new CollectionHttpError();
    }
  }

  async create(entity: Collection): Promise<Collection> {
    try {
      // TODO: The entities should have a "to JSON" method so that they can easily be posted.
      return await this.http.post<Collection>('api/collection/create', entity.toJson()).toPromise();
    } catch (e) {
      throw new CollectionHttpError(); // TODO: Create CollectionHTTP Error.
    }
  }

  async getAllFiltered(filters: EntityFilter): Promise<GetAllFilteredResponse<Collection>> {
    throw new Error('Not yet implemented');
  }



}
