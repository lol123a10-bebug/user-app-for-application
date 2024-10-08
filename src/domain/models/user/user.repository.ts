import { User } from "./user";

export interface UserRepository {
  findById(id: number): Promise<User | null>;
  create(user: User): Promise<User>;
  findByUsername(username: string): Promise<User | null>;
}
