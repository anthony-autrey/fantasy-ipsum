export interface SortQuery {
  field: string;
  direction?: `ascending` | `descending`;
}
export interface PageQuery {
  number: number;
  size: number;
}
