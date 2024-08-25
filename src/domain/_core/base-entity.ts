import { BaseModel } from "./base-model";
import { EntityProperty } from "./entity-property";

export class BaseEntity<Model extends BaseModel> {
  constructor(protected model: Model) {}

  @EntityProperty()
  id: number;

  toString(): string {
    return global.JSON.stringify(this);
  }

  toJSON(): Model {
    const proto = Object.getPrototypeOf(this);
    const entries = Object.entries(Object.getOwnPropertyDescriptors(proto));

    const model = {} as Model;

    entries
      .filter(([_key, descriptor]) => typeof descriptor.get === "function")
      .forEach(([key, descriptor]) => {
        if (descriptor && key[0] !== "_") {
          try {
            model[key] = this[key];
          } catch (error) {
            console.error(`Error calling getter ${key}`, error);
          }
        }
      });

    return { ...model, id: this.id || undefined };
  }
}
