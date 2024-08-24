import { Module } from "@nestjs/common";

import { symbols } from "di/common/symbols";

import { UserService } from "domain/models";

import { CreateUserUsecaseImpl, FindUserByIdUsecaseImpl } from "usecases/api";

import { UserModule } from "../domain";

const { user } = symbols.usecases.api;

@Module({
  imports: [UserModule],
  providers: [
    {
      provide: user.create,
      useFactory: (userService: UserService) => new CreateUserUsecaseImpl(userService),
      inject: [symbols.user.service]
    },

    {
      provide: user.findById,
      useFactory: (userService: UserService) => new FindUserByIdUsecaseImpl(userService),
      inject: [symbols.user.service]
    }
  ],
  exports: [user.create, user.findById]
})
export class UserUsecasesModule {}
