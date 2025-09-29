"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchTemplateService = void 0;
var _typeUtil = require("@beecode/msh-util/type-util");
var _fetchTemplateStrategyType = require("../../../business/model/fetch-template-strategy-type.js");
var _strategyGit = require("../../../business/service/fetch-template/strategy-git.js");
var _strategyLocalFolder = require("../../../business/service/fetch-template/strategy-local-folder.js");
var _strategyWebZip = require("../../../business/service/fetch-template/strategy-web-zip.js");
var fetchTemplateService = exports.fetchTemplateService = {
  getStrategy: function getStrategy(type) {
    switch (type) {
      case _fetchTemplateStrategyType.FetchTemplateStrategyType.LOCAL_FOLDER:
        return new _strategyLocalFolder.FetchTemplateStrategyLocalFolder();
      case _fetchTemplateStrategyType.FetchTemplateStrategyType.WEB_ZIP:
        return new _strategyWebZip.FetchTemplateStrategyWebZip();
      case _fetchTemplateStrategyType.FetchTemplateStrategyType.GIT:
        return new _strategyGit.FetchTemplateStrategyGit();
      default:
        throw _typeUtil.typeUtil.exhaustiveError("Unknown fetch template type [".concat(String(type), "]"), type);
    }
  }
};