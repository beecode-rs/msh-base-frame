import { type AxiosHeaders, type RawAxiosRequestHeaders } from 'axios';
export declare const webAdapter: {
    downloadFile(params: {
        fileUrl: string;
        fileDestinationPath: string;
        headers?: RawAxiosRequestHeaders | AxiosHeaders;
    }): Promise<void>;
};
//# sourceMappingURL=web-adapter.d.ts.map