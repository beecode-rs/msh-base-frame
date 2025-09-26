import path from 'path'

import { fileService } from '#src/business/service/file-service'
import { GitService } from '#src/business/service/git-service'
import { templateService } from '#src/business/service/template-service'
import { tmpFolderService } from '#src/business/service/tmp-folder-service'
import { config } from '#src/util/config'
import { constant } from '#src/util/constant'

export const gitUseCase = {
	cleanAndGetNewCopyOfTemplateRepo: async (): Promise<void> => {
		// await tmpFolderService.cleanAll()
		await new GitService().downloadZipToTempFolder()
	},
	copyFilesFromBaseIfTheyDontExist: async (): Promise<void> => {
		await fileService.copyFilesIfNotExists(config().tmpFolderPath, process.cwd())
		await fileService.removeFolder(config().tmpFolderPath)
	},
	extractAndRemoveZipFileAndPrepareTempFolder: async (): Promise<void> => {
		const { tmpFolderPath } = config()
		const { templateTmpZipName } = constant()

		await fileService.unzip(path.resolve(tmpFolderPath, `./${String(templateTmpZipName)}`), config().tmpFolderPath)
		await fileService.removeFile(path.resolve(tmpFolderPath, `./${String(templateTmpZipName)}`))
		await tmpFolderService.flattenFolderByOneLevelAndRemoveIgnored()
	},
	renderAllTemplateWithValuesFromConfig: async (): Promise<void> => {
		const contentList = await fileService.getRecurringFolderContent(config().tmpFolderPath)
		const files = await fileService.filterFiles(contentList)
		await Promise.all(files.map(templateService.renderAndOverrideFile))
	},
}
