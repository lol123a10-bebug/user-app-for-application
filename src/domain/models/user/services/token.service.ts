export interface TokenService {
  generate<Data extends object>(data: Data): Promise<string>;
}
