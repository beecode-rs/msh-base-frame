import path from 'path'

// import { fileService } from '#src/business/service/file-service'
import { FileAdapter } from '#src/lib/file-adapter'
import { config } from '#src/util/config'
import { stringUtil } from '#src/util/string-util'

export class TemplateFolderService {
	async cleanAll(): Promise<void> {
		// TODO: should warn if tmp folder is not empty
		await new FileAdapter().removeFolder({ folderPath: config().tmpFolderPath })
		await this.makeTempFolderIfNotExist()
	}

	makeTempFolderIfNotExist(): Promise<void> {
		return new FileAdapter().makeFolderIfNotExist({ folderPath: config().tmpFolderPath })
	}

	async promoteSubfolderToRoot(params: { subFolderLocation: string; rootFolderPath: string }): Promise<void> {
		const { rootFolderPath, subFolderLocation } = params

		const tmpCopyPath = stringUtil.generateRandomTmpFolderName()

		const fileAdapter = new FileAdapter()
		await fileAdapter.copy({ destinationFilePath: tmpCopyPath, sourceFilePath: path.join(rootFolderPath, subFolderLocation) })
		await fileAdapter.removeFolder({ folderPath: rootFolderPath })
		await fileAdapter.copy({ destinationFilePath: rootFolderPath, sourceFilePath: tmpCopyPath })
		await fileAdapter.removeFolder({ folderPath: tmpCopyPath })
	}
}
