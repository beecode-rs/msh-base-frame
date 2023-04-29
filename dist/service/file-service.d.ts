export declare const fileService: {
    copy: (src: string, dest: string, options?: {
        ignore: string[];
    }) => Promise<void>;
    copyFilesIfNotExists: (src: string, dest: string) => Promise<void>;
    filterFiles: (fileFolderList: string[]) => Promise<string[]>;
    getFolderContent: (path: string) => Promise<string[]>;
    getRecurringFolderContent: (path: string) => Promise<string[]>;
    isDirectory: (path: string) => Promise<boolean>;
    isFile: (path: string) => Promise<boolean>;
    makeFolderIfNotExist: (folderPath: string) => Promise<void>;
    readFile: (filePath: string) => Promise<string>;
    readIgnoreList: (path: string) => Promise<string[]>;
    removeFile: (filePath: string) => Promise<void>;
    removeFolder: (folderPath: string) => Promise<void>;
    unzip: (src: string, dest: string) => Promise<void>;
    writeToFile: (filePath: string, data: string) => Promise<void>;
};
//# sourceMappingURL=file-service.d.ts.map