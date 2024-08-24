interface EntityGetterOptions<T, F = T> {
  formatter?: (value: T) => F;
}

interface EntitySetterOptions<T, F = T> {
  formatter?: (value: T) => F;
}

interface EntityOptions<Value, ReturnValue> {
  getter?: EntityGetterOptions<Value, ReturnValue>;
  setter?: EntitySetterOptions<ReturnValue, Value>;
}

export function EntityProperty<Value, ReturnValue = Value>(options: EntityOptions<Value, ReturnValue> = {}) {
  return function (target: any, propertyName: string) {
    const field = propertyName;
    const { getter, setter } = options;

    Object.defineProperty(target, propertyName, {
      get: function (this: { model: any }) {
        const value = this.model[field];
        return getter?.formatter ? getter.formatter(value) : value;
      },
      set: function (this: { model: any }, value: ReturnValue) {
        this.model[field] = setter?.formatter ? setter.formatter(value) : value;
      },
      enumerable: true,
      configurable: true
    });
  };
}
