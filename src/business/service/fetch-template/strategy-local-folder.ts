import { type FetchTemplateStrategy } from '#src/business/service/fetch-template/strategy'
import { FileAdapter } from '#src/lib/file-adapter'
import { config } from '#src/util/config'

export class FetchTemplateStrategyLocalFolder implements FetchTemplateStrategy {
	async fetch(): Promise<void> {
		const {
			template: { location: templateLocation, localDestinationFolder },
		} = config()

		await new FileAdapter().copy({ destinationFilePath: localDestinationFolder, sourceFilePath: templateLocation })
	}
}
