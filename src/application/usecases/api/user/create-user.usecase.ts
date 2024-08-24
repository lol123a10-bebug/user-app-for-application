import { BaseUsecase } from "domain/_core";
import { User, UserService } from "domain/models";

export type CreateUserUsecaseParams = User;
export type CreateUserUsecaseResult = User;

export type CreateUserUsecase = BaseUsecase<CreateUserUsecaseParams, CreateUserUsecaseResult>;

export class CreateUserUsecaseImpl implements CreateUserUsecase {
  constructor(private userService: UserService) {}

  async execute(user: CreateUserUsecaseParams): Promise<CreateUserUsecaseResult> {
    const createdUser = await this.userService.create(user);

    return createdUser;
  }
}
