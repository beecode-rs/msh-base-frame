import path from 'path'

import { fileService } from '#src/service/file-service'
import { GitService } from '#src/service/git-service'
import { tempFolderService } from '#src/service/temp-folder-service'
import { templateService } from '#src/service/template-service'
import { config } from '#src/util/config'

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
		await fileService.unzip(path.resolve(tempFolderPath, `./${String(templateZipName)}`), config().tempFolderPath)
		await fileService.removeFile(path.resolve(tempFolderPath, `./${String(templateZipName)}`))
		await tempFolderService.flattenFolderByOneLevelAndRemoveIgnored()
	},
	renderAllTemplateWithValuesFromConfig: async (): Promise<void> => {
		const contentList = await fileService.getRecurringFolderContent(config().tempFolderPath)
		const files = await fileService.filterFiles(contentList)
		await Promise.all(files.map(templateService.renderAndOverrideFile))
	},
}
