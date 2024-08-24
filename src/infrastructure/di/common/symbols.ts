export const symbols = {
  common: {
    config: Symbol.for("/common/config")
  },

  user: {
    repository: Symbol.for("/user/repository"),
    service: Symbol.for("/user/service"),
    model: Symbol.for("/user/model")
  },

  db: {
    main: Symbol.for("/db/main")
  },

  usecases: {
    api: {
      user: {
        create: Symbol.for("/usecases/api/user/create"),
        findById: Symbol.for("/usecases/api/user/findById")
      }
    }
  }
};
