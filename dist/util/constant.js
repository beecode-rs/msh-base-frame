"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.constant = void 0;
const path_1 = __importDefault(require("path"));
const config_1 = require("../util/config");
const constant = () => {
    const tempFolderPath = (0, config_1.config)().localTemplateFolder ?? path_1.default.resolve(process.cwd(), './.base-frame-tmp/');
    const templateZipName = 'template.zip';
    return Object.freeze({
        configFilePath: path_1.default.resolve(process.cwd(), './.base-frame'),
        tempFolderPath,
        templateZipName,
        templateZipPath: path_1.default.resolve(tempFolderPath, `./${templateZipName}`),
    });
};
exports.constant = constant;
//# sourceMappingURL=constant.js.map