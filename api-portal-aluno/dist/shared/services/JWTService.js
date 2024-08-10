"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JWTService = void 0;
var jwt = _interopRequireWildcard(require("jsonwebtoken"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const sign = data => {
  if (!process.env.JWT_SECRET) return "JWT_SECRET_NOT_FOUND";
  return jwt.sign(data, process.env.JWT_SECRET, {
    expiresIn: "24h"
  });
};
const verify = token => {
  if (!process.env.JWT_SECRET) return "JWT_SECRET_NOT_FOUND";
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (typeof decoded === "string") {
      return "INVALID_TOKEN";
    }
    return decoded;
  } catch (error) {
    return "INVALID_TOKEN";
  }
};
const JWTService = {
  sign,
  verify
};
exports.JWTService = JWTService;