import { UseGuards } from "@nestjs/common";

import { JwtAuthGuard } from "infrastructure/auth";

export const UseAuth = () => UseGuards(JwtAuthGuard);
