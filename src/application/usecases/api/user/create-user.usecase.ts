import { BaseUsecase } from "domain/_core";
import { CryptoService, User, UserService } from "domain/models";

export type CreateUserUsecaseParams = User;
export type CreateUserUsecaseResult = User;

export type CreateUserUsecase = BaseUsecase<CreateUserUsecaseParams, CreateUserUsecaseResult>;

export class CreateUserUsecaseImpl implements CreateUserUsecase {
  constructor(
    private userService: UserService,
    private cryptoService: CryptoService
  ) {}

  async execute(user: CreateUserUsecaseParams): Promise<CreateUserUsecaseResult> {
    const { salt, cryptedPassword } = await this.cryptoService.crypt(user.password);

    user.salt = salt;
    user.password = cryptedPassword;

    const createdUser = await this.userService.create(user);

    return createdUser;
  }
}
