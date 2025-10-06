export declare class TemplatingService {
    replaceFileWithRenderedTemplate(params: {
        filePath: string;
    }): Promise<void>;
    renderFile(params: {
        filePath: string;
        templateValues: Record<string, unknown>;
    }): Promise<string>;
}
//# sourceMappingURL=templating-service.d.ts.map