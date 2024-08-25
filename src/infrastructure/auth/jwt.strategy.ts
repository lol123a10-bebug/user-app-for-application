import { Inject, Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

import { symbols } from "di/common";

import { Config, JwtConfig } from "infrastructure/config";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(@Inject(symbols.common.config) config: Config) {
    const { secret } = config.getOrThrow("jwt") as JwtConfig;

    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: secret
    });
  }

  async validate(payload: any) {
    return { userId: payload.userId, username: payload.username };
  }
}
