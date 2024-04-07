"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.constant = void 0;
var _pattern = require("@beecode/msh-util/singleton/pattern");
var _path = _interopRequireDefault(require("path"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
var constant = exports.constant = (0, _pattern.singletonPattern)(function () {
  return {
    configFilePath: _path["default"].resolve(process.cwd(), './.base-frame')
  };
});