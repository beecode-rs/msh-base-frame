"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validationUtil = void 0;
var validationUtil = exports.validationUtil = {
  parse: function parse(objectToValidate, schema) {
    return schema.parse(objectToValidate);
  }
};