import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { ClassConstructor, ClassTransformOptions, plainToClass } from "class-transformer";
import { map, Observable } from "rxjs";

export class SerializerInterceptor<Presenter> implements NestInterceptor {
  constructor(private readonly presenter: ClassConstructor<Presenter>) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<Presenter | Presenter[]> {
    const options: ClassTransformOptions = { excludeExtraneousValues: true };

    return next.handle().pipe(
      map((data) => {
        return plainToClass(this.presenter, data, options);
      })
    );
  }
}
