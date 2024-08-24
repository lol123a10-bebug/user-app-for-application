import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { UserUsecasesModule } from "di/common";

import { configSchema } from "infrastructure/config";
import { UserController } from "infrastructure/controllers";

@Module({
  imports: [ConfigModule.forRoot({ envFilePath: "envs/service.env", load: [configSchema] }), UserUsecasesModule],
  controllers: [UserController]
})
export class AppModule {}
