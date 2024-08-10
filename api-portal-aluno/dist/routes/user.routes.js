"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _UserController = _interopRequireDefault(require("../controller/UserController"));
var _middleware = require("../shared/middleware");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const userRouter = (0, _express.Router)();

// Rotas para histórico e favoritos do usuário, protegidas por autenticação
userRouter.get("/me/history", _middleware.EnsureAuthenticated, _UserController.default.getHistory);
userRouter.get("/me/favorites", _middleware.EnsureAuthenticated, _UserController.default.getFavorites);

// Rota para obter o perfil do usuário, protegida por autenticação
userRouter.get("/me", _UserController.default.getProfile);

// Rota para registrar um novo usuário
userRouter.post("/register", _UserController.default.post);

// Rota para autenticar um usuário
userRouter.post("/authenticate", _UserController.default.postAuth);
var _default = userRouter;
exports.default = _default;