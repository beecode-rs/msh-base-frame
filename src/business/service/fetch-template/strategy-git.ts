import { type FetchTemplateStrategy } from '#src/business/service/fetch-template/strategy.js'
// import { TemplateFolderService } from '#src/business/service/template-folder-service.js'
import { gitAdapter } from '#src/lib/git-adapter.js'
import { config } from '#src/util/config.js'

export class FetchTemplateStrategyGit implements FetchTemplateStrategy {
	async fetch(): Promise<void> {
		const {
			template: { location: templateLocation, localDestinationFolder },
		} = config()

		await gitAdapter.clone({ destinationPath: localDestinationFolder, repoUrl: templateLocation })
		// await new TemplateFolderService().flattenFolderByOneLevelAndRemoveIgnored()
	}
}
