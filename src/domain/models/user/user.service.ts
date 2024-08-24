import { User } from "./user";
import { UserRepository } from "./user.repository";

export interface UserService {
  findById(id: number): Promise<User | null>;
  create(user: User): Promise<User>;
}

export class UserServiceImpl implements UserService {
  constructor(private userRepository: UserRepository) {}

  async create(user: User): Promise<User> {
    return await this.userRepository.create(user);
  }

  async findById(id: number): Promise<User | null> {
    return await this.userRepository.findById(id);
  }
}
