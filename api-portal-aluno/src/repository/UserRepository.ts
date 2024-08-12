import { v4 as uuidv4 } from "uuid";
import { UserRepositoryInterface } from "../interface/InterfaceRepository/UserRepositoryInterface";
import { UserDTO } from "../model/DTO/UserDTO";
import prismaClient from "../prisma/prismaClient";

export class UserRepository implements UserRepositoryInterface {
  constructor() {}

  // public async postCreateUser({
  //   name,
  //   lastName,
  //   password,
  //   phone,
  // }: UserDTO): Promise<void> {
  //   try {
  //     const passwordHash: string = await PasswordCrypto.hashPassword(password);

  //     await prismaClient.tab_user.create({
  //       data: {
  //         id: uuidv4(),
  //         name,
  //         lastName,
  //         password: passwordHash,
  //         phone,
  //         createdAt: new Date().toISOString(),
  //       },
  //     });
  //   } catch (error) {
  //     throw new Error(`Erro ao criar usuário: ${error.message}`);
  //   }
  // }

  public async findById(userId: string): Promise<UserDTO> {
    const user = await prismaClient.tab_studant.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new Error("Usuário não encontrado");
    }

    const { id, name, cpf, email, ra, createdAt, updatedAt } = user;

    return { id, name, cpf, email, ra, createdAt, updatedAt };
  }

  public async getAll(): Promise<UserDTO[]> {
    const user = await prismaClient.tab_studant.findMany();

    if (!user) {
      throw new Error("Nenhum usuário encontrado.");
    }
    return user
  }
  public async deleteUsers(userCpf: string ): Promise<void> {
    const user = await prismaClient.tab_studant.findFirst({
      where: { cpf: userCpf },
    });
    prismaClient.tab_studant.delete({where: user})
  }

  public async authUser(username: string): Promise<UserDTO | null> {
    try {
      const user = await prismaClient.tab_studant.findFirst({
        where: {
          AND: [{ name: username }],
        },
      });

      if (!user) {
        return null; // Usuário não encontrado
      }

      const { id, name, cpf, email, ra, createdAt, updatedAt } = user;

      const userDTO: UserDTO = {
        id,
        name,
        cpf,
        email,
        ra,
        createdAt,
        updatedAt,
      };

      return userDTO;
    } catch (error) {
      throw new Error(`Erro ao autenticar usuário: ${error.message}`);
    }
  }
}
