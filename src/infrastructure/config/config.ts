import { ConfigService } from "@nestjs/config";

export interface DbConfig {
  host: string;
  port: number;
  auth: {
    username: string;
    password: string;
  };

  name: string;
}

export interface JwtConfig {
  secret: string;
}

export interface ConfigSchema {
  db: DbConfig;
  jwt: JwtConfig;
}

export type Config = ConfigService<ConfigSchema>;
