"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = exports.configSetupSingleton = exports.ConfigSetup = exports.configSchema = void 0;
const pattern_1 = require("@beecode/msh-util/lib/singleton/pattern");
const fs_1 = require("fs");
const joi_1 = __importDefault(require("joi"));
const os_1 = __importDefault(require("os"));
const path_1 = __importDefault(require("path"));
const constant_1 = require("../util/constant");
const logger_1 = require("../util/logger");
const validation_util_1 = require("../util/validation-util");
exports.configSchema = joi_1.default.object()
    .keys({
    githubPersonAccessToken: joi_1.default.string().allow(null).empty([null, '']).optional(),
    gitZipUrl: joi_1.default.string().required(),
    localTemplateFolder: joi_1.default.string().allow(null).empty([null, '']).optional(),
    template: joi_1.default.object().keys({ projectName: joi_1.default.string().required() }).unknown(),
})
    .required();
class ConfigSetup {
    _configuration = undefined;
    get configuration() {
        return this._configuration;
    }
    async _getUserConfigIfExists() {
        try {
            const userConfigFileLocation = path_1.default.join(os_1.default.homedir(), '.base-frame.user.json');
            const userConfigContent = await fs_1.promises.readFile(userConfigFileLocation, 'utf8');
            return JSON.parse(userConfigContent);
        }
        catch (_e) {
            return {};
        }
    }
    async initialize() {
        if (this._configuration !== undefined) {
            throw Error('Config already initialized');
        }
        if (!(await fs_1.promises.stat((0, constant_1.constant)().configFilePath))) {
            throw Error(`Config file missing [${(0, constant_1.constant)().configFilePath}]`);
        }
        const jsonContent = JSON.parse(await fs_1.promises.readFile((0, constant_1.constant)().configFilePath, 'utf8'));
        const userJsonContent = await this._getUserConfigIfExists();
        (0, logger_1.logger)().debug('jsonContent', { jsonContent, userJsonContent });
        this._configuration = validation_util_1.validationUtil.validate({ ...userJsonContent, ...jsonContent }, exports.configSchema);
    }
}
exports.ConfigSetup = ConfigSetup;
exports.configSetupSingleton = (0, pattern_1.singletonPattern)(() => {
    return new ConfigSetup();
});
const config = () => {
    const conf = (0, exports.configSetupSingleton)().configuration;
    if (!conf) {
        throw Error('Config not initialized');
    }
    return conf;
};
exports.config = config;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWwvY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHFFQUEwRTtBQUMxRSwyQkFBbUM7QUFDbkMsOENBQXFCO0FBQ3JCLDRDQUFtQjtBQUNuQixnREFBdUI7QUFDdkIsZ0RBQTRDO0FBQzVDLDRDQUF3QztBQUN4Qyw4REFBeUQ7QUFhNUMsUUFBQSxZQUFZLEdBQUcsYUFBRyxDQUFDLE1BQU0sRUFBcUI7S0FDekQsSUFBSSxDQUFDO0lBQ0wsdUJBQXVCLEVBQUUsYUFBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUU7SUFDOUUsU0FBUyxFQUFFLGFBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUU7SUFDbEMsbUJBQW1CLEVBQUUsYUFBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUU7SUFDMUUsUUFBUSxFQUFFLGFBQUcsQ0FBQyxNQUFNLEVBQTZCLENBQUMsSUFBSSxDQUFDLEVBQUUsV0FBVyxFQUFFLGFBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFO0NBQzFHLENBQUM7S0FDRCxRQUFRLEVBQUUsQ0FBQTtBQUVaLE1BQWEsV0FBVztJQUNiLGNBQWMsR0FBdUIsU0FBUyxDQUFBO0lBRXhELElBQUksYUFBYTtRQUNoQixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUE7SUFDM0IsQ0FBQztJQUVTLEtBQUssQ0FBQyxzQkFBc0I7UUFDckMsSUFBSTtZQUNILE1BQU0sc0JBQXNCLEdBQUcsY0FBSSxDQUFDLElBQUksQ0FBQyxZQUFFLENBQUMsT0FBTyxFQUFFLEVBQUUsdUJBQXVCLENBQUMsQ0FBQTtZQUMvRSxNQUFNLGlCQUFpQixHQUFHLE1BQU0sYUFBRSxDQUFDLFFBQVEsQ0FBQyxzQkFBc0IsRUFBRSxNQUFNLENBQUMsQ0FBQTtZQUUzRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtTQUNwQztRQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ1osT0FBTyxFQUFFLENBQUE7U0FDVDtJQUNGLENBQUM7SUFFRCxLQUFLLENBQUMsVUFBVTtRQUNmLElBQUksSUFBSSxDQUFDLGNBQWMsS0FBSyxTQUFTLEVBQUU7WUFDdEMsTUFBTSxLQUFLLENBQUMsNEJBQTRCLENBQUMsQ0FBQTtTQUN6QztRQUNELElBQUksQ0FBQyxDQUFDLE1BQU0sYUFBRSxDQUFDLElBQUksQ0FBQyxJQUFBLG1CQUFRLEdBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFO1lBQ2hELE1BQU0sS0FBSyxDQUFDLHdCQUF3QixJQUFBLG1CQUFRLEdBQUUsQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFBO1NBQ2pFO1FBQ0QsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLGFBQUUsQ0FBQyxRQUFRLENBQUMsSUFBQSxtQkFBUSxHQUFFLENBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUE7UUFDcEYsTUFBTSxlQUFlLEdBQUcsTUFBTSxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQTtRQUMzRCxJQUFBLGVBQU0sR0FBRSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsRUFBRSxXQUFXLEVBQUUsZUFBZSxFQUFFLENBQUMsQ0FBQTtRQUMvRCxJQUFJLENBQUMsY0FBYyxHQUFHLGdDQUFjLENBQUMsUUFBUSxDQUFDLEVBQUUsR0FBRyxlQUFlLEVBQUUsR0FBRyxXQUFXLEVBQUUsRUFBRSxvQkFBWSxDQUFDLENBQUE7SUFDcEcsQ0FBQztDQUNEO0FBOUJELGtDQThCQztBQUVZLFFBQUEsb0JBQW9CLEdBQUcsSUFBQSwwQkFBZ0IsRUFBQyxHQUFHLEVBQUU7SUFDekQsT0FBTyxJQUFJLFdBQVcsRUFBRSxDQUFBO0FBQ3pCLENBQUMsQ0FBQyxDQUFBO0FBRUssTUFBTSxNQUFNLEdBQUcsR0FBc0IsRUFBRTtJQUM3QyxNQUFNLElBQUksR0FBRyxJQUFBLDRCQUFvQixHQUFFLENBQUMsYUFBYSxDQUFBO0lBQ2pELElBQUksQ0FBQyxJQUFJLEVBQUU7UUFDVixNQUFNLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFBO0tBQ3JDO0lBRUQsT0FBTyxJQUFJLENBQUE7QUFDWixDQUFDLENBQUE7QUFQWSxRQUFBLE1BQU0sVUFPbEIifQ==