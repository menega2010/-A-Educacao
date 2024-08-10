"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = void 0;
var _cors = _interopRequireDefault(require("cors"));
var _express = _interopRequireDefault(require("express"));
var _dictionary = _interopRequireDefault(require("../../routes/dictionary.routes"));
var _favorite = _interopRequireDefault(require("../../routes/favorite.routes"));
var _fullstackchalenge = _interopRequireDefault(require("../../routes/fullstackchalenge.routes"));
var _user = _interopRequireDefault(require("../../routes/user.routes"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class App {
  port = 5000;
  constructor() {
    this.express = (0, _express.default)();
    this.listen();
    this.configureMiddlewares();
    this.configureRoutes();
  }
  getApp() {
    return this.express;
  }
  listen() {
    this.express.listen(this.port, () => {
      console.log("Server rodando na porta", this.port);
    });
  }
  configureMiddlewares() {
    this.express.use(_express.default.json()); // Middleware para processar corpos de requisição JSON
    this.configureCors(); // Configuração do CORS
  }

  configureCors() {
    // Configurações do CORS
    const corsOptions = {
      origin: "*",
      // Permitir solicitações de qualquer origem
      methods: ["GET", "POST", "PUT", "DELETE"],
      // Métodos HTTP permitidos
      allowedHeaders: ["Content-Type", "Authorization"] // Headers permitidos
    };

    this.express.use((0, _cors.default)(corsOptions));
  }
  configureRoutes() {
    // Configuração das rotas
    this.express.use("/user", _user.default);
    this.express.use("/dictionary", _dictionary.default);
    this.express.use("/favorite", _favorite.default);
    this.express.use("/", _fullstackchalenge.default);
  }
}
exports.App = App;