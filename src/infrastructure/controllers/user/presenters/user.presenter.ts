import { Exclude, Expose } from "class-transformer";

import { UserModel } from "domain/models";

export type UserPresenterParams = UserModel;

export class UserPresenter implements UserPresenterParams {
  @Expose()
  name: string;

  @Expose()
  email: string;

  @Expose()
  phone: string;

  @Expose()
  id?: number | undefined;

  @Expose()
  username: string;

  @Exclude()
  password: string;

  @Exclude()
  salt: string;
}
