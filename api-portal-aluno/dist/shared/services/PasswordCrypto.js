"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PasswordCrypto = void 0;
var _bcryptjs = require("bcryptjs");
class PasswordCrypto {
  // Método estático para criar um hash de senha
  static async hashPassword(password) {
    try {
      const saltRounds = 10;
      const salt = await (0, _bcryptjs.genSalt)(saltRounds);
      const hashedPassword = await (0, _bcryptjs.hash)(password, salt);
      return hashedPassword;
    } catch (error) {
      throw new Error(`Erro ao criar hash de senha: ${error.message}`);
    }
  }

  // Método estático para verificar se a senha é válida
  static async verifyPassword(password, hashedPassword) {
    try {
      const isValid = await (0, _bcryptjs.compare)(password, hashedPassword);
      return isValid;
    } catch (error) {
      throw new Error(`Erro ao verificar senha: ${error.message}`);
    }
  }
}
exports.PasswordCrypto = PasswordCrypto;