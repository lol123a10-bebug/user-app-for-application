import { Column, Model, Table } from "sequelize-typescript";

import * as DomainModels from "domain/models";

@Table
export class UserModel extends Model implements DomainModels.UserModel {
  @Column
  name: string;

  @Column
  email: string;

  @Column
  phone: string;
}
