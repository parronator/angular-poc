
import {EntityState} from "./entity-state";
import {BehaviorSubject} from "rxjs";
import {map} from 'rxjs/operators';

export abstract class BaseService<T> {
  InitialEntityState: EntityState<T> = {loading: false, entities: []};

  protected constructor() { }

  private st = new BehaviorSubject(this.InitialEntityState);

  readonly state$ = this.st;
  readonly entities$ = this.st.pipe(map(state => state.entities));
  readonly loading$ = this.st.pipe(map(state => state.loading));

  protected setEntities(objects: T[]): void {
    const currentState = this.st.getValue();
    this.st.next({...currentState, entities: objects});
  }

  protected setEntity(object: T): void {
    const currentState = this.st.getValue();
    this.st.next({...currentState, entities: [object]});
  }

  protected addEntity(object: T): void {
    const currentState = this.st.getValue();
    this.st.next({...currentState, entities: [...currentState.entities, object]});
  }

  protected setLoading(loading: boolean): void {
    const currentState = this.st.getValue();
    this.st.next({...currentState, loading});
  }
}
