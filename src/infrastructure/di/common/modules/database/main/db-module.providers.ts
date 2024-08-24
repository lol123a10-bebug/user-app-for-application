import { Sequelize } from "sequelize";

import { symbols } from "di/common/symbols";

import { commonProviders } from "../common-providers";

export const dbModuleProviders = [
  {
    provide: symbols.db.main,
    useFactory: () => {
      return new Sequelize({
        host: "http://localhost:3306",
        dialect: "mysql"
      });
    }
  },

  ...commonProviders
];
