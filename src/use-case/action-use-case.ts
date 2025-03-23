import { gitUseCase } from '#src/use-case/git-use-case'
import { logger } from '#src/util/logger'

export const actionUseCase = {
	clone: async (): Promise<void> => {
		await gitUseCase.cleanAndGetNewCopyOfTemplateRepo()
		await gitUseCase.extractAndRemoveZipFileAndPrepareTempFolder()
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
