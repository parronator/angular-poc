import {ShadeFacade} from '../../core/shade/domain/shadeFacade';
import {Shade} from '../../core/shade/domain/shade';
import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {map} from 'rxjs/operators';

export interface ShadeState {
  loading: boolean;
  entities: Shade[];
  error: boolean;
  newData: Shade[];
}

export const InitialShadeState: ShadeState = {
  loading: false,
  entities: [],
  error: false,
  newData: []
};

@Injectable({providedIn: 'root'})
export class ShadeService {
  constructor(private shadeFacade: ShadeFacade) {
  }

  private st = new BehaviorSubject(InitialShadeState);

  readonly state$ = this.st;
  readonly entities$ = this.st.pipe(map(state => state.entities));
  readonly loading$ = this.st.pipe(map(state => state.loading));

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

  private setEntities(shades: Shade[]): void {
    const currentState = this.st.getValue();
    this.st.next({...currentState, entities: shades});
  }

  private addEntity(shade: Shade): void {
    const currentState = this.st.getValue();
    this.st.next({...currentState, entities: [...currentState.entities, shade]});
  }

  private setLoading(loading: boolean): void {
    const currentState = this.st.getValue();
    this.st.next({...currentState, loading});
  }
}
