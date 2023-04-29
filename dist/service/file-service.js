"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileService = void 0;
const extract_zip_1 = __importDefault(require("extract-zip"));
const fs_1 = require("fs");
const glob_1 = require("glob");
const recursive_copy_1 = __importDefault(require("recursive-copy"));
const logger_1 = require("../util/logger");
exports.fileService = {
    copy: async (src, dest, options = { ignore: [] }) => {
        const copyContentList = await (0, glob_1.glob)('**/*', { cwd: src, dot: true, ignore: [...options.ignore, '.bfignore'], nodir: true });
        await Promise.all(copyContentList.map((file) => (0, recursive_copy_1.default)(`${src}/${file}`, `${dest}/${file}`)));
    },
    copyFilesIfNotExists: async (src, dest) => {
        await (0, recursive_copy_1.default)(src, dest, { dot: true, overwrite: false });
    },
    filterFiles: async (fileFolderList) => {
        const filtered = await Promise.all(fileFolderList.map(async (f) => {
            if (await exports.fileService.isFile(f)) {
                return f;
            }
            return undefined;
        }));
        return filtered.filter(Boolean);
    },
    getFolderContent: async (path) => {
        return fs_1.promises.readdir(path);
    },
    getRecurringFolderContent: async (path) => {
        if (!(await exports.fileService.isDirectory(path))) {
            return [];
        }
        const folderContent = (await exports.fileService.getFolderContent(path)).map((f) => `${path}/${f}`);
        const subFolderContents = await Promise.all(folderContent.map(exports.fileService.getRecurringFolderContent));
        return [...folderContent, ...subFolderContents.flat()];
    },
    isDirectory: async (path) => {
        try {
            const stat = await fs_1.promises.stat(path);
            return stat.isDirectory();
        }
        catch (e) {
            (0, logger_1.logger)().error('fileService.isDirectory', { error: e });
            return false;
        }
    },
    isFile: async (path) => {
        try {
            const stat = await fs_1.promises.stat(path);
            return stat.isFile();
        }
        catch (e) {
            (0, logger_1.logger)().error('fileService.isFile', { error: e });
            return false;
        }
    },
    makeFolderIfNotExist: async (folderPath) => {
        if (await fs_1.promises.stat(folderPath).catch(() => false)) {
            return;
        }
        await fs_1.promises.mkdir(folderPath);
    },
    readFile: async (filePath) => {
        return fs_1.promises.readFile(filePath, { encoding: 'utf-8' });
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
            (0, logger_1.logger)().error('fileService.readIgnoreList', { error: e });
            return [];
        }
    },
    removeFile: async (filePath) => {
        if (!(await fs_1.promises.stat(filePath).catch(() => false))) {
            return;
        }
        await fs_1.promises.rm(filePath);
    },
    removeFolder: async (folderPath) => {
        if (!(await fs_1.promises.stat(folderPath).catch(() => false))) {
            return;
        }
        // @ts-expect-error
        await fs_1.promises.rmdir(folderPath, { force: true, recursive: true });
    },
    unzip: async (src, dest) => {
        await (0, extract_zip_1.default)(src, { dir: dest });
    },
    writeToFile: async (filePath, data) => {
        await fs_1.promises.writeFile(filePath, data, 'utf-8');
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NlcnZpY2UvZmlsZS1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDhEQUFvQztBQUNwQywyQkFBbUM7QUFDbkMsK0JBQTJCO0FBQzNCLG9FQUFpQztBQUNqQyw0Q0FBd0M7QUFFM0IsUUFBQSxXQUFXLEdBQUc7SUFDMUIsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFXLEVBQUUsSUFBWSxFQUFFLFVBQWdDLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxFQUFpQixFQUFFO1FBQ3hHLE1BQU0sZUFBZSxHQUFHLE1BQU0sSUFBQSxXQUFJLEVBQUMsTUFBTSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQTtRQUMxSCxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBQSx3QkFBSSxFQUFDLEdBQUcsR0FBRyxJQUFJLElBQUksRUFBRSxFQUFFLEdBQUcsSUFBSSxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQzVGLENBQUM7SUFDRCxvQkFBb0IsRUFBRSxLQUFLLEVBQUUsR0FBVyxFQUFFLElBQVksRUFBaUIsRUFBRTtRQUN4RSxNQUFNLElBQUEsd0JBQUksRUFBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQTtJQUN2RCxDQUFDO0lBQ0QsV0FBVyxFQUFFLEtBQUssRUFBRSxjQUF3QixFQUFxQixFQUFFO1FBQ2xFLE1BQU0sUUFBUSxHQUFHLE1BQU0sT0FB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