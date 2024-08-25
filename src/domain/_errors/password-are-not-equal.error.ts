import { User } from "domain/models";

import { CustomError } from "./custom.error";

export type PasswordAreNotEqualData = Pick<User, "username" | "password">;

export class PasswordAreNotEqualError extends CustomError<PasswordAreNotEqualData> {
  constructor(public data?: PasswordAreNotEqualData) {
    super();
    this.message = {
      ru: "Введенный пароль является не правильный",
      en: "Incorrect password"
    };
  }
}
