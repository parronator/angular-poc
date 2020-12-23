export interface EntityState<T>{
  loading: boolean;
  entities: T[];
  totalPages: number;
  pageSize: number;
  filters: EntityFilter;
  error: boolean;
}

export interface EntityFilter{
  page: number;
  orderBy: string;
  orderDirection: string;
}
