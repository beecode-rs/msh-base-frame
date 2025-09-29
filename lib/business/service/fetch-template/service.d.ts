import { FetchTemplateStrategyType } from '../../../business/model/fetch-template-strategy-type.js';
import { FetchTemplateStrategyGit } from '../../../business/service/fetch-template/strategy-git.js';
import { FetchTemplateStrategyLocalFolder } from '../../../business/service/fetch-template/strategy-local-folder.js';
import { FetchTemplateStrategyWebZip } from '../../../business/service/fetch-template/strategy-web-zip.js';
export declare const fetchTemplateService: {
    getStrategy: (type: FetchTemplateStrategyType) => FetchTemplateStrategyGit | FetchTemplateStrategyLocalFolder | FetchTemplateStrategyWebZip;
};
//# sourceMappingURL=service.d.ts.map