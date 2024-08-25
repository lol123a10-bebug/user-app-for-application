import { compare, genSalt, hash } from "bcrypt";

import { CryptoData, CryptoService } from "domain/models";

export class CryptoServiceImpl implements CryptoService {
  async compare(password: string, cryptedPassword: string): Promise<boolean> {
    const passwordMatches = await compare(password, cryptedPassword);

    return passwordMatches;
  }

  async crypt(password: string, saltRounds: number = 10): Promise<CryptoData> {
    const salt = await this.generateSalt(saltRounds);

    const cryptedPassword = await hash(password, salt);

    return { cryptedPassword, salt };
  }

  private async generateSalt(saltRounds: number): Promise<string> {
    const salt = await genSalt(saltRounds);

    return salt;
  }
}
