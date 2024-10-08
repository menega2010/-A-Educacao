"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _EnsureAuthenticated = require("./EnsureAuthenticated");
Object.keys(_EnsureAuthenticated).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _EnsureAuthenticated[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _EnsureAuthenticated[key];
    }
  });
});