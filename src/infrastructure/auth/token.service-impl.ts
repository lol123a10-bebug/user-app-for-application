import { JwtService } from "@nestjs/jwt";

import { TokenService } from "domain/models";

export class TokenServiceImpl implements TokenService {
  constructor(private jwtService: JwtService) {}

  async generate<Data extends object>(data: Data): Promise<string> {
    return this.jwtService.signAsync(data);
  }
}
