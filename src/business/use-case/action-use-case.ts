import { fetchTemplateService } from '#src/business/service/fetch-template/service'
import { tmpFolderService } from '#src/business/service/tmp-folder-service'
import { gitUseCase } from '#src/business/use-case/git-use-case'
import { config } from '#src/util/config'
import { logger } from '#src/util/logger'

export const actionUseCase = {
	clone: async (): Promise<void> => {
		await tmpFolderService.cleanAll()

		await fetchTemplateService.getStrategy(config().template.fetchStrategy).fetch()

		// await gitUseCase.cleanAndGetNewCopyOfTemplateRepo()
		// await gitUseCase.extractAndRemoveZipFileAndPrepareTempFolder()
		await gitUseCase.renderAllTemplateWithValuesFromConfig()
		await gitUseCase.copyFilesFromBaseIfTheyDontExist().catch((err: unknown) => {
			if (err instanceof Error) {
				logger().error('Some file already exist, you need to compare folder manually', { errorMessage: err.message })

				return
			}
			logger().error('Some file already exist, you need to compare folder manually', { err })
		})
	},
}
