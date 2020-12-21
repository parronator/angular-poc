import {EntityState} from './entity-state';
import {BehaviorSubject} from 'rxjs';
import {map} from 'rxjs/operators';

export abstract class BaseService<T> {
  InitialEntityState: EntityState<T> = {loading: false, entities: [], error: false};

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
    if (loading) {
      this.st.next({...currentState, loading, error: false});
    } else {
      this.st.next({...currentState, loading});
    }
  }

  protected setError(exception: any): void {
    // Currently doesn't do anything with error, but it could be
    // useful to perhaps do something with the error message?
    const currentState = this.st.getValue();
    this.st.next({...currentState, error: true});
  }
}
