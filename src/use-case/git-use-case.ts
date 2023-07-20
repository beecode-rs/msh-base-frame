import path from 'path'

import { fileService } from '#/service/file-service.js'
import { GitService } from '#/service/git-service.js'
import { tempFolderService } from '#/service/temp-folder-service.js'
import { templateService } from '#/service/template-service.js'
import { config } from '#/util/config.js'

export const gitUseCase = {
	cleanAndGetNewCopyOfTemplateRepo: async (): Promise<void> => {
		await tempFolderService.cleanAll()
		await new GitService().downloadZipToTempFolder()
	},
	copyFilesFromBaseIfTheyDontExist: async (): Promise<void> => {
		await fileService.copyFilesIfNotExists(config().tempFolderPath, process.cwd())
		await fileService.removeFolder(config().tempFolderPath)
	},
	extractAndRemoveZipFileAndPrepareTempFolder: async (): Promise<void> => {
		const { templateZipName, tempFolderPath } = config()
		await fileService.unzip(path.resolve(tempFolderPath, `./${templateZipName}`), config().tempFolderPath)
		await fileService.removeFile(path.resolve(tempFolderPath, `./${templateZipName}`))
		await tempFolderService.flattenFolderByOneLevelAndRemoveIgnored()
	},
	renderAllTemplateWithValuesFromConfig: async (): Promise<void> => {
		const contentList = await fileService.getRecurringFolderContent(config().tempFolderPath)
		const files = await fileService.filterFiles(contentList)
		await Promise.all(files.map(templateService.renderAndOverrideFile))
	},
}
