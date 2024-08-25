import { BaseUsecase } from "domain/_core";
import { TokenService, User } from "domain/models";

export type CreateTokenUsecaseParams = User;

export type CreateTokenUsecaseResult = string;

export type CreateTokenUsecase = BaseUsecase<CreateTokenUsecaseParams, CreateTokenUsecaseResult>;

export class CreateTokenUsecaseImpl implements CreateTokenUsecase {
  constructor(private tokenService: TokenService) {}

  async execute(user: CreateTokenUsecaseParams): Promise<CreateTokenUsecaseResult> {
    return await this.tokenService.generate({ username: user.username, userId: user.id });
  }
}
