import { Module } from "@nestjs/common";

import { UserUsecasesModule } from "di/common";

import { UserController } from "infrastructure/controllers";

@Module({
  imports: [UserUsecasesModule],
  controllers: [UserController]
})
export class AppModule {}
