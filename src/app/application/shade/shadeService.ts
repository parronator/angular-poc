import {ShadeFacade} from '../../core/shade/domain/shadeFacade';
import {Shade} from '../../core/shade/domain/shade';
import {Injectable} from '@angular/core';
import {ComponentStore} from '@ngrx/component-store';

export interface ShadeState {
  loading: boolean;
  entities: Shade[];
}

export const InitialShadeState: ShadeState = {loading: false, entities: []};

@Injectable({providedIn: 'root'})
export class ShadeService extends ComponentStore<ShadeState> {
  constructor(private shadeFacade: ShadeFacade) {
    super(InitialShadeState);
  }

  readonly state$ = this.select(state => state);
  readonly entities$ = this.select(state => state.entities);
  readonly loading$ = this.select(state => state.loading);

  async loadList(): Promise<void> {
    this.setLoading(true);
    const shades = await this.shadeFacade.getAll();
    this.setEntities(shades);
    this.setLoading(false);
  }

  async create(shade: Shade): Promise<void> {
    this.setLoading(true);
    await this.shadeFacade.create();
    this.addEntity(shade);
    this.setLoading(false);
  }

  private setEntities = this.updater((state, shades: Shade[]) => ({
    ...state,
    entities: shades,
  }));

  private addEntity = this.updater((state, shade: Shade) => ({
    ...state,
    entities: [...state.entities, shade],
  }));

  private setLoading(loading: boolean): void {
    this.patchState((state) => ({
      loading
    }));
  }
}
