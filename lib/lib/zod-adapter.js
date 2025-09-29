"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ZodType", {
  enumerable: true,
  get: function get() {
    return _zod.ZodType;
  }
});
Object.defineProperty(exports, "z", {
  enumerable: true,
  get: function get() {
    return _zod.z;
  }
});
exports.zStringRequired = void 0;
var _zod = require("zod");
// TODO: check if this function is required
var zStringRequired = exports.zStringRequired = function zStringRequired(params) {
  var _ref = params !== null && params !== void 0 ? params : {},
    _ref$error = _ref.error,
    error = _ref$error === void 0 ? 'Required' : _ref$error;
  return _zod.z.string().trim().min(1, {
    error: error
  });
};