export declare class TemplateFolderService {
    cleanAll(): Promise<void>;
    makeTempFolderIfNotExist(): Promise<void>;
    promoteSubfolderToRoot(params: {
        subFolderLocation: string;
        rootFolderPath: string;
    }): Promise<void>;
}
//# sourceMappingURL=template-folder-service.d.ts.map