import { BaseEntity, BaseModel, EntityProperty } from "domain/_core";

export interface UserModel extends BaseModel {
  name: string;
  email: string;
  phone: string;
}

export class User extends BaseEntity<UserModel> {
  @EntityProperty()
  name: string;

  @EntityProperty()
  email: string;

  @EntityProperty()
  phone: string;
}
