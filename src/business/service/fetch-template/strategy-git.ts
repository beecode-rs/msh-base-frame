import { type FetchTemplateStrategy } from '#src/business/service/fetch-template/strategy'
// import { TemplateFolderService } from '#src/business/service/template-folder-service'
import { gitAdapter } from '#src/lib/git-adapter'
import { config } from '#src/util/config'

export class FetchTemplateStrategyGit implements FetchTemplateStrategy {
	async fetch(): Promise<void> {
		const {
			template: { location: templateLocation, localDestinationFolder },
		} = config()

		await gitAdapter.clone({ destinationPath: localDestinationFolder, repoUrl: templateLocation })
		// await new TemplateFolderService().flattenFolderByOneLevelAndRemoveIgnored()
	}
}
