import { fetchTemplateService } from '#src/business/service/fetch-template/service'
import { TemplateFolderService } from '#src/business/service/template-folder-service'
import { TemplatingService } from '#src/business/service/templating-service'
import { FileAdapter } from '#src/lib/file-adapter'
import { config } from '#src/util/config'
import { logger } from '#src/util/logger'

export const actionUseCase = {
	clone: async (): Promise<void> => {
		await new TemplateFolderService().cleanAll()
		const {
			template: { subFolderLocation, localDestinationFolder, fetchStrategy },
		} = config()

		await fetchTemplateService.getStrategy(fetchStrategy).fetch()

		if (subFolderLocation) {
			await new TemplateFolderService().promoteSubfolderToRoot({ rootFolderPath: localDestinationFolder, subFolderLocation })
		}

		const fileAdapter = new FileAdapter()

		const contentList = await fileAdapter.getRecurringFolderContent({ folderPath: localDestinationFolder })
		const files = await fileAdapter.filterFiles({ fileFolderPathList: contentList })
		const templateService = new TemplatingService()
		await Promise.all(
			files.map((filePath) => {
				return templateService.replaceFileWithRenderedTemplate({ filePath })
			})
		)

		try {
			// TODO create a strategy for override
			if (!config().template.forceOverride) {
				await fileAdapter.copyAndOverride({ destinationFilePath: process.cwd(), sourceFilePath: localDestinationFolder })
			} else {
				await fileAdapter.copyFilesIfNotExists({ destinationFilePath: process.cwd(), sourceFilePath: localDestinationFolder })
			}
			await fileAdapter.removeFolder({ folderPath: localDestinationFolder })
		} catch (error: unknown) {
			const errorMessageOrObject = (error as { message?: string }).message ?? error

			logger().error('Some file already exist, you need to compare folder manually', errorMessageOrObject)
		}
	},
}
