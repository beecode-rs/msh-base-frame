"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tempFolderService = void 0;
const path_1 = __importDefault(require("path"));
const file_service_1 = require("../service/file-service");
const constant_1 = require("../util/constant");
exports.tempFolderService = {
    cleanAll: async () => {
        await file_service_1.fileService.removeFolder((0, constant_1.constant)().tempFolderPath);
        await exports.tempFolderService.makeTempFolderIfNotExist();
    },
    makeTempFolderIfNotExist: () => {
        return file_service_1.fileService.makeFolderIfNotExist((0, constant_1.constant)().tempFolderPath);
    },
    flattenFolderByOneLevelAndRemoveIgnored: async () => {
        const contentList = await file_service_1.fileService.getFolderContent((0, constant_1.constant)().tempFolderPath);
        await Promise.all(contentList.map(async (folder) => {
            const folderPath = path_1.default.resolve((0, constant_1.constant)().tempFolderPath, folder);
            const ignoreFiles = await file_service_1.fileService.readIgnoreList(folderPath);
            await file_service_1.fileService.copy(folderPath, (0, constant_1.constant)().tempFolderPath, { ignore: ignoreFiles });
            await file_service_1.fileService.removeFolder(path_1.default.resolve((0, constant_1.constant)().tempFolderPath, folder));
        }));
    },
    readIgnoreList: async () => {
        return file_service_1.fileService.readIgnoreList((0, constant_1.constant)().tempFolderPath);
    },
};
//# sourceMappingURL=temp-folder-service.js.map