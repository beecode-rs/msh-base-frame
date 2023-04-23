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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2l0LXVzZS1jYXNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3VzZS1jYXNlL2dpdC11c2UtY2FzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyREFBc0Q7QUFDdEQseURBQW9EO0FBQ3BELHlFQUFtRTtBQUNuRSxtRUFBOEQ7QUFDOUQsZ0RBQTRDO0FBRS9CLFFBQUEsVUFBVSxHQUFHO0lBQ3pCLGdDQUFnQyxFQUFFLEtBQUssSUFBbUIsRUFBRTtRQUMzRCxNQUFNLHVDQUFpQixDQUFDLFFBQVEsRUFBRSxDQUFBO1FBQ2xDLE1BQU0sSUFBSSx3QkFBVSxFQUFFLENBQUMsdUJBQXVCLEVBQUUsQ0FBQTtJQUNqRCxDQUFDO0lBQ0QsZ0NBQWdDLEVBQUUsS0FBSyxJQUFtQixFQUFFO1FBQzNELE1BQU0sMEJBQVcsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFBLG1CQUFRLEdBQUUsQ0FBQyxjQUFjLEVBQUUsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUE7UUFDaEYsTUFBTSwwQkFBVyxDQUFDLFlBQVksQ0FBQyxJQUFBLG1CQUFRLEdBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQTtJQUMxRCxDQUFDO0lBQ0QsMkNBQTJDLEVBQUUsS0FBSyxJQUFtQixFQUFFO1FBQ3RFLE1BQU0sMEJBQVcsQ0FBQyxLQUFLLENBQUMsSUFBQSxtQkFBUSxHQUFFLENBQUMsZUFBZSxFQUFFLElBQUEsbUJBQVEsR0FBRSxDQUFDLGNBQWMsQ0FBQyxDQUFBO1FBQzlFLE1BQU0sMEJBQVcsQ0FBQyxVQUFVLENBQUMsSUFBQSxtQkFBUSxHQUFFLENBQUMsZUFBZSxDQUFDLENBQUE7UUFDeEQsTUFBTSx1Q0FBaUIsQ0FBQyx1Q0FBdUMsRUFBRSxDQUFBO0lBQ2xFLENBQUM7SUFDRCxxQ0FBcUMsRUFBRSxLQUFLLElBQW1CLEVBQUU7UUFDaEUsTUFBTSxXQUFXLEdBQUcsTUFBTSwwQkFBVyxDQUFDLHlCQUF5QixDQUFDLElBQUEsbUJBQVEsR0FBRSxDQUFDLGNBQWMsQ0FBQyxDQUFBO1FBQzFGLE1BQU0sS0FBSyxHQUFHLE1BQU0sMEJBQVcsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDeEQsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsa0NBQWUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUE7SUFDcEUsQ0FBQztDQUNELENBQUEifQ==