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
        const { data: stream } = await axios_1.default.get(config_1.config.get().gitZipUrl, { responseType: 'stream' });
        stream.pipe(fs_1.default.createWriteStream(constant_1.constant.templateZipPath));
        return new Promise((resolve, reject) => {
            stream.on('end', resolve);
            stream.on('error', reject);
        });
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2l0LXNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VydmljZS9naXQtc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxrREFBeUI7QUFDekIsNENBQW1CO0FBQ25CLDRDQUF3QztBQUN4QyxnREFBNEM7QUFFL0IsUUFBQSxVQUFVLEdBQUc7SUFDeEIsdUJBQXVCLEVBQUUsS0FBSyxJQUFtQixFQUFFO1FBQ2pELE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEdBQUcsTUFBTSxlQUFLLENBQUMsR0FBRyxDQUFDLGVBQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxTQUFTLEVBQUUsRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQTtRQUM1RixNQUFNLENBQUMsSUFBSSxDQUFDLFlBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxtQkFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUE7UUFDM0QsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNyQyxNQUFNLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQTtZQUN6QixNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQTtRQUM1QixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FFRixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IGZzIGZyb20gJ2ZzJ1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnc3JjL3V0aWwvY29uZmlnJ1xuaW1wb3J0IHsgY29uc3RhbnQgfSBmcm9tICdzcmMvdXRpbC9jb25zdGFudCdcblxuZXhwb3J0IGNvbnN0IGdpdFNlcnZpY2UgPSB7XG4gIGRvd25sb2FkWmlwVG9UZW1wRm9sZGVyOiBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgY29uc3QgeyBkYXRhOiBzdHJlYW0gfSA9IGF3YWl0IGF4aW9zLmdldChjb25maWcuZ2V0KCkuZ2l0WmlwVXJsLCB7IHJlc3BvbnNlVHlwZTogJ3N0cmVhbScgfSlcbiAgICBzdHJlYW0ucGlwZShmcy5jcmVhdGVXcml0ZVN0cmVhbShjb25zdGFudC50ZW1wbGF0ZVppcFBhdGgpKVxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBzdHJlYW0ub24oJ2VuZCcsIHJlc29sdmUpXG4gICAgICBzdHJlYW0ub24oJ2Vycm9yJywgcmVqZWN0KVxuICAgIH0pXG4gIH0sXG5cbn1cbiJdfQ==