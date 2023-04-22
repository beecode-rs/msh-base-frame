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
        const filtered = await Promise.all(fileFolderList.map(async (f) => ((await exports.fileService.isFile(f)) ? f : undefined)));
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
//# sourceMappingURL=file-service.js.map