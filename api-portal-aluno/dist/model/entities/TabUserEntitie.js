"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabUserEntitie = void 0;
var _uuid = require("uuid");
class TabUserEntitie {
  constructor() {
    if (!this.id) {
      this.id = (0, _uuid.v4)();
    }
  }
}
exports.TabUserEntitie = TabUserEntitie;