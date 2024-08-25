export const symbols = {
  common: {
    config: Symbol.for("/common/config")
  },

  auth: {
    crypto: Symbol.for("/auth/crypto"),
    token: Symbol.for("/auth/token")
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
        findById: Symbol.for("/usecases/api/user/findById"),
        authorize: Symbol.for("/usecases/api/user/authorize"),
        createToken: Symbol.for("/usecases/api/user/createToken")
      }
    }
  }
};
