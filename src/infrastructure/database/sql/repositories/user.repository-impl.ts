import { Inject, Injectable } from "@nestjs/common";

import { symbols } from "di/common";

import { User, UserRepository } from "domain/models";

import { UserModel } from "../models";

@Injectable()
export class UserRepositoryImpl implements UserRepository {
  constructor(@Inject(symbols.user.model) private model: typeof UserModel) {}

  async create(user: User): Promise<User> {
    const userModel = await this.model.create({ ...user.toJSON() });

    return new User(userModel);
  }

  async findById(id: number): Promise<User | null> {
    const userModel = await this.model.findByPk(id);

    if (!userModel) return null;

    return new User(userModel);
  }
}
