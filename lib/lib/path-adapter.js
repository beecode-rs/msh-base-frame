"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pathAdapter = void 0;
var _path = require("path");
var pathAdapter = exports.pathAdapter = {
  getAbsolutePath: function getAbsolutePath(params) {
    var path = params.path;
    if ((0, _path.isAbsolute)(path)) {
      return path;
    }
    var absolutePath = (0, _path.join)(process.cwd(), path);
    return absolutePath;
  }
};