import { Provider } from "@nestjs/common";
import { Sequelize } from "sequelize-typescript";

import { symbols } from "di/common";

import { Config, DbConfig } from "infrastructure/config";

import { commonProviders } from "../common-providers";

export const dbModuleProviders: Provider[] = [
  {
    provide: symbols.db.main,
    useFactory: (config: Config) => {
      const { auth, host, name, port } = config.get("db") as DbConfig;

      return new Sequelize({
        database: name,
        username: auth.username,
        password: auth.password,
        host,
        port,
        dialect: "mysql"
      });
    },

    inject: [symbols.common.config]
  },

  ...commonProviders
];
