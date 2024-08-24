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
    const jsonObj: any = Object.assign({}, this);

    const entries = Object.entries(Object.getOwnPropertyDescriptors(proto));

    entries
      .filter(([_key, descriptor]) => typeof descriptor.get === "function")
      .forEach(([key, descriptor]) => {
        if (descriptor && key[0] !== "_") {
          try {
            jsonObj[key] = this[key];
          } catch (error) {
            console.error(`Error calling getter ${key}`, error);
          }
        }
      });

    return { ...jsonObj, id: this.id || undefined };
  }
}
