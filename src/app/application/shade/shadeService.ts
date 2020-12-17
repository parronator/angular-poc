import {ShadeFacade} from '../../core/shade/domain/shadeFacade';
import {Shade} from '../../core/shade/domain/shade';
import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {pluck} from 'rxjs/operators';

export interface ShadeState {
  loading: boolean;
  entities: Shade[];
  error: boolean;
}

export const InitialShadeState: ShadeState = {
  loading: false,
  entities: [],
  error: false,
};

@Injectable({providedIn: 'root'})
export class ShadeService {
  constructor(private shadeFacade: ShadeFacade) {
  }

  private st = new BehaviorSubject(InitialShadeState);

  readonly state$ = this.st;
  readonly entities$ = this.st.pipe(pluck('entities'));
  readonly loading$ = this.st.pipe(pluck('loading'));
  readonly error$ = this.st.pipe(pluck('error'));

  async loadList(): Promise<void> {
    this.setLoading(true);
    try {
      const shades = await this.shadeFacade.getAll();

      // Testing purposes ------------
      const shade = await this.shadeFacade.getShadeById('2');
      console.log(shade);
      // -----------------------------
      this.setEntities(shades);
    } catch (e) {
      this.setError();
    }
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
    if (loading) {
      this.st.next({...currentState, loading, error: false});
    } else {
      this.st.next({...currentState, loading});
    }
  }

  private setError(): void {
    const currentState = this.st.getValue();
    this.st.next({...currentState, error: true});
  }
}
