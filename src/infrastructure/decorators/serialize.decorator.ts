import { UseInterceptors } from "@nestjs/common";
import { ClassConstructor } from "class-transformer";

import { SerializerInterceptor } from "infrastructure/interceptors";

export const Serialize = <Presenter>(presenter: ClassConstructor<Presenter>) => UseInterceptors(new SerializerInterceptor(presenter));
