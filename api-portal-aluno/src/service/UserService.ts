import { UserRepositoryInterface } from "../interface/InterfaceRepository/UserRepositoryInterface";
import { UserDTO } from "../model/DTO/UserDTO";

import { PasswordCrypto } from "../shared/services";

export class UserService {


  constructor(private readonly userRepository: UserRepositoryInterface) {

  }

  // public async authUser(username: string, password: string): Promise<Object> {
  //   try {
  //     const validateRet = { status: false, idUser: "" };
  //     const userDataValidate: UserDTO = await this.userRepository.authUser(
  //       username
  //     );

  //     if (!userDataValidate) {
  //       return false; // Usuário não encontrado
  //     }

  //     // Verificar a senha utilizando o serviço compartilhado PasswordCrypto
  //     const isPasswordValid = await PasswordCrypto.verifyPassword(
  //       password.toString(),
  //       userDataValidate.password.toString()
  //     );

  //     validateRet.idUser = userDataValidate.id;
  //     validateRet.status = isPasswordValid;

  //     return validateRet;
  //   } catch (error) {
  //     console.error("Erro ao autenticar usuário:", error);
  //     throw new Error("Erro ao autenticar usuário: " + error.message);
  //   }
  // }

  public async getUsers(): Promise<UserDTO[]> {
    return await this.userRepository.getAll();
  }

  public async deleteUser(userCpf: string): Promise<void> {
    await this.userRepository.deleteUsers(userCpf);
    return 
  }
}
