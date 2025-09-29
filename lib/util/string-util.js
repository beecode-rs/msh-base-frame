"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stringUtil = void 0;
var _os = _interopRequireDefault(require("os"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var stringUtil = exports.stringUtil = {
  generateRandomTmpFolderName: function generateRandomTmpFolderName() {
    return "".concat(_os["default"].tmpdir(), "/base-frame-").concat(new Date().getTime().toString(), "/");
  }
};