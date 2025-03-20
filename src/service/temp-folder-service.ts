import path from 'path'

import { fileService } from '#src/service/file-service'
import { config } from '#src/util/config'

export const tempFolderService = {
	cleanAll: async (): Promise<void> => {
		await fileService.removeFolder(config().tempFolderPath)
		await tempFolderService.makeTempFolderIfNotExist()
	},
	flattenFolderByOneLevelAndRemoveIgnored: async (): Promise<void> => {
		const contentList = await fileService.getFolderContent(config().tempFolderPath)
		await Promise.all(
			contentList.map(async (folder) => {
				const folderPath = path.resolve(config().tempFolderPath, folder)
				const ignoreFiles = await fileService.readIgnoreList(folderPath)
				await fileService.copy(folderPath, config().tempFolderPath, { ignore: ignoreFiles })
				await fileService.removeFolder(path.resolve(config().tempFolderPath, folder))
			})
		)
	},
	makeTempFolderIfNotExist: (): Promise<void> => {
		return fileService.makeFolderIfNotExist(config().tempFolderPath)
	},

	// eslint-disable-next-line @typescript-eslint/require-await
	readIgnoreList: async (): Promise<string[]> => {
		return fileService.readIgnoreList(config().tempFolderPath)
	},
}
