import { Body, Controller, Get, Inject, Param, Post } from "@nestjs/common";

import { symbols } from "di/common";

import { User } from "domain/models";
import { Serialize, UseAuth } from "infrastructure/decorators";

import { AuthorizeUserUsecase, CreateTokenUsecase, CreateUserUsecase, FindUserByIdUsecase } from "usecases/api";

import { CreateUserDto, FetchByIdDto } from "./dtos";
import { LoginDto } from "./dtos/login.dto";
import { UserPresenter } from "./presenters";

@Controller("user")
export class UserController {
  constructor(
    @Inject(symbols.usecases.api.user.create) private createUserUsecase: CreateUserUsecase,
    @Inject(symbols.usecases.api.user.findById) private findUserByIdUsecase: FindUserByIdUsecase,
    @Inject(symbols.usecases.api.user.authorize) private authorizeUserUsecase: AuthorizeUserUsecase,
    @Inject(symbols.usecases.api.user.createToken) private createTokenUsecase: CreateTokenUsecase
  ) {}

  // @UseAuth()
  @Serialize(UserPresenter)
  @Post("create")
  async createUser(@Body() body: CreateUserDto) {
    const user = await this.createUserUsecase.execute(new User(body));

    return user;
  }

  @UseAuth()
  @Serialize(UserPresenter)
  @Get(":id")
  async fetchById(@Param() params: FetchByIdDto) {
    const user = await this.findUserByIdUsecase.execute(params.id);

    return user;
  }

  @Post("login")
  async login(@Body() body: LoginDto) {
    const user = await this.authorizeUserUsecase.execute(body);
    const token = await this.createTokenUsecase.execute(user);

    return {
      access_token: token
    };
  }
}
