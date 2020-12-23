import {ShadeFacade} from '../../core/shade/domain/shadeFacade';
import {Shade} from '../../core/shade/domain/shade';
import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {pluck} from 'rxjs/operators';
import {EntityFilter} from '../../core/shade/domain/filters';
import {GetAllFilteredResponse} from '../../shared/domain/GetAllFilteredResponse';

export interface ShadeState {
  loading: boolean;
  entities: Shade[];
  totalPages: number;
  pageSize: number;
  error: boolean;
  filters: EntityFilter;
}

export const InitialShadeState: ShadeState = {
  loading: false,
  entities: [],
  totalPages: 0,
  pageSize: 0,
  error: false,
  filters: {
    page: 1,
    orderBy: '',
    orderDirection: ''
  }
};

@Injectable({providedIn: 'root'})
export class ShadeService {
  constructor(private shadeFacade: ShadeFacade) {
  }

  private st = new BehaviorSubject(InitialShadeState);

  readonly state$: Observable<ShadeState> = this.st;
  readonly loading$: Observable<boolean> = this.st.pipe(pluck('loading'));
  readonly error$: Observable<boolean> = this.st.pipe(pluck('error'));

  async getAll(): Promise<void> {
    const currentState = this.st.getValue();
    if (!currentState.entities.length) {
      this.setLoading(true);
    }
    try {
      const response: GetAllFilteredResponse<Shade> = await this.shadeFacade.getAllFiltered(currentState.filters);
      this.setEntities(response.entities, response.totalPages, response.pageSize);
    } catch (e) {
      this.setError();
    }
    this.setLoading(false);
  }

  changePage(page: number): void {
    const currentState = this.st.getValue();
    this.st.next({...currentState, filters: {...currentState.filters, page}});
    this.getAll();
  }

  changeOrder(field: string, direction: string): void {
    const currentState = this.st.getValue();
    this.st.next({...currentState, filters: {...currentState.filters, orderBy: field, orderDirection: direction}});
    this.getAll();
  }

  async create(shade: Shade): Promise<void> {
    this.setLoading(true);
    await this.shadeFacade.create(shade);
    this.addEntity(shade);
    this.setLoading(false);
  }

  private setEntities(shades: Shade[], totalPages: number, pageSize: number): void {
    const currentState = this.st.getValue();
    this.st.next({...currentState, entities: shades, totalPages, pageSize});
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
