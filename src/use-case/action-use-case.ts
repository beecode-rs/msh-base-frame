import { gitUseCase } from '#/use-case/git-use-case.js'
import { logger } from '#/util/logger.js'

export const actionUseCase = {
	clone: async (): Promise<void> => {
		await gitUseCase.cleanAndGetNewCopyOfTemplateRepo()
		await gitUseCase.extractAndRemoveZipFileAndPrepareTempFolder()
		await gitUseCase.renderAllTemplateWithValuesFromConfig()
		await gitUseCase
			.copyFilesFromBaseIfTheyDontExist()
			.catch((err) => logger().error('Some file already exist, you need to compare folder manually', { err }))
	},
}
