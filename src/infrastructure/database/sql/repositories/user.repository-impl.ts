import { Inject, Injectable } from "@nestjs/common";

import { symbols } from "di/common";

import { User, UserRepository } from "domain/models";

import { UserModel } from "../models";

@Injectable()
export class UserRepositoryImpl implements UserRepository {
  constructor(@Inject(symbols.user.model) private model: typeof UserModel) {}

  async create(user: User): Promise<User> {
    const userModel = await this.model.create({ ...user.toJSON() });

    return this.serialize(userModel);
  }

  async findById(id: number): Promise<User | null> {
    const userModel = await this.model.findByPk(id);

    if (!userModel) return null;

    return this.serialize(userModel);
  }

  async findByUsername(username: string): Promise<User | null> {
    const userModel = await this.model.findOne({ where: { username } });

    if (!userModel) return null;

    return this.serialize(userModel);
  }

  private serialize(model: UserModel) {
    return new User(model);
  }
}
