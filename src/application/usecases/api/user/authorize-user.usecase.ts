import { BaseUsecase } from "domain/_core";
import { PasswordAreNotEqualError, UserNotFoundError } from "domain/_errors";
import { CryptoService, User, UserService } from "domain/models";

export type AuthorizeUserUsecaseParams = {
  username: string;
  password: string;
};

export type AuthorizeUserUsecaseResult = User;

export type AuthorizeUserUsecase = BaseUsecase<AuthorizeUserUsecaseParams, AuthorizeUserUsecaseResult>;

export class AuthorizeUserUsecaseImpl implements AuthorizeUserUsecase {
  constructor(
    private userService: UserService,
    private cryptoService: CryptoService
  ) {}

  async execute(params: AuthorizeUserUsecaseParams): Promise<AuthorizeUserUsecaseResult> {
    const user = await this.userService.findByUsername(params.username);

    if (!user) throw new UserNotFoundError();

    const isEqual = await this.cryptoService.compare(params.password, user.password);

    if (!isEqual) throw new PasswordAreNotEqualError();

    return user;
  }
}
