import {ShadeFacade} from '../domain/shadeFacade';
import {Shade} from '../domain/shade';
import {shadeListFixture} from '../../../../fixture/shade';

class NotImplementedException{}
export class TestShadeFacade implements ShadeFacade{

  async create(): Promise<void> {
    //TODO
    throw new NotImplementedException();
  }

  async getAll(): Promise<Shade[]> {
    return Promise.resolve(shadeListFixture);
  }

  async getShadeById(id: string): Promise<Shade> {
    //TODO
    throw new NotImplementedException();
  }

  async getShadesByCollectionId(collectionId: string): Promise<Shade[]> {
    //TODO
    throw new NotImplementedException();
  }

}
