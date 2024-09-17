interface HttpResponseBaseI {
  status: number;
}

export interface HttpResponseI<T> extends HttpResponseBaseI {
  data: T;
}
