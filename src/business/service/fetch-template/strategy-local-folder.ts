import { type FetchTemplateStrategy } from '#src/business/service/fetch-template/strategy'
import { fileService } from '#src/business/service/file-service'
import { config } from '#src/util/config'

export class FetchTemplateStrategyLocalFolder implements FetchTemplateStrategy {
	async fetch(): Promise<void> {
		const {
			tmpFolderPath,
			template: { location },
		} = config()

		await fileService.copy(location, tmpFolderPath)
	}
}
