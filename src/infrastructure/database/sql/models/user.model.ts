import { Column, Model, Table, Unique } from "sequelize-typescript";

import * as DomainModels from "domain/models";

@Table
export class UserModel extends Model implements DomainModels.UserModel {
  @Column
  name: string;

  @Column
  email: string;

  @Column
  phone: string;

  @Unique
  @Column
  username: string;

  @Column
  password: string;

  @Column
  salt: string;
}
