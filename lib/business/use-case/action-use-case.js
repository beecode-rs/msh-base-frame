"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actionUseCase = void 0;
var _service = require("../../business/service/fetch-template/service.js");
var _templateFolderService = require("../../business/service/template-folder-service.js");
var _templatingService = require("../../business/service/templating-service.js");
var _fileAdapter = require("../../lib/file-adapter.js");
var _config2 = require("../../util/config.js");
var _logger = require("../../util/logger.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var actionUseCase = exports.actionUseCase = {
  clone: function () {
    var _clone = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var _config, _config$template, subFolderLocation, localDestinationFolder, fetchStrategy, fileAdapter, contentList, files, templateService, _message, errorMessageOrObject, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            _context.n = 1;
            return new _templateFolderService.TemplateFolderService().cleanAll();
          case 1:
            _config = (0, _config2.config)(), _config$template = _config.template, subFolderLocation = _config$template.subFolderLocation, localDestinationFolder = _config$template.localDestinationFolder, fetchStrategy = _config$template.fetchStrategy;
            _context.n = 2;
            return _service.fetchTemplateService.getStrategy(fetchStrategy).fetch();
          case 2:
            if (!subFolderLocation) {
              _context.n = 3;
              break;
            }
            _context.n = 3;
            return new _templateFolderService.TemplateFolderService().promoteSubfolderToRoot({
              rootFolderPath: localDestinationFolder,
              subFolderLocation: subFolderLocation
            });
          case 3:
            fileAdapter = new _fileAdapter.FileAdapter();
            _context.n = 4;
            return fileAdapter.getRecurringFolderContent({
              folderPath: localDestinationFolder
            });
          case 4:
            contentList = _context.v;
            _context.n = 5;
            return fileAdapter.filterFiles({
              fileFolderPathList: contentList
            });
          case 5:
            files = _context.v;
            templateService = new _templatingService.TemplatingService();
            _context.n = 6;
            return Promise.all(files.map(function (filePath) {
              return templateService.replaceFileWithRenderedTemplate({
                filePath: filePath
              });
            }));
          case 6:
            _context.p = 6;
            if ((0, _config2.config)().template.forceOverride) {
              _context.n = 8;
              break;
            }
            _context.n = 7;
            return fileAdapter.copyAndOverride({
              destinationFilePath: process.cwd(),
              sourceFilePath: localDestinationFolder
            });
          case 7:
            _context.n = 9;
            break;
          case 8:
            _context.n = 9;
            return fileAdapter.copyFilesIfNotExists({
              destinationFilePath: process.cwd(),
              sourceFilePath: localDestinationFolder
            });
          case 9:
            _context.n = 10;
            return fileAdapter.removeFolder({
              folderPath: localDestinationFolder
            });
          case 10:
            _context.n = 12;
            break;
          case 11:
            _context.p = 11;
            _t = _context.v;
            errorMessageOrObject = (_message = _t.message) !== null && _message !== void 0 ? _message : _t;
            (0, _logger.logger)().error('Some file already exist, you need to compare folder manually', errorMessageOrObject);
          case 12:
            return _context.a(2);
        }
      }, _callee, null, [[6, 11]]);
    }));
    function clone() {
      return _clone.apply(this, arguments);
    }
    return clone;
  }()
};