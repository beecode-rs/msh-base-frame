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
//# sourceMappingURL=action-use-case.js.map