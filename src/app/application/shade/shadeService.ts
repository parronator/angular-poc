import {ShadeFacade} from '../../core/shade/domain/shadeFacade';
import {Shade} from '../../core/shade/domain/shade';

export class ShadeService {
  constructor(private shadeFacade: ShadeFacade) {
  }

  async getList(): Promise<Shade[]> {
    return await this.shadeFacade.getAll();
  }
  async create(): Promise<void> {
    return await this.shadeFacade.create();
  }
}
