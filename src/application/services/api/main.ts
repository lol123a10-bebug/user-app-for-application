import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

import { MainContainerApi } from "di/containers";

const bootstrap = async () => {
  const app = await NestFactory.create(MainContainerApi);

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
};

bootstrap();
