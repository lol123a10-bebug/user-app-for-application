import { Provider } from "@nestjs/common";
import { Sequelize } from "sequelize";

import { symbols } from "di/common";

import { UserModel } from "infrastructure/database";

export const commonProviders: Provider[] = [
  {
    provide: symbols.user.model,
    useFactory: (db: Sequelize) => db.modelManager.addModel(UserModel),
    inject: [symbols.db.main]
  }
];
