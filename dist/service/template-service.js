"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.templateService = void 0;
const mustache_1 = __importDefault(require("mustache"));
const file_service_1 = require("../service/file-service");
const config_1 = require("../util/config");
exports.templateService = {
    render: (template, templateValues) => {
        return mustache_1.default.render(template, templateValues);
    },
    renderAndOverrideFile: async (filePath) => {
        const renderedContent = await exports.templateService.renderFile(filePath, (0, config_1.config)().template);
        await file_service_1.fileService.writeToFile(filePath, renderedContent);
    },
    renderFile: async (filePath, templateValues) => {
        const fileContent = await file_service_1.fileService.readFile(filePath);
        return exports.templateService.render(fileContent, templateValues);
    },
};
//# sourceMappingURL=template-service.js.map