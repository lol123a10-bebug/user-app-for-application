import { Module } from "@nestjs/common";

import { symbols } from "di/common/symbols";

import { CryptoService, TokenService, UserService } from "domain/models";
import { JwtStrategy } from "infrastructure/auth";

import { AuthorizeUserUsecaseImpl, CreateTokenUsecaseImpl, CreateUserUsecaseImpl, FindUserByIdUsecaseImpl } from "usecases/api";

import { UserModule } from "../domain";

const { user } = symbols.usecases.api;

@Module({
  imports: [UserModule],
  providers: [
    {
      provide: user.create,
      useFactory: (userService: UserService, cryptoService: CryptoService) => new CreateUserUsecaseImpl(userService, cryptoService),
      inject: [symbols.user.service, symbols.auth.crypto]
    },

    {
      provide: user.findById,
      useFactory: (userService: UserService) => new FindUserByIdUsecaseImpl(userService),
      inject: [symbols.user.service]
    },

    {
      provide: user.authorize,
      useFactory: (userService: UserService, cryptoService: CryptoService) => new AuthorizeUserUsecaseImpl(userService, cryptoService),
      inject: [symbols.user.service, symbols.auth.crypto]
    },

    {
      provide: user.createToken,
      useFactory: (tokenService: TokenService) => new CreateTokenUsecaseImpl(tokenService),
      inject: [symbols.auth.token]
    },

    JwtStrategy
  ],
  exports: [user.create, user.findById, user.authorize, user.createToken]
})
export class UserUsecasesModule {}
