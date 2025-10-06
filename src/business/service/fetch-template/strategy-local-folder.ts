import { type FetchTemplateStrategy } from '#src/business/service/fetch-template/strategy'
import { fileService } from '#src/business/service/file-service'
import { FileAdapter } from '#src/lib/file-adapter'
import { config } from '#src/util/config'

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
