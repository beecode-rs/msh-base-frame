"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitService = void 0;
const axios_1 = __importDefault(require("axios"));
const fs_1 = __importDefault(require("fs"));
const config_1 = require("../util/config");
const constant_1 = require("../util/constant");
class GitService {
    _getAxiosHeader() {
        const { githubPersonAccessToken } = (0, config_1.config)();
        if (!githubPersonAccessToken) {
            return undefined;
        }
        return { Authorization: `token ${githubPersonAccessToken}` };
    }
    async downloadZipToTempFolder() {
        const { gitZipUrl } = (0, config_1.config)();
        const axiosHeader = this._getAxiosHeader();
        const { data: stream } = await axios_1.default.get(gitZipUrl, { headers: axiosHeader, responseType: 'stream' });
        stream.pipe(fs_1.default.createWriteStream((0, constant_1.constant)().templateZipPath));
        return new Promise((resolve, reject) => {
            stream.on('end', resolve);
            stream.on('error', reject);
        });
    }
}
exports.GitService = GitService;
//# sourceMappingURL=git-service.js.map