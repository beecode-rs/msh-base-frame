"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FileAdapter = void 0;
var _arrayUtil = require("@beecode/msh-util/array-util");
var _fs = require("fs");
var _fsExtra = require("fs-extra");
var _glob = require("glob");
var _logger = require("../util/logger.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var FileAdapter = exports.FileAdapter = /*#__PURE__*/function () {
  function FileAdapter() {
    _classCallCheck(this, FileAdapter);
  }
  return _createClass(FileAdapter, [{
    key: "copy",
    value: function () {
      var _copy2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(params) {
        var sourceFilePath, destinationFilePath, _params$options, options, copyContentList;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              sourceFilePath = params.sourceFilePath, destinationFilePath = params.destinationFilePath, _params$options = params.options, options = _params$options === void 0 ? {
                ignore: []
              } : _params$options;
              _context.n = 1;
              return (0, _glob.glob)('**/*', {
                cwd: sourceFilePath,
                dot: true,
                ignore: [].concat(_toConsumableArray(options.ignore), ['.bfignore']),
                nodir: true
              });
            case 1:
              copyContentList = _context.v;
              _context.n = 2;
              return Promise.all(copyContentList.map(function (file) {
                return (0, _fsExtra.copy)("".concat(sourceFilePath, "/").concat(file), "".concat(destinationFilePath, "/").concat(file));
              }));
            case 2:
              return _context.a(2);
          }
        }, _callee);
      }));
      function copy(_x) {
        return _copy2.apply(this, arguments);
      }
      return copy;
    }()
  }, {
    key: "copyFilesIfNotExists",
    value: function () {
      var _copyFilesIfNotExists = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(params) {
        var sourceFilePath, destinationFilePath;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              sourceFilePath = params.sourceFilePath, destinationFilePath = params.destinationFilePath;
              _context2.n = 1;
              return (0, _fsExtra.copy)(sourceFilePath, destinationFilePath, {
                overwrite: false
              });
            case 1:
              return _context2.a(2);
          }
        }, _callee2);
      }));
      function copyFilesIfNotExists(_x2) {
        return _copyFilesIfNotExists.apply(this, arguments);
      }
      return copyFilesIfNotExists;
    }()
  }, {
    key: "filterFiles",
    value: function () {
      var _filterFiles = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(params) {
        var _this = this;
        var fileFolderPathList, filtered;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              fileFolderPathList = params.fileFolderPathList;
              _context4.n = 1;
              return Promise.all(fileFolderPathList.map(/*#__PURE__*/function () {
                var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(fileFolderPath) {
                  return _regenerator().w(function (_context3) {
                    while (1) switch (_context3.n) {
                      case 0:
                        _context3.n = 1;
                        return _this.isFile({
                          filePath: fileFolderPath
                        });
                      case 1:
                        if (!_context3.v) {
                          _context3.n = 2;
                          break;
                        }
                        return _context3.a(2, fileFolderPath);
                      case 2:
                        return _context3.a(2, undefined);
                    }
                  }, _callee3);
                }));
                return function (_x4) {
                  return _ref.apply(this, arguments);
                };
              }()));
            case 1:
              filtered = _context4.v;
              return _context4.a(2, filtered.filter(_arrayUtil.arrayUtil.notEmpty));
          }
        }, _callee4);
      }));
      function filterFiles(_x3) {
        return _filterFiles.apply(this, arguments);
      }
      return filterFiles;
    }()
  }, {
    key: "getFolderContent",
    value: function () {
      var _getFolderContent = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(params) {
        var folderPath;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.n) {
            case 0:
              folderPath = params.folderPath;
              return _context5.a(2, _fs.promises.readdir(folderPath));
          }
        }, _callee5);
      }));
      function getFolderContent(_x5) {
        return _getFolderContent.apply(this, arguments);
      }
      return getFolderContent;
    }()
  }, {
    key: "getRecurringFolderContent",
    value: function () {
      var _getRecurringFolderContent = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(params) {
        var _this2 = this;
        var folderPath, folderContent, subFolderContents;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.n) {
            case 0:
              folderPath = params.folderPath;
              _context6.n = 1;
              return this.isDirectory({
                folderPath: folderPath
              });
            case 1:
              if (_context6.v) {
                _context6.n = 2;
                break;
              }
              return _context6.a(2, []);
            case 2:
              _context6.n = 3;
              return this.getFolderContent({
                folderPath: folderPath
              });
            case 3:
              folderContent = _context6.v.map(function (folderContentPath) {
                return "".concat(folderPath, "/").concat(folderContentPath);
              });
              _context6.n = 4;
              return Promise.all(folderContent.map(function (folderContentPath) {
                return _this2.getRecurringFolderContent({
                  folderPath: folderContentPath
                });
              }));
            case 4:
              subFolderContents = _context6.v;
              return _context6.a(2, [].concat(_toConsumableArray(folderContent), _toConsumableArray(subFolderContents.flat())));
          }
        }, _callee6, this);
      }));
      function getRecurringFolderContent(_x6) {
        return _getRecurringFolderContent.apply(this, arguments);
      }
      return getRecurringFolderContent;
    }()
  }, {
    key: "isDirectory",
    value: function () {
      var _isDirectory = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(params) {
        var folderPath, stat, _t;
        return _regenerator().w(function (_context7) {
          while (1) switch (_context7.p = _context7.n) {
            case 0:
              folderPath = params.folderPath;
              _context7.p = 1;
              _context7.n = 2;
              return _fs.promises.stat(folderPath);
            case 2:
              stat = _context7.v;
              return _context7.a(2, stat.isDirectory());
            case 3:
              _context7.p = 3;
              _t = _context7.v;
              (0, _logger.logger)().error('FileClient.isDirectory', {
                error: _t
              });
              return _context7.a(2, false);
          }
        }, _callee7, null, [[1, 3]]);
      }));
      function isDirectory(_x7) {
        return _isDirectory.apply(this, arguments);
      }
      return isDirectory;
    }()
  }, {
    key: "isFile",
    value: function () {
      var _isFile = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(params) {
        var filePath, stat, _t2;
        return _regenerator().w(function (_context8) {
          while (1) switch (_context8.p = _context8.n) {
            case 0:
              filePath = params.filePath;
              _context8.p = 1;
              _context8.n = 2;
              return _fs.promises.stat(filePath);
            case 2:
              stat = _context8.v;
              return _context8.a(2, stat.isFile());
            case 3:
              _context8.p = 3;
              _t2 = _context8.v;
              (0, _logger.logger)().error('FileClient.isFile', {
                error: _t2
              });
              return _context8.a(2, false);
          }
        }, _callee8, null, [[1, 3]]);
      }));
      function isFile(_x8) {
        return _isFile.apply(this, arguments);
      }
      return isFile;
    }()
  }, {
    key: "makeFolderIfNotExist",
    value: function () {
      var _makeFolderIfNotExist = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(params) {
        var folderPath;
        return _regenerator().w(function (_context9) {
          while (1) switch (_context9.n) {
            case 0:
              folderPath = params.folderPath;
              _context9.n = 1;
              return _fs.promises.stat(folderPath)["catch"](function () {
                return false;
              });
            case 1:
              if (!_context9.v) {
                _context9.n = 2;
                break;
              }
              return _context9.a(2);
            case 2:
              return _context9.a(2, _fs.promises.mkdir(folderPath));
          }
        }, _callee9);
      }));
      function makeFolderIfNotExist(_x9) {
        return _makeFolderIfNotExist.apply(this, arguments);
      }
      return makeFolderIfNotExist;
    }()
  }, {
    key: "readFile",
    value: function () {
      var _readFile = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(params) {
        var filePath;
        return _regenerator().w(function (_context0) {
          while (1) switch (_context0.n) {
            case 0:
              filePath = params.filePath;
              return _context0.a(2, _fs.promises.readFile(filePath, {
                encoding: 'utf-8'
              }));
          }
        }, _callee0);
      }));
      function readFile(_x0) {
        return _readFile.apply(this, arguments);
      }
      return readFile;
    }()
  }, {
    key: "removeFile",
    value: function () {
      var _removeFile = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1(params) {
        var filePath;
        return _regenerator().w(function (_context1) {
          while (1) switch (_context1.n) {
            case 0:
              filePath = params.filePath;
              _context1.n = 1;
              return _fs.promises.stat(filePath)["catch"](function () {
                return false;
              });
            case 1:
              if (_context1.v) {
                _context1.n = 2;
                break;
              }
              return _context1.a(2);
            case 2:
              return _context1.a(2, _fs.promises.rm(filePath));
          }
        }, _callee1);
      }));
      function removeFile(_x1) {
        return _removeFile.apply(this, arguments);
      }
      return removeFile;
    }()
  }, {
    key: "removeFolder",
    value: function () {
      var _removeFolder = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10(params) {
        var folderPath;
        return _regenerator().w(function (_context10) {
          while (1) switch (_context10.n) {
            case 0:
              folderPath = params.folderPath;
              _context10.n = 1;
              return _fs.promises.stat(folderPath)["catch"](function () {
                return false;
              });
            case 1:
              if (_context10.v) {
                _context10.n = 2;
                break;
              }
              return _context10.a(2);
            case 2:
              return _context10.a(2, _fs.promises.rm(folderPath, {
                force: true,
                recursive: true
              }));
          }
        }, _callee10);
      }));
      function removeFolder(_x10) {
        return _removeFolder.apply(this, arguments);
      }
      return removeFolder;
    }()
  }, {
    key: "writeToFile",
    value: function writeToFile(params) {
      var filePath = params.filePath,
        fileContent = params.fileContent;
      return _fs.promises.writeFile(filePath, fileContent, 'utf-8');
    }
  }]);
}();