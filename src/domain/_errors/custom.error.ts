import { MultiLanguage } from "domain/_core";

export class CustomError<TData = unknown> {
  public message: MultiLanguage;
  public data?: TData;
}
