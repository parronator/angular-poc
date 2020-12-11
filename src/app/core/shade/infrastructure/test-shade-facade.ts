import {ShadeFacade} from '../domain/shadeFacade';
import {Shade} from '../domain/shade';
import {shadeListFixturePage1} from '../../../../fixture/shade';

class NotImplementedException{}
export class TestShadeFacade implements ShadeFacade{

  async create(): Promise<void> {
    //TODO
    throw new NotImplementedException();
  }

  async getAll(): Promise<Shade[]> {
    return Promise.resolve(shadeListFixturePage1);
  }

  async getShadeById(id: string): Promise<Shade> {
    //TODO
    throw new NotImplementedException();
  }

  async getShadesByCollectionId(collectionId: string, page: number): Promise<Shade[]> {
    //TODO
    throw new NotImplementedException();
  }

}
