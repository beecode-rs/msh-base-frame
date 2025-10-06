"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templatingAdapter = void 0;
var _handlebars = _interopRequireDefault(require("handlebars"));
var _handlebarsHelpers = _interopRequireDefault(require("handlebars-helpers"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
(0, _handlebarsHelpers["default"])();
var templatingAdapter = exports.templatingAdapter = {
  transform: function transform(params) {
    var templateContent = params.templateContent,
      variables = params.variables;
    var template = _handlebars["default"].compile(templateContent);
    return template(variables);
  }
};