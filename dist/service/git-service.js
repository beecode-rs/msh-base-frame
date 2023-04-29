"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitService = void 0;
const axios_1 = __importDefault(require("axios"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const config_1 = require("../util/config");
class GitService {
    _getAxiosHeader() {
        const { githubPersonAccessToken } = (0, config_1.config)();
        if (!githubPersonAccessToken) {
            return undefined;
        }
        return { Authorization: `token ${githubPersonAccessToken}` };
    }
    async downloadZipToTempFolder() {
        const { gitZipUrl, tempFolderPath, templateZipName } = (0, config_1.config)();
        const axiosHeader = this._getAxiosHeader();
        const { data: stream } = await axios_1.default.get(gitZipUrl, { headers: axiosHeader, responseType: 'stream' });
        stream.pipe(fs_1.default.createWriteStream(path_1.default.resolve(tempFolderPath, `./${templateZipName}`)));
        return new Promise((resolve, reject) => {
            stream.on('end', resolve);
            stream.on('error', reject);
        });
    }
}
exports.GitService = GitService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2l0LXNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VydmljZS9naXQtc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxrREFBeUI7QUFDekIsNENBQW1CO0FBQ25CLGdEQUF1QjtBQUN2Qiw0Q0FBd0M7QUFFeEMsTUFBYSxVQUFVO0lBQ1osZUFBZTtRQUN4QixNQUFNLEVBQUUsdUJBQXVCLEVBQUUsR0FBRyxJQUFBLGVBQU0sR0FBRSxDQUFBO1FBQzVDLElBQUksQ0FBQyx1QkFBdUIsRUFBRTtZQUM3QixPQUFPLFNBQVMsQ0FBQTtTQUNoQjtRQUVELE9BQU8sRUFBRSxhQUFhLEVBQUUsU0FBUyx1QkFBdUIsRUFBRSxFQUFFLENBQUE7SUFDN0QsQ0FBQztJQUVELEtBQUssQ0FBQyx1QkFBdUI7UUFDNUIsTUFBTSxFQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLEdBQUcsSUFBQSxlQUFNLEdBQUUsQ0FBQTtRQUMvRCxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUE7UUFDMUMsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsR0FBRyxNQUFNLGVBQUssQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQTtRQUNyRyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxLQUFLLGVBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBRXZGLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDdEMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUE7WUFDekIsTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUE7UUFDM0IsQ0FBQyxDQUFDLENBQUE7SUFDSCxDQUFDO0NBQ0Q7QUFyQkQsZ0NBcUJDIn0=