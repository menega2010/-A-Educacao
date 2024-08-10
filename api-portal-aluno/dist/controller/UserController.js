"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _httpStatusCodes = require("http-status-codes");
var _UserRepository = require("../repository/UserRepository");
var _UserService = require("../service/UserService");
var _services = require("../shared/services");
var _default = {
  async getProfile(req, resp) {
    try {
      const userId = req.headers["idUsuario"];
      if (!userId) {
        return resp.status(400).json({
          message: "ID do usuário é obrigatório"
        });
      }
      const userService = new _UserService.UserService(new _UserRepository.UserRepository());
      const userProfile = await userService.getUserProfile(userId);
      return resp.status(200).json(userProfile);
    } catch (error) {
      console.error("Erro ao obter perfil do usuário:", error);
      return resp.status(500).json({
        message: "Erro ao obter perfil do usuário",
        error: error.message
      });
    }
  },
  async getHistory(req, resp) {
    try {
      const userId = req.headers["idUsuario"];
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      if (!userId) {
        return resp.status(400).json({
          message: "ID do usuário é obrigatório"
        });
      }
      const userService = new _UserService.UserService(new _UserRepository.UserRepository());
      const history = await userService.getUserHistory(userId, page, limit);
      return resp.status(200).json(history);
    } catch (error) {
      console.error("Erro ao obter histórico do usuário:", error);
      return resp.status(500).json({
        message: "Erro ao obter histórico do usuário",
        error: error.message
      });
    }
  },
  async getFavorites(req, resp) {
    try {
      const userId = req.headers["idUsuario"];
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      if (!userId) {
        return resp.status(400).json({
          message: "ID do usuário é obrigatório"
        });
      }
      const userService = new _UserService.UserService(new _UserRepository.UserRepository());
      const favorites = await userService.getUserFavorites(userId, page, limit);
      return resp.status(200).json(favorites);
    } catch (error) {
      console.error("Erro ao obter favoritos do usuário:", error);
      return resp.status(500).json({
        message: "Erro ao obter favoritos do usuário",
        error: error.message
      });
    }
  },
  async post(req, resp) {
    try {
      const {
        name,
        lastName,
        password,
        phone
      } = req.body;

      // Validação básica dos campos necessários
      if (!name || !lastName || !password || !phone) {
        return resp.status(400).json({
          message: "Todos os campos são obrigatórios"
        });
      }
      const userService = new _UserService.UserService(new _UserRepository.UserRepository());
      await userService.postCreateUser({
        name,
        lastName,
        password,
        phone
      });

      // Retornar status 201 para criação bem-sucedida
      return resp.status(201).json({
        message: "Usuário criado com sucesso"
      });
    } catch (error) {
      // Tratar erros e retornar status 500 para erros internos do servidor
      console.error("Erro ao criar usuário:", error);
      return resp.status(500).json({
        message: "Erro ao criar usuário",
        error: error.message
      });
    }
  },
  async postAuth(req, resp) {
    try {
      const {
        name,
        password
      } = req.body;
      // Validação dos campos de entrada
      if (!name || !password) {
        return resp.status(400).json({
          message: "Usuário e senha são obrigatórios"
        });
      }
      const userService = new _UserService.UserService(new _UserRepository.UserRepository());
      const isAuthenticated = await userService.authUser(name, password);
      if (isAuthenticated["status"]) {
        // Retornar status 200 para autenticação bem-sucedida
        const acessToken = _services.JWTService.sign({
          uid: isAuthenticated["idUser"]
        });
        if (acessToken === "JWT_SECRET_NOT_FOUND") {
          return resp.status(_httpStatusCodes.StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
              default: "Error ao gerar token de acesso"
            }
          });
        }
        return resp.status(200).json({
          message: "Autenticação bem-sucedida",
          acessToken: acessToken
        });
      } else {
        // Retornar status 401 para credenciais inválidas
        return resp.status(401).json({
          message: "Credenciais inválidas"
        });
      }
    } catch (error) {
      // Tratar erros e retornar status 500 para erros internos do servidor
      console.error("Erro ao autenticar usuário:", error);
      return resp.status(500).json({
        message: "Erro ao autenticar usuário",
        error: error.message
      });
    }
  }
};
exports.default = _default;