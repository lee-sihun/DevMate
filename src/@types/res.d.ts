declare module 'response-data-type' {
  interface DataSet {
    data: object | null | undefined;
    error: string;
  }

  interface Response {
    status: number;
    data: DataSet;
  }
}
