import { UserDTO } from "../../model/DTO/UserDTO";

export interface UserRepositoryInterface {
  getAll(): Promise<UserDTO[]>
  deleteUsers(userCpf: string): Promise<void>;
  // postCreateUser({ name, lastName, password, phone }: UserDTO): Promise<void>;
  authUser(username: string): Promise<UserDTO>;
  findById(userId: string): Promise<UserDTO>;
}
