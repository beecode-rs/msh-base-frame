"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validationUtil = void 0;
var _joiUtil = require("@beecode/msh-util/joi-util");
var validationUtil = exports.validationUtil = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-redundant-type-constituents
  sanitize: function sanitize(objectToValidate, schema) {
    return new _joiUtil.JoiUtil().sanitize(objectToValidate, schema);
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-redundant-type-constituents
  validate: function validate(objectToValidate, schema) {
    return new _joiUtil.JoiUtil().validate(objectToValidate, schema);
  }
};