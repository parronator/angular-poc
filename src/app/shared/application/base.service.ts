import {EntityFilter, EntityState} from './entity-state';
import {BehaviorSubject, Observable} from 'rxjs';
import {map, pluck} from 'rxjs/operators';
import {GetAllFilteredResponse} from "../domain/GetAllFilteredResponse";
import {Shade} from "../../core/shade/domain/shade";

export abstract class BaseService<T> {
  InitialEntityState: EntityState<T> = {
    loading: false,
    entities: [],
    totalPages: 0,
    pageSize: 0,
    filters: {
      page: 1,
      orderBy: '',
      orderDirection: ''
    },
    error: false
  };

  protected constructor() { }

  private st = new BehaviorSubject(this.InitialEntityState);

  readonly state$ = this.st;
  readonly entities$ = this.st.pipe(map(state => state.entities));
  readonly loading$: Observable<boolean> = this.st.pipe(pluck('loading'));
  readonly error$: Observable<boolean> = this.st.pipe(pluck('error'));
  readonly filters$: Observable<EntityFilter> = this.st.pipe(pluck('filter'));

  protected setEntities(objects: T[]): void {
    const currentState = this.st.getValue();
    this.st.next({...currentState, entities: objects});
  }

  protected setEntity(object: T): void {
    const currentState = this.st.getValue();
    this.st.next({...currentState, entities: [object]});
    console.log('SetEntity has been called.');
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

  changePage(page: number): void {
    const currentState = this.st.getValue();
    this.st.next({...currentState, filters: {...currentState.filters, page}});
    this.refreshEntities();
  }

  changeOrder(field: string, direction: string): void {
    const currentState = this.st.getValue();
    this.st.next({...currentState, filters: {...currentState.filters, orderBy: field, orderDirection: direction}});
    this.refreshEntities();
  }

  /**
   * Sets loading state and tries to execute the given function, then sets loading to false.
   * Sets error state in an exception is caught.
   * @param fun function that should be executed.
   */
  async tryLoad(fun: () => any): Promise<void>{
    const currentState = this.st.getValue();
    if (!currentState.entities.length) {
      this.setLoading(true);
    }
    try {
      await fun();
    } catch (e) {
      this.setError(e);
    }
    this.setLoading(false);
  }

  protected abstract refreshEntities(): void;
}
