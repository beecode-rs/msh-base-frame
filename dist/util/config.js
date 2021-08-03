"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = exports.configSchema = void 0;
const fs_1 = require("fs");
const joi_1 = __importDefault(require("joi"));
const constant_1 = require("src/util/constant");
const logger_1 = require("src/util/logger");
const validation_util_1 = require("src/util/validation-util");
exports.configSchema = joi_1.default.object()
    .keys({
    template: joi_1.default.object().keys({ projectName: joi_1.default.string().required() }),
    gitZipUrl: joi_1.default.string().required(),
})
    .required();
exports.config = {
    _init: async () => {
        if (!(await fs_1.promises.stat(constant_1.constant.configFilePath)))
            throw Error(`Config file missing [${constant_1.constant.configFilePath}]`);
        const jsonContent = JSON.parse(await fs_1.promises.readFile(constant_1.constant.configFilePath, 'utf8'));
        logger_1.logger.debug('jsonContent', jsonContent);
        exports.config._conf = validation_util_1.validationUtil.validate(jsonContent, exports.configSchema);
    },
    _conf: undefined,
    get: () => {
        if (!exports.config._conf)
            throw Error('Config not found');
        return Object.freeze(exports.config._conf);
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWwvY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDJCQUFtQztBQUNuQyw4Q0FBcUI7QUFDckIsZ0RBQTRDO0FBQzVDLDRDQUF3QztBQUN4Qyw4REFBeUQ7QUFXNUMsUUFBQSxZQUFZLEdBQUcsYUFBRyxDQUFDLE1BQU0sRUFBcUI7S0FDeEQsSUFBSSxDQUFDO0lBQ0osUUFBUSxFQUFFLGFBQUcsQ0FBQyxNQUFNLEVBQTZCLENBQUMsSUFBSSxDQUFDLEVBQUUsV0FBVyxFQUFFLGFBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDO0lBQ2hHLFNBQVMsRUFBRSxhQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFO0NBQ25DLENBQUM7S0FDRCxRQUFRLEVBQUUsQ0FBQTtBQUVBLFFBQUEsTUFBTSxHQUFHO0lBQ3BCLEtBQUssRUFBRSxLQUFLLElBQW1CLEVBQUU7UUFDL0IsSUFBSSxDQUFDLENBQUMsTUFBTSxhQUFFLENBQUMsSUFBSSxDQUFDLG1CQUFRLENBQUMsY0FBYyxDQUFDLENBQUM7WUFBRSxNQUFNLEtBQUssQ0FBQyx3QkFBd0IsbUJBQVEsQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFBO1FBQzlHLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxhQUFFLENBQUMsUUFBUSxDQUFDLG1CQUFRLENBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUE7UUFDbEYsZUFBTSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDLENBQUE7UUFDeEMsY0FBTSxDQUFDLEtBQUssR0FBRyxnQ0FBYyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsb0JBQVksQ0FBQyxDQUFBO0lBQ25FLENBQUM7SUFDRCxLQUFLLEVBQUUsU0FBMEM7SUFDakQsR0FBRyxFQUFFLEdBQXNCLEVBQUU7UUFDM0IsSUFBSSxDQUFDLGNBQU0sQ0FBQyxLQUFLO1lBQUUsTUFBTSxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtRQUNsRCxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsY0FBTSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ3BDLENBQUM7Q0FDRixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHJvbWlzZXMgYXMgZnMgfSBmcm9tICdmcydcbmltcG9ydCBKb2kgZnJvbSAnam9pJ1xuaW1wb3J0IHsgY29uc3RhbnQgfSBmcm9tICdzcmMvdXRpbC9jb25zdGFudCdcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJ3NyYy91dGlsL2xvZ2dlcidcbmltcG9ydCB7IHZhbGlkYXRpb25VdGlsIH0gZnJvbSAnc3JjL3V0aWwvdmFsaWRhdGlvbi11dGlsJ1xuXG5leHBvcnQgdHlwZSBDb25maWd1cmF0aW9uVGVtcGxhdGVUeXBlID0ge1xuICBwcm9qZWN0TmFtZTogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIENvbmZpZ3VyYXRpb25UeXBlID0ge1xuICB0ZW1wbGF0ZTogQ29uZmlndXJhdGlvblRlbXBsYXRlVHlwZVxuICBnaXRaaXBVcmw6IHN0cmluZ1xufVxuXG5leHBvcnQgY29uc3QgY29uZmlnU2NoZW1hID0gSm9pLm9iamVjdDxDb25maWd1cmF0aW9uVHlwZT4oKVxuICAua2V5cyh7XG4gICAgdGVtcGxhdGU6IEpvaS5vYmplY3Q8Q29uZmlndXJhdGlvblRlbXBsYXRlVHlwZT4oKS5rZXlzKHsgcHJvamVjdE5hbWU6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpIH0pLFxuICAgIGdpdFppcFVybDogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXG4gIH0pXG4gIC5yZXF1aXJlZCgpXG5cbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gIF9pbml0OiBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgaWYgKCEoYXdhaXQgZnMuc3RhdChjb25zdGFudC5jb25maWdGaWxlUGF0aCkpKSB0aHJvdyBFcnJvcihgQ29uZmlnIGZpbGUgbWlzc2luZyBbJHtjb25zdGFudC5jb25maWdGaWxlUGF0aH1dYClcbiAgICBjb25zdCBqc29uQ29udGVudCA9IEpTT04ucGFyc2UoYXdhaXQgZnMucmVhZEZpbGUoY29uc3RhbnQuY29uZmlnRmlsZVBhdGgsICd1dGY4JykpXG4gICAgbG9nZ2VyLmRlYnVnKCdqc29uQ29udGVudCcsIGpzb25Db250ZW50KVxuICAgIGNvbmZpZy5fY29uZiA9IHZhbGlkYXRpb25VdGlsLnZhbGlkYXRlKGpzb25Db250ZW50LCBjb25maWdTY2hlbWEpXG4gIH0sXG4gIF9jb25mOiB1bmRlZmluZWQgYXMgQ29uZmlndXJhdGlvblR5cGUgfCB1bmRlZmluZWQsXG4gIGdldDogKCk6IENvbmZpZ3VyYXRpb25UeXBlID0+IHtcbiAgICBpZiAoIWNvbmZpZy5fY29uZikgdGhyb3cgRXJyb3IoJ0NvbmZpZyBub3QgZm91bmQnKVxuICAgIHJldHVybiBPYmplY3QuZnJlZXplKGNvbmZpZy5fY29uZilcbiAgfSxcbn1cbiJdfQ==