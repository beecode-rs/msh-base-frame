"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gitUseCase = void 0;
const file_service_1 = require("../service/file-service");
const git_service_1 = require("../service/git-service");
const temp_folder_service_1 = require("../service/temp-folder-service");
const template_service_1 = require("../service/template-service");
const constant_1 = require("../util/constant");
exports.gitUseCase = {
    cleanAndGetNewCopyOfTemplateRepo: async () => {
        await temp_folder_service_1.tempFolderService.cleanAll();
        await new git_service_1.GitService().downloadZipToTempFolder();
    },
    copyFilesFromBaseIfTheyDontExist: async () => {
        await file_service_1.fileService.copyFilesIfNotExists((0, constant_1.constant)().tempFolderPath, process.cwd());
        await file_service_1.fileService.removeFolder((0, constant_1.constant)().tempFolderPath);
    },
    extractAndRemoveZipFileAndPrepareTempFolder: async () => {
        await file_service_1.fileService.unzip((0, constant_1.constant)().templateZipPath, (0, constant_1.constant)().tempFolderPath);
        await file_service_1.fileService.removeFile((0, constant_1.constant)().templateZipPath);
        await temp_folder_service_1.tempFolderService.flattenFolderByOneLevelAndRemoveIgnored();
    },
    renderAllTemplateWithValuesFromConfig: async () => {
        const contentList = await file_service_1.fileService.getRecurringFolderContent((0, constant_1.constant)().tempFolderPath);
        const files = await file_service_1.fileService.filterFiles(contentList);
        await Promise.all(files.map(template_service_1.templateService.renderAndOverrideFile));
    },
};
//# sourceMappingURL=git-use-case.js.map