import path from 'path'
import { fileService } from 'src/service/file-service'
import { constant } from 'src/util/constant'

export const tempFolderService = {
	cleanAll: async (): Promise<void> => {
		await fileService.removeFolder(constant().tempFolderPath)
		await tempFolderService.makeTempFolderIfNotExist()
	},
	flattenFolderByOneLevelAndRemoveIgnored: async (): Promise<void> => {
		const contentList = await fileService.getFolderContent(constant().tempFolderPath)
		await Promise.all(
			contentList.map(async (folder) => {
				const folderPath = path.resolve(constant().tempFolderPath, folder)
				const ignoreFiles = await fileService.readIgnoreList(folderPath)
				await fileService.copy(folderPath, constant().tempFolderPath, { ignore: ignoreFiles })
				await fileService.removeFolder(path.resolve(constant().tempFolderPath, folder))
			})
		)
	},
	makeTempFolderIfNotExist: (): Promise<void> => {
		return fileService.makeFolderIfNotExist(constant().tempFolderPath)
	},
	readIgnoreList: async (): Promise<string[]> => {
		return fileService.readIgnoreList(constant().tempFolderPath)
	},
}
