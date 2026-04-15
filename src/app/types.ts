export interface ErrorResponse<T> {
  success: boolean;
  message: string;
  data: T;
  metadata: any;
}
