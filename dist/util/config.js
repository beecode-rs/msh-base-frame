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
    template: joi_1.default.object().keys({ projectName: joi_1.default.string().required() }).unknown(),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWwvY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDJCQUFtQztBQUNuQyw4Q0FBcUI7QUFDckIsZ0RBQTRDO0FBQzVDLDRDQUF3QztBQUN4Qyw4REFBeUQ7QUFXNUMsUUFBQSxZQUFZLEdBQUcsYUFBRyxDQUFDLE1BQU0sRUFBcUI7S0FDeEQsSUFBSSxDQUFDO0lBQ0osUUFBUSxFQUFFLGFBQUcsQ0FBQyxNQUFNLEVBQTZCLENBQUMsSUFBSSxDQUFDLEVBQUUsV0FBVyxFQUFFLGFBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFO0lBQzFHLFNBQVMsRUFBRSxhQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFO0NBQ25DLENBQUM7S0FDRCxRQUFRLEVBQUUsQ0FBQTtBQUVBLFFBQUEsTUFBTSxHQUFHO0lBQ3BCLEtBQUssRUFBRSxLQUFLLElBQW1CLEVBQUU7UUFDL0IsSUFBSSxDQUFDLENBQUMsTUFBTSxhQUFFLENBQUMsSUFBSSxDQUFDLG1CQUFRLENBQUMsY0FBYyxDQUFDLENBQUM7WUFBRSxNQUFNLEtBQUssQ0FBQyx3QkFBd0IsbUJBQVEsQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFBO1FBQzlHLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxhQUFFLENBQUMsUUFBUSxDQUFDLG1CQUFRLENBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUE7UUFDbEYsZUFBTSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDLENBQUE7UUFDeEMsY0FBTSxDQUFDLEtBQUssR0FBRyxnQ0FBYyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsb0JBQVksQ0FBQyxDQUFBO0lBQ25FLENBQUM7SUFDRCxLQUFLLEVBQUUsU0FBMEM7SUFDakQsR0FBRyxFQUFFLEdBQXNCLEVBQUU7UUFDM0IsSUFBSSxDQUFDLGNBQU0sQ0FBQyxLQUFLO1lBQUUsTUFBTSxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtRQUNsRCxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsY0FBTSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ3BDLENBQUM7Q0FDRixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHJvbWlzZXMgYXMgZnMgfSBmcm9tICdmcydcbmltcG9ydCBKb2kgZnJvbSAnam9pJ1xuaW1wb3J0IHsgY29uc3RhbnQgfSBmcm9tICdzcmMvdXRpbC9jb25zdGFudCdcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJ3NyYy91dGlsL2xvZ2dlcidcbmltcG9ydCB7IHZhbGlkYXRpb25VdGlsIH0gZnJvbSAnc3JjL3V0aWwvdmFsaWRhdGlvbi11dGlsJ1xuXG5leHBvcnQgdHlwZSBDb25maWd1cmF0aW9uVGVtcGxhdGVUeXBlID0ge1xuICBwcm9qZWN0TmFtZTogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIENvbmZpZ3VyYXRpb25UeXBlID0ge1xuICB0ZW1wbGF0ZTogQ29uZmlndXJhdGlvblRlbXBsYXRlVHlwZVxuICBnaXRaaXBVcmw6IHN0cmluZ1xufVxuXG5leHBvcnQgY29uc3QgY29uZmlnU2NoZW1hID0gSm9pLm9iamVjdDxDb25maWd1cmF0aW9uVHlwZT4oKVxuICAua2V5cyh7XG4gICAgdGVtcGxhdGU6IEpvaS5vYmplY3Q8Q29uZmlndXJhdGlvblRlbXBsYXRlVHlwZT4oKS5rZXlzKHsgcHJvamVjdE5hbWU6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpIH0pLnVua25vd24oKSxcbiAgICBnaXRaaXBVcmw6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxuICB9KVxuICAucmVxdWlyZWQoKVxuXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xuICBfaW5pdDogYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGlmICghKGF3YWl0IGZzLnN0YXQoY29uc3RhbnQuY29uZmlnRmlsZVBhdGgpKSkgdGhyb3cgRXJyb3IoYENvbmZpZyBmaWxlIG1pc3NpbmcgWyR7Y29uc3RhbnQuY29uZmlnRmlsZVBhdGh9XWApXG4gICAgY29uc3QganNvbkNvbnRlbnQgPSBKU09OLnBhcnNlKGF3YWl0IGZzLnJlYWRGaWxlKGNvbnN0YW50LmNvbmZpZ0ZpbGVQYXRoLCAndXRmOCcpKVxuICAgIGxvZ2dlci5kZWJ1ZygnanNvbkNvbnRlbnQnLCBqc29uQ29udGVudClcbiAgICBjb25maWcuX2NvbmYgPSB2YWxpZGF0aW9uVXRpbC52YWxpZGF0ZShqc29uQ29udGVudCwgY29uZmlnU2NoZW1hKVxuICB9LFxuICBfY29uZjogdW5kZWZpbmVkIGFzIENvbmZpZ3VyYXRpb25UeXBlIHwgdW5kZWZpbmVkLFxuICBnZXQ6ICgpOiBDb25maWd1cmF0aW9uVHlwZSA9PiB7XG4gICAgaWYgKCFjb25maWcuX2NvbmYpIHRocm93IEVycm9yKCdDb25maWcgbm90IGZvdW5kJylcbiAgICByZXR1cm4gT2JqZWN0LmZyZWV6ZShjb25maWcuX2NvbmYpXG4gIH0sXG59XG4iXX0=