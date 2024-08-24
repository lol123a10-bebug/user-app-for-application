import { Module } from "@nestjs/common";

import { AppModule } from "application/services/api/app.module";

import * as modules from "./modules";

@Module({ imports: [...Object.values(modules), AppModule] })
export class MainContainerApi {}
