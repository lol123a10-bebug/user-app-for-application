import { Global, Module } from "@nestjs/common";

import { dbModuleProviders } from "./db-module.providers";

@Global()
@Module({
  providers: [...dbModuleProviders],
  exports: [...dbModuleProviders]
})
export class DbModule {}
