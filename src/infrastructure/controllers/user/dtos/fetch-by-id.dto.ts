import { Transform } from "class-transformer";
import { IsNumber } from "class-validator";

export class FetchByIdDto {
  @Transform(({ value }) => Number(value))
  @IsNumber()
  id: number;
}
