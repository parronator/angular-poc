import {CollectionFacade} from '../domain/collectionFacade';
import {Collection} from '../domain/collection';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

export class CollectionHttpError {
}

export class CollectionHttpFacade implements CollectionFacade {

  constructor(private http: HttpClient) {
  }

  async getAllCollections(): Promise<Collection[]> {
    try {
      return await this.http.get('/allCollections')
        .pipe(
          map((values: any) => values.map((v: any) => Collection.create(v)))
        ).toPromise();
    } catch (e) {
      throw new CollectionHttpError();
    }
  }

  async getCollectionByID(id: string): Promise<Collection> {
    try {
      return await this.http.get(`/allCollections?id=${id}`)
        .pipe(
          map((values: any) => values.map((v: any) => Collection.create(v)))
        ).toPromise();
    } catch (e) {
      throw new CollectionHttpError();
    }
  }

}
