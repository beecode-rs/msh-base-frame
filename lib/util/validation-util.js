"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validationUtil = void 0;
var _joiUtil = require("@beecode/msh-util/joi-util");
var validationUtil = exports.validationUtil = {
  sanitize: function sanitize(objectToValidate, schema) {
    return new _joiUtil.JoiUtil().sanitize(objectToValidate, schema);
  },
  validate: function validate(objectToValidate, schema) {
    return new _joiUtil.JoiUtil().validate(objectToValidate, schema);
  }
};