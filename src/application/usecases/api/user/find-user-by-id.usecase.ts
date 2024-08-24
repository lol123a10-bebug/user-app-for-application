import { BaseUsecase } from "domain/_core";
import { UserNotFoundError } from "domain/_errors";
import { User, UserService } from "domain/models";

export type FindUserByIdUsecaseParams = { userId: number };
export type FindUserByIdUsecaseResult = User;

export type FindUserByIdUsecase = BaseUsecase<FindUserByIdUsecaseParams, FindUserByIdUsecaseResult>;

export class FindUserByIdUsecaseImpl implements FindUserByIdUsecase {
  constructor(private userService: UserService) {}

  async execute(params: FindUserByIdUsecaseParams): Promise<FindUserByIdUsecaseResult> {
    const user = await this.userService.findById(params.userId);

    if (!user) throw new UserNotFoundError();

    return user;
  }
}
