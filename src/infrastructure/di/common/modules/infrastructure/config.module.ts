import { Global, Module } from "@nestjs/common";

import { symbols } from "di/common";

import { ConfigImpl } from "infrastructure/config";

@Global()
@Module({
  providers: [
    {
      provide: symbols.common.config,
      useClass: ConfigImpl
    }
  ],

  exports: [symbols.common.config]
})
export class ConfigModule {}
