import {ShadeFacade} from '../domain/shadeFacade';
import {HttpClient} from '@angular/common/http';
import {Shade} from '../domain/shade';
import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';

export class ShadeHttpError {
}

@Injectable()
export class ShadeHttpFacade implements ShadeFacade {
  constructor(private httpClient: HttpClient) {
  }

  async create(): Promise<void> {
    return undefined;
  }

  async getAll(): Promise<Shade[]> {
    try {
      return await this.httpClient.get('/getListOfShades')
        .pipe(
          map((values: any) => values.map((v: any) => Shade.create(v)))
        ).toPromise();
    } catch (e) {
      throw new ShadeHttpError();
    }
  }

  async getShadeById(id: string): Promise<Shade> {
    try {
      return await this.httpClient.get(`/shades?id=${id}`)
        .pipe(
          map((values: any)  => {
            console.log(values);
            return Shade.create(values);
          })
        ).toPromise();
    } catch (e) {
      throw new ShadeHttpError();
    }
  }

  async getShadesByCollectionId(collectionId: string, page: number): Promise<Shade[]> {
    try {
      return await this.httpClient.get(`/shades?collectionid=${collectionId}&page=${page}`)
        .pipe(
          map((values: any) => values.map((v: any) => Shade.create(v)))
        ).toPromise();
    } catch (e) {
      throw new ShadeHttpError();
    }
  }
}
