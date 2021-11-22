"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tempFolderService = void 0;
const path_1 = __importDefault(require("path"));
const file_service_1 = require("src/service/file-service");
const constant_1 = require("src/util/constant");
exports.tempFolderService = {
    cleanAll: async () => {
        await file_service_1.fileService.removeFolder((0, constant_1.constant)().tempFolderPath);
        await exports.tempFolderService.makeTempFolderIfNotExist();
    },
    makeTempFolderIfNotExist: () => {
        return file_service_1.fileService.makeFolderIfNotExist((0, constant_1.constant)().tempFolderPath);
    },
    flattenFolderByOneLevelAndRemoveIgnored: async () => {
        const contentList = await file_service_1.fileService.getFolderContent((0, constant_1.constant)().tempFolderPath);
        await Promise.all(contentList.map(async (folder) => {
            const folderPath = path_1.default.resolve((0, constant_1.constant)().tempFolderPath, folder);
            const ignoreFiles = await file_service_1.fileService.readIgnoreList(folderPath);
            await file_service_1.fileService.copy(folderPath, (0, constant_1.constant)().tempFolderPath, { ignore: ignoreFiles });
            await file_service_1.fileService.removeFolder(path_1.default.resolve((0, constant_1.constant)().tempFolderPath, folder));
        }));
    },
    readIgnoreList: async () => {
        return file_service_1.fileService.readIgnoreList((0, constant_1.constant)().tempFolderPath);
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcC1mb2xkZXItc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlL3RlbXAtZm9sZGVyLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsZ0RBQXVCO0FBQ3ZCLDJEQUFzRDtBQUN0RCxnREFBNEM7QUFFL0IsUUFBQSxpQkFBaUIsR0FBRztJQUMvQixRQUFRLEVBQUUsS0FBSyxJQUFtQixFQUFFO1FBQ2xDLE1BQU0sMEJBQVcsQ0FBQyxZQUFZLENBQUMsSUFBQSxtQkFBUSxHQUFFLENBQUMsY0FBYyxDQUFDLENBQUE7UUFDekQsTUFBTSx5QkFBaUIsQ0FBQyx3QkFBd0IsRUFBRSxDQUFBO0lBQ3BELENBQUM7SUFDRCx3QkFBd0IsRUFBRSxHQUFrQixFQUFFO1FBQzVDLE9BQU8sMEJBQVcsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFBLG1CQUFRLEdBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQTtJQUNwRSxDQUFDO0lBQ0QsdUNBQXVDLEVBQUUsS0FBSyxJQUFtQixFQUFFO1FBQ2pFLE1BQU0sV0FBVyxHQUFHLE1BQU0sMEJBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFBLG1CQUFRLEdBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQTtRQUNqRixNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQ2YsV0FBVyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDL0IsTUFBTSxVQUFVLEdBQUcsY0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFBLG1CQUFRLEdBQUUsQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDLENBQUE7WUFDbEUsTUFBTSxXQUFXLEdBQUcsTUFBTSwwQkFBVyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQTtZQUNoRSxNQUFNLDBCQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFBLG1CQUFRLEdBQUUsQ0FBQyxjQUFjLEVBQUUsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQTtZQUN0RixNQUFNLDBCQUFXLENBQUMsWUFBWSxDQUFDLGNBQUksQ0FBQyxPQUFPLENBQUMsSUFBQSxtQkFBUSxHQUFFLENBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUE7UUFDakYsQ0FBQyxDQUFDLENBQ0gsQ0FBQTtJQUNILENBQUM7SUFDRCxjQUFjLEVBQUUsS0FBSyxJQUF1QixFQUFFO1FBQzVDLE9BQU8sMEJBQVcsQ0FBQyxjQUFjLENBQUMsSUFBQSxtQkFBUSxHQUFFLENBQUMsY0FBYyxDQUFDLENBQUE7SUFDOUQsQ0FBQztDQUNGLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IHsgZmlsZVNlcnZpY2UgfSBmcm9tICdzcmMvc2VydmljZS9maWxlLXNlcnZpY2UnXG5pbXBvcnQgeyBjb25zdGFudCB9IGZyb20gJ3NyYy91dGlsL2NvbnN0YW50J1xuXG5leHBvcnQgY29uc3QgdGVtcEZvbGRlclNlcnZpY2UgPSB7XG4gIGNsZWFuQWxsOiBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgYXdhaXQgZmlsZVNlcnZpY2UucmVtb3ZlRm9sZGVyKGNvbnN0YW50KCkudGVtcEZvbGRlclBhdGgpXG4gICAgYXdhaXQgdGVtcEZvbGRlclNlcnZpY2UubWFrZVRlbXBGb2xkZXJJZk5vdEV4aXN0KClcbiAgfSxcbiAgbWFrZVRlbXBGb2xkZXJJZk5vdEV4aXN0OiAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgcmV0dXJuIGZpbGVTZXJ2aWNlLm1ha2VGb2xkZXJJZk5vdEV4aXN0KGNvbnN0YW50KCkudGVtcEZvbGRlclBhdGgpXG4gIH0sXG4gIGZsYXR0ZW5Gb2xkZXJCeU9uZUxldmVsQW5kUmVtb3ZlSWdub3JlZDogYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGNvbnN0IGNvbnRlbnRMaXN0ID0gYXdhaXQgZmlsZVNlcnZpY2UuZ2V0Rm9sZGVyQ29udGVudChjb25zdGFudCgpLnRlbXBGb2xkZXJQYXRoKVxuICAgIGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgY29udGVudExpc3QubWFwKGFzeW5jIChmb2xkZXIpID0+IHtcbiAgICAgICAgY29uc3QgZm9sZGVyUGF0aCA9IHBhdGgucmVzb2x2ZShjb25zdGFudCgpLnRlbXBGb2xkZXJQYXRoLCBmb2xkZXIpXG4gICAgICAgIGNvbnN0IGlnbm9yZUZpbGVzID0gYXdhaXQgZmlsZVNlcnZpY2UucmVhZElnbm9yZUxpc3QoZm9sZGVyUGF0aClcbiAgICAgICAgYXdhaXQgZmlsZVNlcnZpY2UuY29weShmb2xkZXJQYXRoLCBjb25zdGFudCgpLnRlbXBGb2xkZXJQYXRoLCB7IGlnbm9yZTogaWdub3JlRmlsZXMgfSlcbiAgICAgICAgYXdhaXQgZmlsZVNlcnZpY2UucmVtb3ZlRm9sZGVyKHBhdGgucmVzb2x2ZShjb25zdGFudCgpLnRlbXBGb2xkZXJQYXRoLCBmb2xkZXIpKVxuICAgICAgfSlcbiAgICApXG4gIH0sXG4gIHJlYWRJZ25vcmVMaXN0OiBhc3luYyAoKTogUHJvbWlzZTxzdHJpbmdbXT4gPT4ge1xuICAgIHJldHVybiBmaWxlU2VydmljZS5yZWFkSWdub3JlTGlzdChjb25zdGFudCgpLnRlbXBGb2xkZXJQYXRoKVxuICB9LFxufVxuIl19