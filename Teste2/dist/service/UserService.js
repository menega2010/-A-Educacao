"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserService = void 0;
var _FavoriteRepository = require("../repository/FavoriteRepository");
var _HistoryRepository = require("../repository/HistoryRepository");
var _services = require("../shared/services");
class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
    this.historyRepository = new _HistoryRepository.HistoryRepository();
    this.favoriteRepository = new _FavoriteRepository.FavoriteRepository();
  }
  async getUserFavorites(userId, page, limit) {
    const {
      results,
      totalDocs,
      totalPages,
      hasNext,
      hasPrev
    } = await this.favoriteRepository.findFavoritesByUserId(userId, page, limit);
    return {
      results,
      totalDocs,
      page,
      totalPages,
      hasNext,
      hasPrev
    };
  }
  async getUserHistory(userId, page, limit) {
    const {
      results,
      totalDocs,
      totalPages,
      hasNext,
      hasPrev
    } = await this.historyRepository.findHistoryByUserId(userId, page, limit);
    return {
      results,
      totalDocs,
      page,
      totalPages,
      hasNext,
      hasPrev
    };
  }
  async postCreateUser({
    name,
    lastName,
    password,
    phone
  }) {
    try {
      await this.userRepository.postCreateUser({
        name,
        lastName,
        password,
        phone
      });
    } catch (error) {
      throw new Error("Erro ao criar usuário: " + error.message);
    }
  }
  async authUser(username, password) {
    try {
      const validateRet = {
        status: false,
        idUser: ""
      };
      const userDataValidate = await this.userRepository.authUser(username);
      if (!userDataValidate) {
        return false; // Usuário não encontrado
      }

      // Verificar a senha utilizando o serviço compartilhado PasswordCrypto
      const isPasswordValid = await _services.PasswordCrypto.verifyPassword(password.toString(), userDataValidate.password.toString());
      validateRet.idUser = userDataValidate.id;
      validateRet.status = isPasswordValid;
      return validateRet;
    } catch (error) {
      console.error("Erro ao autenticar usuário:", error);
      throw new Error("Erro ao autenticar usuário: " + error.message);
    }
  }
  async getUserProfile(userId) {
    return await this.userRepository.findById(userId);
  }
}
exports.UserService = UserService;