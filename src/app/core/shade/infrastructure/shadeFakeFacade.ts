import {Injectable} from '@angular/core';
import {ShadeFacade} from '../domain/shadeFacade';
import {Shade} from '../domain/shade';
import {shadeFixture} from '../../../../fixture/shade';

const sleep = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

@Injectable()
export class ShadeFakeFacade implements ShadeFacade {
  async create(): Promise<void> {
    return undefined;
  }

  async getAll(): Promise<Shade[]> {
    await sleep(3000);
    return [shadeFixture, shadeFixture];
  }

  async getShadeById(id: string): Promise<Shade> {
    return shadeFixture;
  }

  async getShadesByCollectionId(collectionId: string): Promise<Shade[]> {
    return [shadeFixture, shadeFixture];
  }

  async getShadesByCollectionIdAsPage(collectionId: string, page: number): Promise<Shade[]> {
    return [shadeFixture, shadeFixture];
  }
}
