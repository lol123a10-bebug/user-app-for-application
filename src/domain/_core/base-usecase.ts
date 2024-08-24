export interface BaseUsecase<Params, Result> {
  execute(params: Params): Promise<Result>;
}
