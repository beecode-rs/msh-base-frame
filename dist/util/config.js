"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = exports.configSchema = void 0;
const fs_1 = require("fs");
const joi_1 = __importDefault(require("joi"));
const os_1 = __importDefault(require("os"));
const path_1 = __importDefault(require("path"));
const constant_1 = require("src/util/constant");
const logger_1 = require("src/util/logger");
const validation_util_1 = require("src/util/validation-util");
exports.configSchema = joi_1.default.object()
    .keys({
    template: joi_1.default.object().keys({ projectName: joi_1.default.string().required() }).unknown(),
    gitZipUrl: joi_1.default.string().required(),
    githubPersonAccessToken: joi_1.default.string().allow(null).empty([null, '']).optional(),
})
    .required();
exports.config = {
    _init: async () => {
        if (!(await fs_1.promises.stat(constant_1.constant.configFilePath)))
            throw Error(`Config file missing [${constant_1.constant.configFilePath}]`);
        const jsonContent = JSON.parse(await fs_1.promises.readFile(constant_1.constant.configFilePath, 'utf8'));
        const userJsonContent = await exports.config._getUserConfigIfExists();
        logger_1.logger.debug('jsonContent', { jsonContent, userJsonContent });
        exports.config._conf = validation_util_1.validationUtil.validate({ ...userJsonContent, ...jsonContent }, exports.configSchema);
    },
    _getUserConfigIfExists: async () => {
        try {
            const userConfigFileLocation = path_1.default.join(os_1.default.homedir(), '.base-frame.user.json');
            const userConfigContent = await fs_1.promises.readFile(userConfigFileLocation, 'utf8');
            return JSON.parse(userConfigContent);
        }
        catch (_e) {
            return {};
        }
    },
    _conf: undefined,
    get: () => {
        if (!exports.config._conf)
            throw Error('Config not found');
        return Object.freeze(exports.config._conf);
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWwvY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDJCQUFtQztBQUNuQyw4Q0FBcUI7QUFDckIsNENBQW1CO0FBQ25CLGdEQUF1QjtBQUN2QixnREFBNEM7QUFDNUMsNENBQXdDO0FBQ3hDLDhEQUF5RDtBQVk1QyxRQUFBLFlBQVksR0FBRyxhQUFHLENBQUMsTUFBTSxFQUFxQjtLQUN4RCxJQUFJLENBQUM7SUFDSixRQUFRLEVBQUUsYUFBRyxDQUFDLE1BQU0sRUFBNkIsQ0FBQyxJQUFJLENBQUMsRUFBRSxXQUFXLEVBQUUsYUFBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUU7SUFDMUcsU0FBUyxFQUFFLGFBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUU7SUFDbEMsdUJBQXVCLEVBQUUsYUFBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUU7Q0FDL0UsQ0FBQztLQUNELFFBQVEsRUFBRSxDQUFBO0FBRUEsUUFBQSxNQUFNLEdBQUc7SUFDcEIsS0FBSyxFQUFFLEtBQUssSUFBbUIsRUFBRTtRQUMvQixJQUFJLENBQUMsQ0FBQyxNQUFNLGFBQUUsQ0FBQyxJQUFJLENBQUMsbUJBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUFFLE1BQU0sS0FBSyxDQUFDLHdCQUF3QixtQkFBUSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUE7UUFDOUcsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLGFBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQVEsQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQTtRQUNsRixNQUFNLGVBQWUsR0FBRyxNQUFNLGNBQU0sQ0FBQyxzQkFBc0IsRUFBRSxDQUFBO1FBQzdELGVBQU0sQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLEVBQUUsV0FBVyxFQUFFLGVBQWUsRUFBRSxDQUFDLENBQUE7UUFDN0QsY0FBTSxDQUFDLEtBQUssR0FBRyxnQ0FBYyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEdBQUcsZUFBZSxFQUFFLEdBQUcsV0FBVyxFQUFFLEVBQUUsb0JBQVksQ0FBQyxDQUFBO0lBQzlGLENBQUM7SUFDRCxzQkFBc0IsRUFBRSxLQUFLLElBQWtCLEVBQUU7UUFDL0MsSUFBSTtZQUNGLE1BQU0sc0JBQXNCLEdBQUcsY0FBSSxDQUFDLElBQUksQ0FBQyxZQUFFLENBQUMsT0FBTyxFQUFFLEVBQUUsdUJBQXVCLENBQUMsQ0FBQTtZQUMvRSxNQUFNLGlCQUFpQixHQUFHLE1BQU0sYUFBRSxDQUFDLFFBQVEsQ0FBQyxzQkFBc0IsRUFBRSxNQUFNLENBQUMsQ0FBQTtZQUMzRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtTQUNyQztRQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ1gsT0FBTyxFQUFFLENBQUE7U0FDVjtJQUNILENBQUM7SUFDRCxLQUFLLEVBQUUsU0FBMEM7SUFDakQsR0FBRyxFQUFFLEdBQXNCLEVBQUU7UUFDM0IsSUFBSSxDQUFDLGNBQU0sQ0FBQyxLQUFLO1lBQUUsTUFBTSxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtRQUNsRCxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsY0FBTSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ3BDLENBQUM7Q0FDRixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHJvbWlzZXMgYXMgZnMgfSBmcm9tICdmcydcbmltcG9ydCBKb2kgZnJvbSAnam9pJ1xuaW1wb3J0IG9zIGZyb20gJ29zJ1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCB7IGNvbnN0YW50IH0gZnJvbSAnc3JjL3V0aWwvY29uc3RhbnQnXG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICdzcmMvdXRpbC9sb2dnZXInXG5pbXBvcnQgeyB2YWxpZGF0aW9uVXRpbCB9IGZyb20gJ3NyYy91dGlsL3ZhbGlkYXRpb24tdXRpbCdcblxuZXhwb3J0IHR5cGUgQ29uZmlndXJhdGlvblRlbXBsYXRlVHlwZSA9IHtcbiAgcHJvamVjdE5hbWU6IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBDb25maWd1cmF0aW9uVHlwZSA9IHtcbiAgdGVtcGxhdGU6IENvbmZpZ3VyYXRpb25UZW1wbGF0ZVR5cGVcbiAgZ2l0WmlwVXJsOiBzdHJpbmdcbiAgZ2l0aHViUGVyc29uQWNjZXNzVG9rZW4/OiBzdHJpbmdcbn1cblxuZXhwb3J0IGNvbnN0IGNvbmZpZ1NjaGVtYSA9IEpvaS5vYmplY3Q8Q29uZmlndXJhdGlvblR5cGU+KClcbiAgLmtleXMoe1xuICAgIHRlbXBsYXRlOiBKb2kub2JqZWN0PENvbmZpZ3VyYXRpb25UZW1wbGF0ZVR5cGU+KCkua2V5cyh7IHByb2plY3ROYW1lOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSB9KS51bmtub3duKCksXG4gICAgZ2l0WmlwVXJsOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcbiAgICBnaXRodWJQZXJzb25BY2Nlc3NUb2tlbjogSm9pLnN0cmluZygpLmFsbG93KG51bGwpLmVtcHR5KFtudWxsLCAnJ10pLm9wdGlvbmFsKCksXG4gIH0pXG4gIC5yZXF1aXJlZCgpXG5cbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gIF9pbml0OiBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgaWYgKCEoYXdhaXQgZnMuc3RhdChjb25zdGFudC5jb25maWdGaWxlUGF0aCkpKSB0aHJvdyBFcnJvcihgQ29uZmlnIGZpbGUgbWlzc2luZyBbJHtjb25zdGFudC5jb25maWdGaWxlUGF0aH1dYClcbiAgICBjb25zdCBqc29uQ29udGVudCA9IEpTT04ucGFyc2UoYXdhaXQgZnMucmVhZEZpbGUoY29uc3RhbnQuY29uZmlnRmlsZVBhdGgsICd1dGY4JykpXG4gICAgY29uc3QgdXNlckpzb25Db250ZW50ID0gYXdhaXQgY29uZmlnLl9nZXRVc2VyQ29uZmlnSWZFeGlzdHMoKVxuICAgIGxvZ2dlci5kZWJ1ZygnanNvbkNvbnRlbnQnLCB7IGpzb25Db250ZW50LCB1c2VySnNvbkNvbnRlbnQgfSlcbiAgICBjb25maWcuX2NvbmYgPSB2YWxpZGF0aW9uVXRpbC52YWxpZGF0ZSh7IC4uLnVzZXJKc29uQ29udGVudCwgLi4uanNvbkNvbnRlbnQgfSwgY29uZmlnU2NoZW1hKVxuICB9LFxuICBfZ2V0VXNlckNvbmZpZ0lmRXhpc3RzOiBhc3luYyAoKTogUHJvbWlzZTxhbnk+ID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdXNlckNvbmZpZ0ZpbGVMb2NhdGlvbiA9IHBhdGguam9pbihvcy5ob21lZGlyKCksICcuYmFzZS1mcmFtZS51c2VyLmpzb24nKVxuICAgICAgY29uc3QgdXNlckNvbmZpZ0NvbnRlbnQgPSBhd2FpdCBmcy5yZWFkRmlsZSh1c2VyQ29uZmlnRmlsZUxvY2F0aW9uLCAndXRmOCcpXG4gICAgICByZXR1cm4gSlNPTi5wYXJzZSh1c2VyQ29uZmlnQ29udGVudClcbiAgICB9IGNhdGNoIChfZSkge1xuICAgICAgcmV0dXJuIHt9XG4gICAgfVxuICB9LFxuICBfY29uZjogdW5kZWZpbmVkIGFzIENvbmZpZ3VyYXRpb25UeXBlIHwgdW5kZWZpbmVkLFxuICBnZXQ6ICgpOiBDb25maWd1cmF0aW9uVHlwZSA9PiB7XG4gICAgaWYgKCFjb25maWcuX2NvbmYpIHRocm93IEVycm9yKCdDb25maWcgbm90IGZvdW5kJylcbiAgICByZXR1cm4gT2JqZWN0LmZyZWV6ZShjb25maWcuX2NvbmYpXG4gIH0sXG59XG4iXX0=