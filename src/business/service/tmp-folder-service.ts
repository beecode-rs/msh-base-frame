import path from 'path'

import { fileService } from '#src/business/service/file-service'
import { config } from '#src/util/config'

export const tmpFolderService = {
	cleanAll: async (): Promise<void> => {
		// TODO: should warn if tmp folder is not empty
		await fileService.removeFolder(config().tmpFolderPath)
		await tmpFolderService.makeTempFolderIfNotExist()
	},
	flattenFolderByOneLevelAndRemoveIgnored: async (): Promise<void> => {
		const contentList = await fileService.getFolderContent(config().tmpFolderPath)
		await Promise.all(
			contentList.map(async (folder) => {
				const folderPath = path.resolve(config().tmpFolderPath, folder)
				const ignoreFiles = await fileService.readIgnoreList(folderPath)
				await fileService.copy(folderPath, config().tmpFolderPath, { ignore: ignoreFiles })
				await fileService.removeFolder(path.resolve(config().tmpFolderPath, folder))
			})
		)
	},
	makeTempFolderIfNotExist: (): Promise<void> => {
		return fileService.makeFolderIfNotExist(config().tmpFolderPath)
	},

	readIgnoreList: async (): Promise<string[]> => {
		return fileService.readIgnoreList(config().tmpFolderPath)
	},
}
