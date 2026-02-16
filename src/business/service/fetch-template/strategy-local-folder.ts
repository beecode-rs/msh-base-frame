import { type FetchTemplateStrategy } from '#src/business/service/fetch-template/strategy.js'
import { fileService } from '#src/business/service/file-service.js'
import { FileAdapter } from '#src/lib/file-adapter.js'
import { config } from '#src/util/config.js'

export class FetchTemplateStrategyLocalFolder implements FetchTemplateStrategy {
	async fetch(): Promise<void> {
		const {
			template: { location: templateLocation, localDestinationFolder },
		} = config()

		const ignoreList = await fileService.readIgnoreFileFolderList({ folderPath: templateLocation })

		await new FileAdapter().copy({
			destinationFilePath: localDestinationFolder,
			options: { ignoreList },
			sourceFilePath: templateLocation,
		})
	}
}
