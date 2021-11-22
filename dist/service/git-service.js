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
        const axiosHeader = githubPersonAccessToken ? { Authorization: `token ${githubPersonAccessToken}` } : undefined;
        const { data: stream } = await axios_1.default.get(config_1.config.get().gitZipUrl, { responseType: 'stream', headers: axiosHeader });
        stream.pipe(fs_1.default.createWriteStream((0, constant_1.constant)().templateZipPath));
        return new Promise((resolve, reject) => {
            stream.on('end', resolve);
            stream.on('error', reject);
        });
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2l0LXNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VydmljZS9naXQtc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxrREFBeUI7QUFDekIsNENBQW1CO0FBQ25CLDRDQUF3QztBQUN4QyxnREFBNEM7QUFFL0IsUUFBQSxVQUFVLEdBQUc7SUFDeEIsdUJBQXVCLEVBQUUsS0FBSyxJQUFtQixFQUFFO1FBQ2pELE1BQU0sRUFBRSx1QkFBdUIsRUFBRSxHQUFHLGVBQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQTtRQUNoRCxNQUFNLFdBQVcsR0FBRyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsRUFBRSxhQUFhLEVBQUUsU0FBUyx1QkFBdUIsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQTtRQUMvRyxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxHQUFHLE1BQU0sZUFBSyxDQUFDLEdBQUcsQ0FBQyxlQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsU0FBUyxFQUFFLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQTtRQUNsSCxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFBLG1CQUFRLEdBQUUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFBO1FBQzdELE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDckMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUE7WUFDekIsTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUE7UUFDNUIsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0YsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBmcyBmcm9tICdmcydcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJ3NyYy91dGlsL2NvbmZpZydcbmltcG9ydCB7IGNvbnN0YW50IH0gZnJvbSAnc3JjL3V0aWwvY29uc3RhbnQnXG5cbmV4cG9ydCBjb25zdCBnaXRTZXJ2aWNlID0ge1xuICBkb3dubG9hZFppcFRvVGVtcEZvbGRlcjogYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGNvbnN0IHsgZ2l0aHViUGVyc29uQWNjZXNzVG9rZW4gfSA9IGNvbmZpZy5nZXQoKVxuICAgIGNvbnN0IGF4aW9zSGVhZGVyID0gZ2l0aHViUGVyc29uQWNjZXNzVG9rZW4gPyB7IEF1dGhvcml6YXRpb246IGB0b2tlbiAke2dpdGh1YlBlcnNvbkFjY2Vzc1Rva2VufWAgfSA6IHVuZGVmaW5lZFxuICAgIGNvbnN0IHsgZGF0YTogc3RyZWFtIH0gPSBhd2FpdCBheGlvcy5nZXQoY29uZmlnLmdldCgpLmdpdFppcFVybCwgeyByZXNwb25zZVR5cGU6ICdzdHJlYW0nLCBoZWFkZXJzOiBheGlvc0hlYWRlciB9KVxuICAgIHN0cmVhbS5waXBlKGZzLmNyZWF0ZVdyaXRlU3RyZWFtKGNvbnN0YW50KCkudGVtcGxhdGVaaXBQYXRoKSlcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgc3RyZWFtLm9uKCdlbmQnLCByZXNvbHZlKVxuICAgICAgc3RyZWFtLm9uKCdlcnJvcicsIHJlamVjdClcbiAgICB9KVxuICB9LFxufVxuIl19