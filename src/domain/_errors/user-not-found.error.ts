import { CustomError } from "./custom.error";

export class UserNotFoundError extends CustomError {
  constructor() {
    super();

    this.message = {
      ru: "Такой пользователь не был найден",
      en: "User not found"
    };
  }
}
