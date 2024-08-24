import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

import { Config, ConfigSchema } from "./config";

@Injectable()
export class ConfigImpl extends ConfigService<ConfigSchema> implements Config {}
