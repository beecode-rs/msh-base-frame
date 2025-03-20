import path from 'path';
import { fileService } from '#src/service/file-service';
import { config } from '#src/util/config';
export const tempFolderService = {
    cleanAll: async () => {
        await fileService.removeFolder(config().tempFolderPath);
        await tempFolderService.makeTempFolderIfNotExist();
    },
    flattenFolderByOneLevelAndRemoveIgnored: async () => {
        const contentList = await fileService.getFolderContent(config().tempFolderPath);
        await Promise.all(contentList.map(async (folder) => {
            const folderPath = path.resolve(config().tempFolderPath, folder);
            const ignoreFiles = await fileService.readIgnoreList(folderPath);
            await fileService.copy(folderPath, config().tempFolderPath, { ignore: ignoreFiles });
            await fileService.removeFolder(path.resolve(config().tempFolderPath, folder));
        }));
    },
    makeTempFolderIfNotExist: () => {
        return fileService.makeFolderIfNotExist(config().tempFolderPath);
    },
    readIgnoreList: async () => {
        return fileService.readIgnoreList(config().tempFolderPath);
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcC1mb2xkZXItc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlL3RlbXAtZm9sZGVyLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxJQUFJLE1BQU0sTUFBTSxDQUFBO0FBRXZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQTtBQUN2RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sa0JBQWtCLENBQUE7QUFFekMsTUFBTSxDQUFDLE1BQU0saUJBQWlCLEdBQUc7SUFDaEMsUUFBUSxFQUFFLEtBQUssSUFBbUIsRUFBRTtRQUNuQyxNQUFNLFdBQVcsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUE7UUFDdkQsTUFBTSxpQkFBaUIsQ0FBQyx3QkFBd0IsRUFBRSxDQUFBO0lBQ25ELENBQUM7SUFDRCx1Q0FBdUMsRUFBRSxLQUFLLElBQW1CLEVBQUU7UUFDbEUsTUFBTSxXQUFXLEdBQUcsTUFBTSxXQUFXLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUE7UUFDL0UsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUNoQixXQUFXLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNoQyxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLGNBQWMsRUFBRSxNQUFNLENBQUMsQ0FBQTtZQUNoRSxNQUFNLFdBQVcsR0FBRyxNQUFNLFdBQVcsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUE7WUFDaEUsTUFBTSxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxjQUFjLEVBQUUsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQTtZQUNwRixNQUFNLFdBQVcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQTtRQUM5RSxDQUFDLENBQUMsQ0FDRixDQUFBO0lBQ0YsQ0FBQztJQUNELHdCQUF3QixFQUFFLEdBQWtCLEVBQUU7UUFDN0MsT0FBTyxXQUFXLENBQUMsb0JBQW9CLENBQUMsTUFBTSxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUE7SUFDakUsQ0FBQztJQUVELGNBQWMsRUFBRSxLQUFLLElBQXVCLEVBQUU7UUFDN0MsT0FBTyxXQUFXLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFBO0lBQzNELENBQUM7Q0FDRCxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcblxuaW1wb3J0IHsgZmlsZVNlcnZpY2UgfSBmcm9tICcjc3JjL3NlcnZpY2UvZmlsZS1zZXJ2aWNlJ1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnI3NyYy91dGlsL2NvbmZpZydcblxuZXhwb3J0IGNvbnN0IHRlbXBGb2xkZXJTZXJ2aWNlID0ge1xuXHRjbGVhbkFsbDogYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRcdGF3YWl0IGZpbGVTZXJ2aWNlLnJlbW92ZUZvbGRlcihjb25maWcoKS50ZW1wRm9sZGVyUGF0aClcblx0XHRhd2FpdCB0ZW1wRm9sZGVyU2VydmljZS5tYWtlVGVtcEZvbGRlcklmTm90RXhpc3QoKVxuXHR9LFxuXHRmbGF0dGVuRm9sZGVyQnlPbmVMZXZlbEFuZFJlbW92ZUlnbm9yZWQ6IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHRjb25zdCBjb250ZW50TGlzdCA9IGF3YWl0IGZpbGVTZXJ2aWNlLmdldEZvbGRlckNvbnRlbnQoY29uZmlnKCkudGVtcEZvbGRlclBhdGgpXG5cdFx0YXdhaXQgUHJvbWlzZS5hbGwoXG5cdFx0XHRjb250ZW50TGlzdC5tYXAoYXN5bmMgKGZvbGRlcikgPT4ge1xuXHRcdFx0XHRjb25zdCBmb2xkZXJQYXRoID0gcGF0aC5yZXNvbHZlKGNvbmZpZygpLnRlbXBGb2xkZXJQYXRoLCBmb2xkZXIpXG5cdFx0XHRcdGNvbnN0IGlnbm9yZUZpbGVzID0gYXdhaXQgZmlsZVNlcnZpY2UucmVhZElnbm9yZUxpc3QoZm9sZGVyUGF0aClcblx0XHRcdFx0YXdhaXQgZmlsZVNlcnZpY2UuY29weShmb2xkZXJQYXRoLCBjb25maWcoKS50ZW1wRm9sZGVyUGF0aCwgeyBpZ25vcmU6IGlnbm9yZUZpbGVzIH0pXG5cdFx0XHRcdGF3YWl0IGZpbGVTZXJ2aWNlLnJlbW92ZUZvbGRlcihwYXRoLnJlc29sdmUoY29uZmlnKCkudGVtcEZvbGRlclBhdGgsIGZvbGRlcikpXG5cdFx0XHR9KVxuXHRcdClcblx0fSxcblx0bWFrZVRlbXBGb2xkZXJJZk5vdEV4aXN0OiAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdFx0cmV0dXJuIGZpbGVTZXJ2aWNlLm1ha2VGb2xkZXJJZk5vdEV4aXN0KGNvbmZpZygpLnRlbXBGb2xkZXJQYXRoKVxuXHR9LFxuXG5cdHJlYWRJZ25vcmVMaXN0OiBhc3luYyAoKTogUHJvbWlzZTxzdHJpbmdbXT4gPT4ge1xuXHRcdHJldHVybiBmaWxlU2VydmljZS5yZWFkSWdub3JlTGlzdChjb25maWcoKS50ZW1wRm9sZGVyUGF0aClcblx0fSxcbn1cbiJdfQ==