"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tempFolderService = void 0;
const path_1 = __importDefault(require("path"));
const file_service_1 = require("../service/file-service");
const constant_1 = require("../util/constant");
exports.tempFolderService = {
    cleanAll: async () => {
        await file_service_1.fileService.removeFolder((0, constant_1.constant)().tempFolderPath);
        await exports.tempFolderService.makeTempFolderIfNotExist();
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
    makeTempFolderIfNotExist: () => {
        return file_service_1.fileService.makeFolderIfNotExist((0, constant_1.constant)().tempFolderPath);
    },
    readIgnoreList: async () => {
        return file_service_1.fileService.readIgnoreList((0, constant_1.constant)().tempFolderPath);
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcC1mb2xkZXItc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlL3RlbXAtZm9sZGVyLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsZ0RBQXVCO0FBQ3ZCLDJEQUFzRDtBQUN0RCxnREFBNEM7QUFFL0IsUUFBQSxpQkFBaUIsR0FBRztJQUNoQyxRQUFRLEVBQUUsS0FBSyxJQUFtQixFQUFFO1FBQ25DLE1BQU0sMEJBQVcsQ0FBQyxZQUFZLENBQUMsSUFBQSxtQkFBUSxHQUFFLENBQUMsY0FBYyxDQUFDLENBQUE7UUFDekQsTUFBTSx5QkFBaUIsQ0FBQyx3QkFBd0IsRUFBRSxDQUFBO0lBQ25ELENBQUM7SUFDRCx1Q0FBdUMsRUFBRSxLQUFLLElBQW1CLEVBQUU7UUFDbEUsTUFBTSxXQUFXLEdBQUcsTUFBTSwwQkFBVyxDQUFDLGdCQUFnQixDQUFDLElBQUEsbUJBQVEsR0FBRSxDQUFDLGNBQWMsQ0FBQyxDQUFBO1FBQ2pGLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FDaEIsV0FBVyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDaEMsTUFBTSxVQUFVLEdBQUcsY0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFBLG1CQUFRLEdBQUUsQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDLENBQUE7WUFDbEUsTUFBTSxXQUFXLEdBQUcsTUFBTSwwQkFBVyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQTtZQUNoRSxNQUFNLDBCQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFBLG1CQUFRLEdBQUUsQ0FBQyxjQUFjLEVBQUUsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQTtZQUN0RixNQUFNLDBCQUFXLENBQUMsWUFBWSxDQUFDLGNBQUksQ0FBQyxPQUFPLENBQUMsSUFBQSxtQkFBUSxHQUFFLENBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUE7UUFDaEYsQ0FBQyxDQUFDLENBQ0YsQ0FBQTtJQUNGLENBQUM7SUFDRCx3QkFBd0IsRUFBRSxHQUFrQixFQUFFO1FBQzdDLE9BQU8sMEJBQVcsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFBLG1CQUFRLEdBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQTtJQUNuRSxDQUFDO0lBQ0QsY0FBYyxFQUFFLEtBQUssSUFBdUIsRUFBRTtRQUM3QyxPQUFPLDBCQUFXLENBQUMsY0FBYyxDQUFDLElBQUEsbUJBQVEsR0FBRSxDQUFDLGNBQWMsQ0FBQyxDQUFBO0lBQzdELENBQUM7Q0FDRCxDQUFBIn0=