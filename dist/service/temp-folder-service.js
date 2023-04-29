"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tempFolderService = void 0;
const path_1 = __importDefault(require("path"));
const file_service_1 = require("../service/file-service");
const config_1 = require("../util/config");
exports.tempFolderService = {
    cleanAll: async () => {
        await file_service_1.fileService.removeFolder((0, config_1.config)().tempFolderPath);
        await exports.tempFolderService.makeTempFolderIfNotExist();
    },
    flattenFolderByOneLevelAndRemoveIgnored: async () => {
        const contentList = await file_service_1.fileService.getFolderContent((0, config_1.config)().tempFolderPath);
        await Promise.all(contentList.map(async (folder) => {
            const folderPath = path_1.default.resolve((0, config_1.config)().tempFolderPath, folder);
            const ignoreFiles = await file_service_1.fileService.readIgnoreList(folderPath);
            await file_service_1.fileService.copy(folderPath, (0, config_1.config)().tempFolderPath, { ignore: ignoreFiles });
            await file_service_1.fileService.removeFolder(path_1.default.resolve((0, config_1.config)().tempFolderPath, folder));
        }));
    },
    makeTempFolderIfNotExist: () => {
        return file_service_1.fileService.makeFolderIfNotExist((0, config_1.config)().tempFolderPath);
    },
    readIgnoreList: async () => {
        return file_service_1.fileService.readIgnoreList((0, config_1.config)().tempFolderPath);
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcC1mb2xkZXItc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlL3RlbXAtZm9sZGVyLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsZ0RBQXVCO0FBQ3ZCLDJEQUFzRDtBQUN0RCw0Q0FBd0M7QUFFM0IsUUFBQSxpQkFBaUIsR0FBRztJQUNoQyxRQUFRLEVBQUUsS0FBSyxJQUFtQixFQUFFO1FBQ25DLE1BQU0sMEJBQVcsQ0FBQyxZQUFZLENBQUMsSUFBQSxlQUFNLEdBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQTtRQUN2RCxNQUFNLHlCQUFpQixDQUFDLHdCQUF3QixFQUFFLENBQUE7SUFDbkQsQ0FBQztJQUNELHVDQUF1QyxFQUFFLEtBQUssSUFBbUIsRUFBRTtRQUNsRSxNQUFNLFdBQVcsR0FBRyxNQUFNLDBCQUFXLENBQUMsZ0JBQWdCLENBQUMsSUFBQSxlQUFNLEdBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQTtRQUMvRSxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQ2hCLFdBQVcsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ2hDLE1BQU0sVUFBVSxHQUFHLGNBQUksQ0FBQyxPQUFPLENBQUMsSUFBQSxlQUFNLEdBQUUsQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDLENBQUE7WUFDaEUsTUFBTSxXQUFXLEdBQUcsTUFBTSwwQkFBVyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQTtZQUNoRSxNQUFNLDBCQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFBLGVBQU0sR0FBRSxDQUFDLGNBQWMsRUFBRSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFBO1lBQ3BGLE1BQU0sMEJBQVcsQ0FBQyxZQUFZLENBQUMsY0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFBLGVBQU0sR0FBRSxDQUFDLGNBQWMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFBO1FBQzlFLENBQUMsQ0FBQyxDQUNGLENBQUE7SUFDRixDQUFDO0lBQ0Qsd0JBQXdCLEVBQUUsR0FBa0IsRUFBRTtRQUM3QyxPQUFPLDBCQUFXLENBQUMsb0JBQW9CLENBQUMsSUFBQSxlQUFNLEdBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQTtJQUNqRSxDQUFDO0lBQ0QsY0FBYyxFQUFFLEtBQUssSUFBdUIsRUFBRTtRQUM3QyxPQUFPLDBCQUFXLENBQUMsY0FBYyxDQUFDLElBQUEsZUFBTSxHQUFFLENBQUMsY0FBYyxDQUFDLENBQUE7SUFDM0QsQ0FBQztDQUNELENBQUEifQ==