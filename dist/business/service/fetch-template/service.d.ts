import { FetchTemplateStrategyType } from '#src/business/model/fetch-template-strategy-type';
import { FetchTemplateStrategyGit } from '#src/business/service/fetch-template/strategy-git';
import { FetchTemplateStrategyLocalFolder } from '#src/business/service/fetch-template/strategy-local-folder';
import { FetchTemplateStrategyWebZip } from '#src/business/service/fetch-template/strategy-web-zip';
export declare const fetchTemplateService: {
    getStrategy: (type: FetchTemplateStrategyType) => FetchTemplateStrategyGit | FetchTemplateStrategyLocalFolder | FetchTemplateStrategyWebZip;
};
//# sourceMappingURL=service.d.ts.map