import { ConfigSchema } from "./config";

export const getEnv = (envkey: string, defaultValue: string) => {
  return process.env[envkey] ?? defaultValue;
};

export const configSchema = (): ConfigSchema => ({
  db: {
    name: getEnv("DB_NAME", "user-app"),
    host: getEnv("DB_HOST", "localhost"),
    port: Number(getEnv("DB_PORT", "3306")),
    auth: {
      username: getEnv("DB_AUTH_USERNAME", "username"),
      password: getEnv("DB_AUTH_PASSWORD", "password")
    }
  }
});
