import { Module } from "@nestjs/common";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";

import { symbols } from "di/common";

import { UserRepository, UserServiceImpl } from "domain/models";
import { CryptoServiceImpl, TokenServiceImpl } from "infrastructure/auth";
import { Config, JwtConfig } from "infrastructure/config";
import { UserRepositoryImpl } from "infrastructure/database";

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      useFactory: async (config: Config) => {
        const { secret } = config.getOrThrow("jwt") as JwtConfig;

        return {
          secret,
          signOptions: {
            expiresIn: "60s"
          }
        };
      },
      inject: [symbols.common.config]
    })
  ],

  providers: [
    {
      provide: symbols.user.repository,
      useClass: UserRepositoryImpl
    },

    {
      provide: symbols.user.service,
      useFactory: (repository: UserRepository) => new UserServiceImpl(repository),
      inject: [symbols.user.repository]
    },

    {
      provide: symbols.auth.crypto,
      useClass: CryptoServiceImpl
    },

    {
      provide: symbols.auth.token,
      useFactory: (jwtService: JwtService) => new TokenServiceImpl(jwtService),
      inject: [JwtService]
    }
  ],

  exports: [symbols.user.service, symbols.auth.crypto, symbols.auth.token]
})
export class UserModule {}
