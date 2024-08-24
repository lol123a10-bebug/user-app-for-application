import { Module } from "@nestjs/common";

import { symbols } from "di/common";

import { UserRepository, UserServiceImpl } from "domain/models";
import { UserRepositoryImpl } from "infrastructure/database";

@Module({
  imports: [],
  providers: [
    {
      provide: symbols.user.repository,
      useClass: UserRepositoryImpl
    },

    {
      provide: symbols.user.service,
      useFactory: (repository: UserRepository) => new UserServiceImpl(repository),
      inject: [symbols.user.repository]
    }
  ],

  exports: [symbols.user.service]
})
export class UserModule {}
