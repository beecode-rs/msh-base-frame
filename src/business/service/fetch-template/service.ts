import { typeUtil } from '@beecode/msh-util/type-util'

import { FetchTemplateStrategyLocalFolder } from '#src/business/service/fetch-template/strategy-local-folder'
import { FetchTemplateStrategyWeb } from '#src/business/service/fetch-template/strategy-web'
import { z } from '#src/lib/zod-wrapper'

export enum FetchTemplateStrategyType {
	LOCAL_FOLDER = 'LOCAL_FOLDER',
	WEB = 'WEB',
}

// zod issue with enum that is imported workaround
export const zEnumFetchTemplateStrategyType = z.enum(FetchTemplateStrategyType)

export const fetchTemplateService = {
	getStrategy: (type: FetchTemplateStrategyType) => {
		switch (type) {
			case FetchTemplateStrategyType.LOCAL_FOLDER:
				return new FetchTemplateStrategyLocalFolder()
			case FetchTemplateStrategyType.WEB:
				return new FetchTemplateStrategyWeb()
			default:
				throw typeUtil.exhaustiveError(`Unknown fetch template type [${String(type)}]`, type)
		}
	},
}
