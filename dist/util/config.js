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
//# sourceMappingURL=config.js.map