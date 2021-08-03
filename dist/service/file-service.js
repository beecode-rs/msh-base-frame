"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileService = void 0;
const extract_zip_1 = __importDefault(require("extract-zip"));
const fs_1 = require("fs");
const glob_1 = __importDefault(require("glob"));
const recursive_copy_1 = __importDefault(require("recursive-copy"));
const logger_1 = require("src/util/logger");
exports.fileService = {
    makeFolderIfNotExist: async (folderPath) => {
        if (await fs_1.promises.stat(folderPath).catch(() => false))
            return;
        await fs_1.promises.mkdir(folderPath);
    },
    removeFile: async (filePath) => {
        if (!(await fs_1.promises.stat(filePath).catch(() => false)))
            return;
        await fs_1.promises.rm(filePath);
    },
    removeFolder: async (folderPath) => {
        if (!(await fs_1.promises.stat(folderPath).catch(() => false)))
            return;
        await fs_1.promises.rmdir(folderPath, { recursive: true });
    },
    unzip: async (src, dest) => {
        await extract_zip_1.default(src, { dir: dest });
    },
    getFolderContent: async (path) => {
        return fs_1.promises.readdir(path);
    },
    isDirectory: async (path) => {
        try {
            const stat = await fs_1.promises.stat(path);
            return stat.isDirectory();
        }
        catch (e) {
            logger_1.logger.error('fileService.isDirectory', { error: e });
            return false;
        }
    },
    isFile: async (path) => {
        try {
            const stat = await fs_1.promises.stat(path);
            return stat.isFile();
        }
        catch (e) {
            logger_1.logger.error('fileService.isFile', { error: e });
            return false;
        }
    },
    filterFiles: async (fileFolderList) => {
        const filtered = await Promise.all(fileFolderList.map(async (f) => ((await exports.fileService.isFile(f)) ? f : undefined)));
        return filtered.filter(Boolean);
    },
    copy: async (src, dest, options = { ignore: [] }) => {
        // TODO this is to complex
        const copyContentList = await new Promise((resolve, reject) => {
            glob_1.default('**/*', { cwd: src, dot: true, nodir: true, ignore: [...options.ignore, '.bfignore'] }, (err, files) => {
                if (err)
                    return reject(err);
                return resolve(files);
            });
        });
        await Promise.all(copyContentList.map((file) => recursive_copy_1.default(`${src}/${file}`, `${dest}/${file}`)));
    },
    readFile: async (filePath) => {
        return fs_1.promises.readFile(filePath, { encoding: 'utf-8' });
    },
    getRecurringFolderContent: async (path) => {
        if (!(await exports.fileService.isDirectory(path)))
            return [];
        const folderContent = (await exports.fileService.getFolderContent(path)).map((f) => `${path}/${f}`);
        const subFolderContents = await Promise.all(folderContent.map(exports.fileService.getRecurringFolderContent));
        return [...folderContent, ...subFolderContents.flat()];
    },
    readIgnoreList: async (path) => {
        try {
            const body = await exports.fileService.readFile(`${path}/.bfignore`);
            return body
                .split('\n')
                .map((v) => v.trim())
                .filter(Boolean);
        }
        catch (e) {
            logger_1.logger.error('fileService.readIgnoreList', { error: e });
            return [];
        }
    },
    writeToFile: async (filePath, data) => {
        await fs_1.promises.writeFile(filePath, data, 'utf-8');
    },
    copyFilesIfNotExists: async (src, dest) => {
        await recursive_copy_1.default(src, dest, { overwrite: false, dot: true });
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NlcnZpY2UvZmlsZS1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDhEQUFvQztBQUNwQywyQkFBbUM7QUFDbkMsZ0RBQXVCO0FBQ3ZCLG9FQUFpQztBQUNqQyw0Q0FBd0M7QUFFM0IsUUFBQSxXQUFXLEdBQUc7SUFDekIsb0JBQW9CLEVBQUUsS0FBSyxFQUFFLFVBQWtCLEVBQWlCLEVBQUU7UUFDaEUsSUFBSSxNQUFNLGFBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUFFLE9BQU07UUFDeEQsTUFBTSxhQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQzVCLENBQUM7SUFDRCxVQUFVLEVBQUUsS0FBSyxFQUFFLFFBQWdCLEVBQWlCLEVBQUU7UUFDcEQsSUFBSSxDQUFDLENBQUMsTUFBTSxhQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUFFLE9BQU07UUFDekQsTUFBTSxhQUFFLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQ3ZCLENBQUM7SUFDRCxZQUFZLEVBQUUsS0FBSyxFQUFFLFVBQWtCLEVBQWlCLEVBQUU7UUFDeEQsSUFBSSxDQUFDLENBQUMsTUFBTSxhQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUFFLE9BQU07UUFDM0QsTUFBTSxhQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFBO0lBQ2pELENBQUM7SUFDRCxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQVcsRUFBRSxJQUFZLEVBQWlCLEVBQUU7UUFDeEQsTUFBTSxxQkFBVSxDQUFDLEdBQUcsRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFBO0lBQ3RDLENBQUM7SUFDRCxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsSUFBWSxFQUFxQixFQUFFO1FBQzFELE9BQU8sYUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUN6QixDQUFDO0lBQ0QsV0FBVyxFQUFFLEtBQUssRUFBRSxJQUFZLEVBQW9CLEVBQUU7UUFDcEQsSUFBSTtZQUNGLE1BQU0sSUFBSSxHQUFHLE1BQU0sYUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUNoQyxPQUFPLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQTtTQUMxQjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsZUFBTSxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFBO1lBQ3JELE9BQU8sS0FBSyxDQUFBO1NBQ2I7SUFDSCxDQUFDO0lBQ0QsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFZLEVBQW9CLEVBQUU7UUFDL0MsSUFBSTtZQUNGLE1BQU0sSUFBSSxHQUFHLE1BQU0sYUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUNoQyxPQUFPLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQTtTQUNyQjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsZUFBTSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFBO1lBQ2hELE9BQU8sS0FBSyxDQUFBO1NBQ2I7SUFDSCxDQUFDO0lBQ0QsV0FBVyxFQUFFLEtBQUssRUFBRSxjQUF3QixFQUFxQixFQUFFO1FBQ2pFLE1BQU0sUUFBUSxHQUFHLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLG1CQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3BILE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQWEsQ0FBQTtJQUM3QyxDQUFDO0lBQ0QsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFXLEVBQUUsSUFBWSxFQUFFLFVBQWdDLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxFQUFpQixFQUFFO1FBQ3ZHLDBCQUEwQjtRQUMxQixNQUFNLGVBQWUsR0FBRyxNQUFNLElBQUksT0FBTyxDQUFXLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ3RFLGNBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRTtnQkFDMUcsSUFBSSxHQUFHO29CQUFFLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO2dCQUMzQixPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUN2QixDQUFDLENBQUMsQ0FBQTtRQUNKLENBQUMsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLHdCQUFJLENBQUMsR0FBRyxHQUFHLElBQUksSUFBSSxFQUFFLEVBQUUsR0FBRyxJQUFJLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDN0YsQ0FBQztJQUNELFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBZ0IsRUFBbUIsRUFBRTtRQUNwRCxPQUFPLGFBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUE7SUFDckQsQ0FBQztJQUNELHlCQUF5QixFQUFFLEtBQUssRUFBRSxJQUFZLEVBQXFCLEVBQUU7UUFDbkUsSUFBSSxDQUFDLENBQUMsTUFBTSxtQkFBVyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUFFLE9BQU8sRUFBRSxDQUFBO1FBQ3JELE1BQU0sYUFBYSxHQUFHLENBQUMsTUFBTSxtQkFBVyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFBO1FBQzNGLE1BQU0saUJBQWlCLEdBQUcsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsbUJBQVcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUE7UUFDckcsT0FBTyxDQUFDLEdBQUcsYUFBYSxFQUFFLEdBQUcsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQTtJQUN4RCxDQUFDO0lBQ0QsY0FBYyxFQUFFLEtBQUssRUFBRSxJQUFZLEVBQXFCLEVBQUU7UUFDeEQsSUFBSTtZQUNGLE1BQU0sSUFBSSxHQUFHLE1BQU0sbUJBQVcsQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLFlBQVksQ0FBQyxDQUFBO1lBQzVELE9BQU8sSUFBSTtpQkFDUixLQUFLLENBQUMsSUFBSSxDQUFDO2lCQUNYLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO2lCQUNwQixNQUFNLENBQUMsT0FBTyxDQUFDLENBQUE7U0FDbkI7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLGVBQU0sQ0FBQyxLQUFLLENBQUMsNEJBQTRCLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQTtZQUN4RCxPQUFPLEVBQUUsQ0FBQTtTQUNWO0lBQ0gsQ0FBQztJQUNELFdBQVcsRUFBRSxLQUFLLEVBQUUsUUFBZ0IsRUFBRSxJQUFZLEVBQWlCLEVBQUU7UUFDbkUsTUFBTSxhQUFFLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUE7SUFDN0MsQ0FBQztJQUNELG9CQUFvQixFQUFFLEtBQUssRUFBRSxHQUFXLEVBQUUsSUFBWSxFQUFpQixFQUFFO1FBQ3ZFLE1BQU0sd0JBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQTtJQUN4RCxDQUFDO0NBQ0YsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHRyYWN0WmlwIGZyb20gJ2V4dHJhY3QtemlwJ1xuaW1wb3J0IHsgcHJvbWlzZXMgYXMgZnMgfSBmcm9tICdmcydcbmltcG9ydCBnbG9iIGZyb20gJ2dsb2InXG5pbXBvcnQgY29weSBmcm9tICdyZWN1cnNpdmUtY29weSdcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJ3NyYy91dGlsL2xvZ2dlcidcblxuZXhwb3J0IGNvbnN0IGZpbGVTZXJ2aWNlID0ge1xuICBtYWtlRm9sZGVySWZOb3RFeGlzdDogYXN5bmMgKGZvbGRlclBhdGg6IHN0cmluZyk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGlmIChhd2FpdCBmcy5zdGF0KGZvbGRlclBhdGgpLmNhdGNoKCgpID0+IGZhbHNlKSkgcmV0dXJuXG4gICAgYXdhaXQgZnMubWtkaXIoZm9sZGVyUGF0aClcbiAgfSxcbiAgcmVtb3ZlRmlsZTogYXN5bmMgKGZpbGVQYXRoOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBpZiAoIShhd2FpdCBmcy5zdGF0KGZpbGVQYXRoKS5jYXRjaCgoKSA9PiBmYWxzZSkpKSByZXR1cm5cbiAgICBhd2FpdCBmcy5ybShmaWxlUGF0aClcbiAgfSxcbiAgcmVtb3ZlRm9sZGVyOiBhc3luYyAoZm9sZGVyUGF0aDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgaWYgKCEoYXdhaXQgZnMuc3RhdChmb2xkZXJQYXRoKS5jYXRjaCgoKSA9PiBmYWxzZSkpKSByZXR1cm5cbiAgICBhd2FpdCBmcy5ybWRpcihmb2xkZXJQYXRoLCB7IHJlY3Vyc2l2ZTogdHJ1ZSB9KVxuICB9LFxuICB1bnppcDogYXN5bmMgKHNyYzogc3RyaW5nLCBkZXN0OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBhd2FpdCBleHRyYWN0WmlwKHNyYywgeyBkaXI6IGRlc3QgfSlcbiAgfSxcbiAgZ2V0Rm9sZGVyQ29udGVudDogYXN5bmMgKHBhdGg6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nW10+ID0+IHtcbiAgICByZXR1cm4gZnMucmVhZGRpcihwYXRoKVxuICB9LFxuICBpc0RpcmVjdG9yeTogYXN5bmMgKHBhdGg6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4gPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBzdGF0ID0gYXdhaXQgZnMuc3RhdChwYXRoKVxuICAgICAgcmV0dXJuIHN0YXQuaXNEaXJlY3RvcnkoKVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGxvZ2dlci5lcnJvcignZmlsZVNlcnZpY2UuaXNEaXJlY3RvcnknLCB7IGVycm9yOiBlIH0pXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH0sXG4gIGlzRmlsZTogYXN5bmMgKHBhdGg6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4gPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBzdGF0ID0gYXdhaXQgZnMuc3RhdChwYXRoKVxuICAgICAgcmV0dXJuIHN0YXQuaXNGaWxlKClcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBsb2dnZXIuZXJyb3IoJ2ZpbGVTZXJ2aWNlLmlzRmlsZScsIHsgZXJyb3I6IGUgfSlcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfSxcbiAgZmlsdGVyRmlsZXM6IGFzeW5jIChmaWxlRm9sZGVyTGlzdDogc3RyaW5nW10pOiBQcm9taXNlPHN0cmluZ1tdPiA9PiB7XG4gICAgY29uc3QgZmlsdGVyZWQgPSBhd2FpdCBQcm9taXNlLmFsbChmaWxlRm9sZGVyTGlzdC5tYXAoYXN5bmMgKGYpID0+ICgoYXdhaXQgZmlsZVNlcnZpY2UuaXNGaWxlKGYpKSA/IGYgOiB1bmRlZmluZWQpKSlcbiAgICByZXR1cm4gZmlsdGVyZWQuZmlsdGVyKEJvb2xlYW4pIGFzIHN0cmluZ1tdXG4gIH0sXG4gIGNvcHk6IGFzeW5jIChzcmM6IHN0cmluZywgZGVzdDogc3RyaW5nLCBvcHRpb25zOiB7IGlnbm9yZTogc3RyaW5nW10gfSA9IHsgaWdub3JlOiBbXSB9KTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgLy8gVE9ETyB0aGlzIGlzIHRvIGNvbXBsZXhcbiAgICBjb25zdCBjb3B5Q29udGVudExpc3QgPSBhd2FpdCBuZXcgUHJvbWlzZTxzdHJpbmdbXT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgZ2xvYignKiovKicsIHsgY3dkOiBzcmMsIGRvdDogdHJ1ZSwgbm9kaXI6IHRydWUsIGlnbm9yZTogWy4uLm9wdGlvbnMuaWdub3JlLCAnLmJmaWdub3JlJ10gfSwgKGVyciwgZmlsZXMpID0+IHtcbiAgICAgICAgaWYgKGVycikgcmV0dXJuIHJlamVjdChlcnIpXG4gICAgICAgIHJldHVybiByZXNvbHZlKGZpbGVzKVxuICAgICAgfSlcbiAgICB9KVxuICAgIGF3YWl0IFByb21pc2UuYWxsKGNvcHlDb250ZW50TGlzdC5tYXAoKGZpbGUpID0+IGNvcHkoYCR7c3JjfS8ke2ZpbGV9YCwgYCR7ZGVzdH0vJHtmaWxlfWApKSlcbiAgfSxcbiAgcmVhZEZpbGU6IGFzeW5jIChmaWxlUGF0aDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+ID0+IHtcbiAgICByZXR1cm4gZnMucmVhZEZpbGUoZmlsZVBhdGgsIHsgZW5jb2Rpbmc6ICd1dGYtOCcgfSlcbiAgfSxcbiAgZ2V0UmVjdXJyaW5nRm9sZGVyQ29udGVudDogYXN5bmMgKHBhdGg6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nW10+ID0+IHtcbiAgICBpZiAoIShhd2FpdCBmaWxlU2VydmljZS5pc0RpcmVjdG9yeShwYXRoKSkpIHJldHVybiBbXVxuICAgIGNvbnN0IGZvbGRlckNvbnRlbnQgPSAoYXdhaXQgZmlsZVNlcnZpY2UuZ2V0Rm9sZGVyQ29udGVudChwYXRoKSkubWFwKChmKSA9PiBgJHtwYXRofS8ke2Z9YClcbiAgICBjb25zdCBzdWJGb2xkZXJDb250ZW50cyA9IGF3YWl0IFByb21pc2UuYWxsKGZvbGRlckNvbnRlbnQubWFwKGZpbGVTZXJ2aWNlLmdldFJlY3VycmluZ0ZvbGRlckNvbnRlbnQpKVxuICAgIHJldHVybiBbLi4uZm9sZGVyQ29udGVudCwgLi4uc3ViRm9sZGVyQ29udGVudHMuZmxhdCgpXVxuICB9LFxuICByZWFkSWdub3JlTGlzdDogYXN5bmMgKHBhdGg6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nW10+ID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgYm9keSA9IGF3YWl0IGZpbGVTZXJ2aWNlLnJlYWRGaWxlKGAke3BhdGh9Ly5iZmlnbm9yZWApXG4gICAgICByZXR1cm4gYm9keVxuICAgICAgICAuc3BsaXQoJ1xcbicpXG4gICAgICAgIC5tYXAoKHYpID0+IHYudHJpbSgpKVxuICAgICAgICAuZmlsdGVyKEJvb2xlYW4pXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgbG9nZ2VyLmVycm9yKCdmaWxlU2VydmljZS5yZWFkSWdub3JlTGlzdCcsIHsgZXJyb3I6IGUgfSlcbiAgICAgIHJldHVybiBbXVxuICAgIH1cbiAgfSxcbiAgd3JpdGVUb0ZpbGU6IGFzeW5jIChmaWxlUGF0aDogc3RyaW5nLCBkYXRhOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBhd2FpdCBmcy53cml0ZUZpbGUoZmlsZVBhdGgsIGRhdGEsICd1dGYtOCcpXG4gIH0sXG4gIGNvcHlGaWxlc0lmTm90RXhpc3RzOiBhc3luYyAoc3JjOiBzdHJpbmcsIGRlc3Q6IHN0cmluZyk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGF3YWl0IGNvcHkoc3JjLCBkZXN0LCB7IG92ZXJ3cml0ZTogZmFsc2UsIGRvdDogdHJ1ZSB9KVxuICB9LFxufVxuIl19