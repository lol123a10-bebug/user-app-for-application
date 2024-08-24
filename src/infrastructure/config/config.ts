import { ConfigService } from "@nestjs/config";

export interface DbConfig {
  host: string;
  auth: {
    username: string;
    password: string;
  };

  name: string;
}

export interface ConfigSchema {
  db: DbConfig;
}

export type Config = ConfigService<ConfigSchema>;
