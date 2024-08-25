export interface CryptoData {
  cryptedPassword: string;
  salt: string;
}

export interface CryptoService {
  crypt(password: string, saltRounds?: number): Promise<CryptoData>;

  compare(password: string, cryptedPassword: string): Promise<boolean>;
}
