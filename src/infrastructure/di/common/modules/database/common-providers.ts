import { Provider } from "@nestjs/common";
import { ModelCtor, Sequelize } from "sequelize-typescript";

import { symbols } from "di/common";

import { UserModel } from "infrastructure/database";

const attachModel = (model: ModelCtor) => (db: Sequelize) => {
  db.addModels([model]);

  return model;
};

export const commonProviders: Provider[] = [
  {
    provide: symbols.user.model,
    useFactory: attachModel(UserModel),
    inject: [symbols.db.main]
  }
];
