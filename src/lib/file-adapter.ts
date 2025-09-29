import { arrayUtil } from '@beecode/msh-util/array-util'
import { promises as fs } from 'fs'
import { copy } from 'fs-extra'
import { glob } from 'glob'

import { logger } from '#src/util/logger'

export class FileAdapter {
	async copy(params: { sourceFilePath: string; destinationFilePath: string; options?: { ignore: string[] } }): Promise<void> {
		const { sourceFilePath, destinationFilePath, options = { ignore: [] } } = params

		const copyContentList = await glob('**/*', {
			cwd: sourceFilePath,
			dot: true,
			ignore: [...options.ignore, '.bfignore'],
			nodir: true,
		})

		await Promise.all(
			copyContentList.map((file: string) => {
				return copy(`${sourceFilePath}/${file}`, `${destinationFilePath}/${file}`)
			})
		)
	}

	async copyFilesIfNotExists(params: { sourceFilePath: string; destinationFilePath: string }): Promise<void> {
		const { sourceFilePath, destinationFilePath } = params

		await copy(sourceFilePath, destinationFilePath, { overwrite: false })
	}

	async filterFiles(params: { fileFolderPathList: string[] }): Promise<string[]> {
		const { fileFolderPathList } = params

		const filtered = await Promise.all(
			fileFolderPathList.map(async (fileFolderPath) => {
				if (await this.isFile({ filePath: fileFolderPath })) {
					return fileFolderPath
				}

				return undefined
			})
		)

		return filtered.filter(arrayUtil.notEmpty)
	}

	async getFolderContent(params: { folderPath: string }): Promise<string[]> {
		const { folderPath } = params

		return fs.readdir(folderPath)
	}

	async getRecurringFolderContent(params: { folderPath: string }): Promise<string[]> {
		const { folderPath } = params

		if (!(await this.isDirectory({ folderPath }))) {
			return []
		}
		const folderContent = (await this.getFolderContent({ folderPath })).map((folderContentPath) => {
			return `${folderPath}/${folderContentPath}`
		})
		const subFolderContents = await Promise.all(
			folderContent.map((folderContentPath) => {
				return this.getRecurringFolderContent({ folderPath: folderContentPath })
			})
		)

		return [...folderContent, ...subFolderContents.flat()]
	}

	async isDirectory(params: { folderPath: string }): Promise<boolean> {
		const { folderPath } = params

		try {
			const stat = await fs.stat(folderPath)

			return stat.isDirectory()
		} catch (error) {
			logger().error('FileClient.isDirectory', { error })

			return false
		}
	}

	async isFile(params: { filePath: string }): Promise<boolean> {
		const { filePath } = params

		try {
			const stat = await fs.stat(filePath)

			return stat.isFile()
		} catch (error) {
			logger().error('FileClient.isFile', { error })

			return false
		}
	}

	async makeFolderIfNotExist(params: { folderPath: string }): Promise<void> {
		const { folderPath } = params

		if (await fs.stat(folderPath).catch(() => false)) {
			return
		}

		return fs.mkdir(folderPath)
	}

	async readFile(params: { filePath: string }): Promise<string> {
		const { filePath } = params

		return fs.readFile(filePath, { encoding: 'utf-8' })
	}

	async removeFile(params: { filePath: string }): Promise<void> {
		const { filePath } = params

		if (!(await fs.stat(filePath).catch(() => false))) {
			return
		}

		return fs.rm(filePath)
	}

	async removeFolder(params: { folderPath: string }): Promise<void> {
		const { folderPath } = params

		if (!(await fs.stat(folderPath).catch(() => false))) {
			return
		}

		return fs.rm(folderPath, { force: true, recursive: true })
	}

	writeToFile(params: { filePath: string; fileContent: string }): Promise<void> {
		const { filePath, fileContent } = params

		return fs.writeFile(filePath, fileContent, 'utf-8')
	}
}
