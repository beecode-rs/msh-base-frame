"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actionUseCase = void 0;
const git_use_case_1 = require("../use-case/git-use-case");
const logger_1 = require("../util/logger");
exports.actionUseCase = {
    clone: async () => {
        await git_use_case_1.gitUseCase.cleanAndGetNewCopyOfTemplateRepo();
        await git_use_case_1.gitUseCase.extractAndRemoveZipFileAndPrepareTempFolder();
        await git_use_case_1.gitUseCase.renderAllTemplateWithValuesFromConfig();
        await git_use_case_1.gitUseCase
            .copyFilesFromBaseIfTheyDontExist()
            .catch((err) => (0, logger_1.logger)().error('Some file already exist, you need to compare folder manually', { err }));
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLXVzZS1jYXNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3VzZS1jYXNlL2FjdGlvbi11c2UtY2FzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw0REFBc0Q7QUFDdEQsNENBQXdDO0FBRTNCLFFBQUEsYUFBYSxHQUFHO0lBQzVCLEtBQUssRUFBRSxLQUFLLElBQW1CLEVBQUU7UUFDaEMsTUFBTSx5QkFBVSxDQUFDLGdDQUFnQyxFQUFFLENBQUE7UUFDbkQsTUFBTSx5QkFBVSxDQUFDLDJDQUEyQyxFQUFFLENBQUE7UUFDOUQsTUFBTSx5QkFBVSxDQUFDLHFDQUFxQyxFQUFFLENBQUE7UUFDeEQsTUFBTSx5QkFBVTthQUNkLGdDQUFnQyxFQUFFO2FBQ2xDLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsSUFBQSxlQUFNLEdBQUUsQ0FBQyxLQUFLLENBQUMsOERBQThELEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFDMUcsQ0FBQztDQUNELENBQUEifQ==