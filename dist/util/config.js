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
    tempFolderPath: joi_1.default.string().allow(null).empty([null, '']).required(),
    template: joi_1.default.object().keys({ projectName: joi_1.default.string().required() }).unknown(),
    templateZipName: joi_1.default.string().required(),
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
        const { configFilePath } = (0, constant_1.constant)();
        if (!(await fs_1.promises.stat(configFilePath))) {
            throw Error(`Config file missing [${configFilePath}]`);
        }
        const jsonContent = JSON.parse(await fs_1.promises.readFile(configFilePath, 'utf8'));
        const userJsonContent = await this._getUserConfigIfExists();
        const defaultValues = {
            tempFolderPath: path_1.default.resolve(process.cwd(), './.base-frame-tmp/'),
            templateZipName: 'template.zip',
        };
        (0, logger_1.logger)().debug('jsonContent', { jsonContent, userJsonContent });
        this._configuration = validation_util_1.validationUtil.validate({ ...defaultValues, ...userJsonContent, ...jsonContent }, exports.configSchema);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWwvY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHFFQUEwRTtBQUMxRSwyQkFBbUM7QUFDbkMsOENBQXFCO0FBQ3JCLDRDQUFtQjtBQUNuQixnREFBdUI7QUFDdkIsZ0RBQTRDO0FBQzVDLDRDQUF3QztBQUN4Qyw4REFBeUQ7QUFnQjVDLFFBQUEsWUFBWSxHQUFHLGFBQUcsQ0FBQyxNQUFNLEVBQXFCO0tBQ3pELElBQUksQ0FBQztJQUNMLHVCQUF1QixFQUFFLGFBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFO0lBQzlFLFNBQVMsRUFBRSxhQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFO0lBQ2xDLG1CQUFtQixFQUFFLGFBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFO0lBQzFFLGNBQWMsRUFBRSxhQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRTtJQUNyRSxRQUFRLEVBQUUsYUFBRyxDQUFDLE1BQU0sRUFBNkIsQ0FBQyxJQUFJLENBQUMsRUFBRSxXQUFXLEVBQUUsYUFBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUU7SUFDMUcsZUFBZSxFQUFFLGFBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUU7Q0FDeEMsQ0FBQztLQUNELFFBQVEsRUFBRSxDQUFBO0FBRVosTUFBYSxXQUFXO0lBQ2IsY0FBYyxHQUF1QixTQUFTLENBQUE7SUFFeEQsSUFBSSxhQUFhO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQTtJQUMzQixDQUFDO0lBRVMsS0FBSyxDQUFDLHNCQUFzQjtRQUNyQyxJQUFJO1lBQ0gsTUFBTSxzQkFBc0IsR0FBRyxjQUFJLENBQUMsSUFBSSxDQUFDLFlBQUUsQ0FBQyxPQUFPLEVBQUUsRUFBRSx1QkFBdUIsQ0FBQyxDQUFBO1lBQy9FLE1BQU0saUJBQWlCLEdBQUcsTUFBTSxhQUFFLENBQUMsUUFBUSxDQUFDLHNCQUFzQixFQUFFLE1BQU0sQ0FBQyxDQUFBO1lBRTNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO1NBQ3BDO1FBQUMsT0FBTyxFQUFFLEVBQUU7WUFDWixPQUFPLEVBQUUsQ0FBQTtTQUNUO0lBQ0YsQ0FBQztJQUVELEtBQUssQ0FBQyxVQUFVO1FBQ2YsSUFBSSxJQUFJLENBQUMsY0FBYyxLQUFLLFNBQVMsRUFBRTtZQUN0QyxNQUFNLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQyxDQUFBO1NBQ3pDO1FBQ0QsTUFBTSxFQUFFLGNBQWMsRUFBRSxHQUFHLElBQUEsbUJBQVEsR0FBRSxDQUFBO1FBRXJDLElBQUksQ0FBQyxDQUFDLE1BQU0sYUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFO1lBQ3JDLE1BQU0sS0FBSyxDQUFDLHdCQUF3QixjQUFjLEdBQUcsQ0FBQyxDQUFBO1NBQ3REO1FBQ0QsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLGFBQUUsQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUE7UUFDekUsTUFBTSxlQUFlLEdBQUcsTUFBTSxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQTtRQUMzRCxNQUFNLGFBQWEsR0FBRztZQUNyQixjQUFjLEVBQUUsY0FBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsb0JBQW9CLENBQUM7WUFDakUsZUFBZSxFQUFFLGNBQWM7U0FDL0IsQ0FBQTtRQUNELElBQUEsZUFBTSxHQUFFLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxFQUFFLFdBQVcsRUFBRSxlQUFlLEVBQUUsQ0FBQyxDQUFBO1FBQy9ELElBQUksQ0FBQyxjQUFjLEdBQUcsZ0NBQWMsQ0FBQyxRQUFRLENBQUMsRUFBRSxHQUFHLGFBQWEsRUFBRSxHQUFHLGVBQWUsRUFBRSxHQUFHLFdBQVcsRUFBRSxFQUFFLG9CQUFZLENBQUMsQ0FBQTtJQUN0SCxDQUFDO0NBQ0Q7QUFwQ0Qsa0NBb0NDO0FBRVksUUFBQSxvQkFBb0IsR0FBRyxJQUFBLDBCQUFnQixFQUFDLEdBQUcsRUFBRTtJQUN6RCxPQUFPLElBQUksV0FBVyxFQUFFLENBQUE7QUFDekIsQ0FBQyxDQUFDLENBQUE7QUFFSyxNQUFNLE1BQU0sR0FBRyxHQUFzQixFQUFFO0lBQzdDLE1BQU0sSUFBSSxHQUFHLElBQUEsNEJBQW9CLEdBQUUsQ0FBQyxhQUFhLENBQUE7SUFDakQsSUFBSSxDQUFDLElBQUksRUFBRTtRQUNWLE1BQU0sS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUE7S0FDckM7SUFFRCxPQUFPLElBQUksQ0FBQTtBQUNaLENBQUMsQ0FBQTtBQVBZLFFBQUEsTUFBTSxVQU9sQiJ9