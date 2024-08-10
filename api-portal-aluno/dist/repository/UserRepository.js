"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserRepository = void 0;
var _prismaClient = _interopRequireDefault(require("../prisma/prismaClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class UserRepository {
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

  async findById(userId) {
    const user = await _prismaClient.default.tab_studant.findUnique({
      where: {
        id: userId
      }
    });
    if (!user) {
      throw new Error("Usuário não encontrado");
    }
    const {
      id,
      name,
      cpf,
      email,
      ra
    } = user;
    return {
      id,
      name,
      cpf,
      email,
      ra
    };
  }
  async authUser(username) {
    try {
      const user = await _prismaClient.default.tab_studant.findFirst({
        where: {
          AND: [{
            name: username
          }]
        }
      });
      if (!user) {
        return null; // Usuário não encontrado
      }

      const {
        id,
        name,
        cpf,
        email,
        ra
      } = user;
      const userDTO = {
        id,
        name,
        cpf,
        email,
        ra
      };
      return userDTO;
    } catch (error) {
      throw new Error(`Erro ao autenticar usuário: ${error.message}`);
    }
  }
}
exports.UserRepository = UserRepository;