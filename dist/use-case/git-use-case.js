"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gitUseCase = void 0;
const path_1 = __importDefault(require("path"));
const file_service_1 = require("../service/file-service");
const git_service_1 = require("../service/git-service");
const temp_folder_service_1 = require("../service/temp-folder-service");
const template_service_1 = require("../service/template-service");
const config_1 = require("../util/config");
exports.gitUseCase = {
    cleanAndGetNewCopyOfTemplateRepo: async () => {
        await temp_folder_service_1.tempFolderService.cleanAll();
        await new git_service_1.GitService().downloadZipToTempFolder();
    },
    copyFilesFromBaseIfTheyDontExist: async () => {
        await file_service_1.fileService.copyFilesIfNotExists((0, config_1.config)().tempFolderPath, process.cwd());
        await file_service_1.fileService.removeFolder((0, config_1.config)().tempFolderPath);
    },
    extractAndRemoveZipFileAndPrepareTempFolder: async () => {
        const { templateZipName, tempFolderPath } = (0, config_1.config)();
        await file_service_1.fileService.unzip(path_1.default.resolve(tempFolderPath, `./${templateZipName}`), (0, config_1.config)().tempFolderPath);
        await file_service_1.fileService.removeFile(path_1.default.resolve(tempFolderPath, `./${templateZipName}`));
        await temp_folder_service_1.tempFolderService.flattenFolderByOneLevelAndRemoveIgnored();
    },
    renderAllTemplateWithValuesFromConfig: async () => {
        const contentList = await file_service_1.fileService.getRecurringFolderContent((0, config_1.config)().tempFolderPath);
        const files = await file_service_1.fileService.filterFiles(contentList);
        await Promise.all(files.map(template_service_1.templateService.renderAndOverrideFile));
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2l0LXVzZS1jYXNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3VzZS1jYXNlL2dpdC11c2UtY2FzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxnREFBdUI7QUFDdkIsMkRBQXNEO0FBQ3RELHlEQUFvRDtBQUNwRCx5RUFBbUU7QUFDbkUsbUVBQThEO0FBQzlELDRDQUF3QztBQUUzQixRQUFBLFVBQVUsR0FBRztJQUN6QixnQ0FBZ0MsRUFBRSxLQUFLLElBQW1CLEVBQUU7UUFDM0QsTUFBTSx1Q0FBaUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQTtRQUNsQyxNQUFNLElBQUksd0JBQVUsRUFBRSxDQUFDLHVCQUF1QixFQUFFLENBQUE7SUFDakQsQ0FBQztJQUNELGdDQUFnQyxFQUFFLEtBQUssSUFBbUIsRUFBRTtRQUMzRCxNQUFNLDBCQUFXLENBQUMsb0JBQW9CLENBQUMsSUFBQSxlQUFNLEdBQUUsQ0FBQyxjQUFjLEVBQUUsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUE7UUFDOUUsTUFBTSwwQkFBVyxDQUFDLFlBQVksQ0FBQyxJQUFBLGVBQU0sR0FBRSxDQUFDLGNBQWMsQ0FBQyxDQUFBO0lBQ3hELENBQUM7SUFDRCwyQ0FBMkMsRUFBRSxLQUFLLElBQW1CLEVBQUU7UUFDdEUsTUFBTSxFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUsR0FBRyxJQUFBLGVBQU0sR0FBRSxDQUFBO1FBQ3BELE1BQU0sMEJBQVcsQ0FBQyxLQUFLLENBQUMsY0FBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsS0FBSyxlQUFlLEVBQUUsQ0FBQyxFQUFFLElBQUEsZUFBTSxHQUFFLENBQUMsY0FBYyxDQUFDLENBQUE7UUFDdEcsTUFBTSwwQkFBVyxDQUFDLFVBQVUsQ0FBQyxjQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxLQUFLLGVBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUNsRixNQUFNLHVDQUFpQixDQUFDLHVDQUF1QyxFQUFFLENBQUE7SUFDbEUsQ0FBQztJQUNELHFDQUFxQyxFQUFFLEtBQUssSUFBbUIsRUFBRTtRQUNoRSxNQUFNLFdBQVcsR0FBRyxNQUFNLDBCQUFXLENBQUMseUJBQXlCLENBQUMsSUFBQSxlQUFNLEdBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQTtRQUN4RixNQUFNLEtBQUssR0FBRyxNQUFNLDBCQUFXLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQ3hELE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLGtDQUFlLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFBO0lBQ3BFLENBQUM7Q0FDRCxDQUFBIn0=