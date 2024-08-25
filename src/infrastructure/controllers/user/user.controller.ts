import { Body, Controller, Get, Inject, Param, Post } from "@nestjs/common";

import { symbols } from "di/common";

import { User } from "domain/models";
import { Serialize } from "infrastructure/decorators";

import { CreateUserUsecase, FindUserByIdUsecase } from "usecases/api";

import { CreateUserDto, FetchByIdDto } from "./dtos";
import { UserPresenter } from "./presenters";

@Serialize(UserPresenter)
@Controller("user")
export class UserController {
  constructor(
    @Inject(symbols.usecases.api.user.create) private createUserUsecase: CreateUserUsecase,
    @Inject(symbols.usecases.api.user.findById) private findUserByIdUsecase: FindUserByIdUsecase
  ) {}

  @Post("create")
  async createUser(@Body() body: CreateUserDto) {
    const user = await this.createUserUsecase.execute(new User(body));

    return user;
  }

  @Get(":id")
  async fetchById(@Param() params: FetchByIdDto) {
    const user = await this.findUserByIdUsecase.execute(params.id);

    return user;
  }
}
