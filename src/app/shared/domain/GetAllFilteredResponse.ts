export interface GetAllFilteredResponse<T> {
  totalPages: number;
  pageSize: number;
  entities: T[];
}
