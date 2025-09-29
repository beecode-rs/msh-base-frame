"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templatingAdapter = void 0;
var _mustache = _interopRequireDefault(require("mustache"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var templatingAdapter = exports.templatingAdapter = {
  transform: function transform(params) {
    var templateContent = params.templateContent,
      variables = params.variables;
    return _mustache["default"].render(templateContent, variables);
  }
};