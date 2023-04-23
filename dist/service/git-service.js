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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2l0LXNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VydmljZS9naXQtc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxrREFBeUI7QUFDekIsNENBQW1CO0FBQ25CLDRDQUF3QztBQUN4QyxnREFBNEM7QUFFNUMsTUFBYSxVQUFVO0lBQ1osZUFBZTtRQUN4QixNQUFNLEVBQUUsdUJBQXVCLEVBQUUsR0FBRyxJQUFBLGVBQU0sR0FBRSxDQUFBO1FBQzVDLElBQUksQ0FBQyx1QkFBdUIsRUFBRTtZQUM3QixPQUFPLFNBQVMsQ0FBQTtTQUNoQjtRQUVELE9BQU8sRUFBRSxhQUFhLEVBQUUsU0FBUyx1QkFBdUIsRUFBRSxFQUFFLENBQUE7SUFDN0QsQ0FBQztJQUVELEtBQUssQ0FBQyx1QkFBdUI7UUFDNUIsTUFBTSxFQUFFLFNBQVMsRUFBRSxHQUFHLElBQUEsZUFBTSxHQUFFLENBQUE7UUFDOUIsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFBO1FBQzFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEdBQUcsTUFBTSxlQUFLLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUE7UUFDckcsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFFLENBQUMsaUJBQWlCLENBQUMsSUFBQSxtQkFBUSxHQUFFLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQTtRQUU3RCxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ3RDLE1BQU0sQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFBO1lBQ3pCLE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFBO1FBQzNCLENBQUMsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztDQUNEO0FBckJELGdDQXFCQyJ9