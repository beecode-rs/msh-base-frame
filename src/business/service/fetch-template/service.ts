import { typeUtil } from '@beecode/msh-util/type-util'

import { FetchTemplateStrategyType } from '#src/business/model/fetch-template-strategy-type'
import { FetchTemplateStrategyGit } from '#src/business/service/fetch-template/strategy-git'
import { FetchTemplateStrategyLocalFolder } from '#src/business/service/fetch-template/strategy-local-folder'
import { FetchTemplateStrategyWebZip } from '#src/business/service/fetch-template/strategy-web-zip'

export const fetchTemplateService = {
	getStrategy: (type: FetchTemplateStrategyType) => {
		switch (type) {
			case FetchTemplateStrategyType.LOCAL_FOLDER:
				return new FetchTemplateStrategyLocalFolder()
			case FetchTemplateStrategyType.WEB_ZIP:
				return new FetchTemplateStrategyWebZip()
			case FetchTemplateStrategyType.GIT:
				return new FetchTemplateStrategyGit()
			default:
				throw typeUtil.exhaustiveError(`Unknown fetch template type [${String(type)}]`, type)
		}
	},
}
