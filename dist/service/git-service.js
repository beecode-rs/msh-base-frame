"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gitService = void 0;
const axios_1 = __importDefault(require("axios"));
const fs_1 = __importDefault(require("fs"));
const config_1 = require("src/util/config");
const constant_1 = require("src/util/constant");
exports.gitService = {
    downloadZipToTempFolder: async () => {
        const { githubPersonAccessToken } = config_1.config.get();
        const axiosHeader = githubPersonAccessToken ? { Authorization: `token ${githubPersonAccessToken}` } : {};
        const { data: stream } = await axios_1.default.get(config_1.config.get().gitZipUrl, { responseType: 'stream', headers: axiosHeader });
        stream.pipe(fs_1.default.createWriteStream(constant_1.constant.templateZipPath));
        return new Promise((resolve, reject) => {
            stream.on('end', resolve);
            stream.on('error', reject);
        });
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2l0LXNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VydmljZS9naXQtc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxrREFBeUI7QUFDekIsNENBQW1CO0FBQ25CLDRDQUF3QztBQUN4QyxnREFBNEM7QUFFL0IsUUFBQSxVQUFVLEdBQUc7SUFDeEIsdUJBQXVCLEVBQUUsS0FBSyxJQUFtQixFQUFFO1FBQ2pELE1BQU0sRUFBRSx1QkFBdUIsRUFBRSxHQUFHLGVBQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQTtRQUNoRCxNQUFNLFdBQVcsR0FBRyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsRUFBRSxhQUFhLEVBQUUsU0FBUyx1QkFBdUIsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQTtRQUN4RyxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxHQUFHLE1BQU0sZUFBSyxDQUFDLEdBQUcsQ0FBQyxlQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsU0FBUyxFQUFFLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQTtRQUNsSCxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxtQkFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUE7UUFDM0QsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNyQyxNQUFNLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQTtZQUN6QixNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQTtRQUM1QixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IGZzIGZyb20gJ2ZzJ1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnc3JjL3V0aWwvY29uZmlnJ1xuaW1wb3J0IHsgY29uc3RhbnQgfSBmcm9tICdzcmMvdXRpbC9jb25zdGFudCdcblxuZXhwb3J0IGNvbnN0IGdpdFNlcnZpY2UgPSB7XG4gIGRvd25sb2FkWmlwVG9UZW1wRm9sZGVyOiBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgY29uc3QgeyBnaXRodWJQZXJzb25BY2Nlc3NUb2tlbiB9ID0gY29uZmlnLmdldCgpXG4gICAgY29uc3QgYXhpb3NIZWFkZXIgPSBnaXRodWJQZXJzb25BY2Nlc3NUb2tlbiA/IHsgQXV0aG9yaXphdGlvbjogYHRva2VuICR7Z2l0aHViUGVyc29uQWNjZXNzVG9rZW59YCB9IDoge31cbiAgICBjb25zdCB7IGRhdGE6IHN0cmVhbSB9ID0gYXdhaXQgYXhpb3MuZ2V0KGNvbmZpZy5nZXQoKS5naXRaaXBVcmwsIHsgcmVzcG9uc2VUeXBlOiAnc3RyZWFtJywgaGVhZGVyczogYXhpb3NIZWFkZXIgfSlcbiAgICBzdHJlYW0ucGlwZShmcy5jcmVhdGVXcml0ZVN0cmVhbShjb25zdGFudC50ZW1wbGF0ZVppcFBhdGgpKVxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBzdHJlYW0ub24oJ2VuZCcsIHJlc29sdmUpXG4gICAgICBzdHJlYW0ub24oJ2Vycm9yJywgcmVqZWN0KVxuICAgIH0pXG4gIH0sXG59XG4iXX0=