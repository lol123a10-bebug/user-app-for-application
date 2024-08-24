import { Provider } from "@nestjs/common";
import { Sequelize } from "sequelize";

import { symbols } from "di/common";

import { Config, DbConfig } from "infrastructure/config";

import { commonProviders } from "../common-providers";

export const dbModuleProviders: Provider[] = [
  {
    provide: symbols.db.main,
    useFactory: (config: Config) => {
      const { auth, host, name } = config.get("db") as DbConfig;

      return new Sequelize({
        database: name,
        username: auth.username,
        password: auth.password,
        host: host,
        dialect: "mysql"
      });
    },

    inject: [symbols.common.config]
  },

  ...commonProviders
];
