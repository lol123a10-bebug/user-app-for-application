import { IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber, IsString } from "class-validator";

import { UserModel } from "domain/models";

export type CreateUserDtoParams = UserModel;

export class CreateUserDto implements CreateUserDtoParams {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsEmail()
  @IsString()
  email: string;

  @IsPhoneNumber()
  @IsString()
  phone: string;

  @IsString()
  username: string;

  @IsString()
  password: string;

  @IsOptional()
  salt: string;
}
