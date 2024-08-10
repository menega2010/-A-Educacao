"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EnsureAuthenticated = void 0;
var _httpStatusCodes = require("http-status-codes");
var _services = require("../services");
const EnsureAuthenticated = async (req, res, next) => {
  const {
    authorization
  } = req.headers;
  if (!authorization) {
    return res.status(_httpStatusCodes.StatusCodes.UNAUTHORIZED).json({
      errors: {
        default: "Não autorizado"
      }
    });
  }
  const [type, token] = authorization.split(" ");
  if (type !== "Bearer") {
    return res.status(_httpStatusCodes.StatusCodes.UNAUTHORIZED).json({
      errors: {
        default: "Não autorizado"
      }
    });
  }
  const jwtData = _services.JWTService.verify(token);
  if (jwtData === "JWT_SECRET_NOT_FOUND") {
    return res.status(_httpStatusCodes.StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: "Não autenticado"
      }
    });
  } else if (jwtData === "INVALID_TOKEN") {
    return res.status(_httpStatusCodes.StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: "Erro ao verificar token"
      }
    });
  }
  req.headers.idUsuario = jwtData.uid.toString();
  return next();
};
exports.EnsureAuthenticated = EnsureAuthenticated;