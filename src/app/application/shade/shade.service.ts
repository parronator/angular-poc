import {ShadeFacade} from '../../core/shade/domain/shadeFacade';
import {Shade} from '../../core/shade/domain/shade';
import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {pluck} from 'rxjs/operators';
import {BaseService} from '../../shared/application/base.service';


@Injectable({providedIn: 'root'})
export class ShadeService extends BaseService<Shade>{
  constructor(private shadeFacade: ShadeFacade) {
    super();
  }


  async getAllShades(): Promise<void> {
    this.setLoading(true);
    try {
      const shades = await this.shadeFacade.getAll();

      // Testing purposes ------------
      const shade = await this.shadeFacade.getShadeById('2');
      console.log(shade);
      // -----------------------------
      this.setEntities(shades);
    } catch (e) {
      this.setError(e);
    }
    this.setLoading(false);
  }

  async createShade(shade: Shade): Promise<void> {
    this.setLoading(true);
    try {
      await this.shadeFacade.create();
      this.addEntity(shade);
    }
    catch (e){
      this.setError(e);
    }
    this.setLoading(false);
  }

  async getShadeById(id: string): Promise<void> {
    throw new Error('Not yet implemented');
  }
}
