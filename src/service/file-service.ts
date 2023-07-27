import extractZip from 'extract-zip'
import { promises as fs } from 'fs'
import { copy } from 'fs-extra'
import { glob } from 'glob'
import { logger } from 'src/util/logger'

export const fileService = {
	copy: async (src: string, dest: string, options: { ignore: string[] } = { ignore: [] }): Promise<void> => {
		const copyContentList = await glob('**/*', { cwd: src, dot: true, ignore: [...options.ignore, '.bfignore'], nodir: true })
		await Promise.all(
			copyContentList.map((file) => {
				return copy(`${src}/${file}`, `${dest}/${file}`)
			})
		)
	},
	copyFilesIfNotExists: async (src: string, dest: string): Promise<void> => {
		await copy(src, dest, { overwrite: false })
	},
	filterFiles: async (fileFolderList: string[]): Promise<string[]> => {
		const filtered = await Promise.all(
			fileFolderList.map(async (f) => {
				if (await fileService.isFile(f)) {
					return f
				}

				return undefined
			})
		)

		return filtered.filter(Boolean) as string[]
	},
	getFolderContent: async (path: string): Promise<string[]> => {
		return fs.readdir(path)
	},
	getRecurringFolderContent: async (path: string): Promise<string[]> => {
		if (!(await fileService.isDirectory(path))) {
			return []
		}
		const folderContent = (await fileService.getFolderContent(path)).map((f) => `${path}/${f}`)
		const subFolderContents = await Promise.all(folderContent.map(fileService.getRecurringFolderContent))

		return [...folderContent, ...subFolderContents.flat()]
	},
	isDirectory: async (path: string): Promise<boolean> => {
		try {
			const stat = await fs.stat(path)

			return stat.isDirectory()
		} catch (e) {
			logger().error('fileService.isDirectory', { error: e })

			return false
		}
	},
	isFile: async (path: string): Promise<boolean> => {
		try {
			const stat = await fs.stat(path)

			return stat.isFile()
		} catch (e) {
			logger().error('fileService.isFile', { error: e })

			return false
		}
	},
	makeFolderIfNotExist: async (folderPath: string): Promise<void> => {
		if (await fs.stat(folderPath).catch(() => false)) {
			return
		}
		await fs.mkdir(folderPath)
	},
	readFile: async (filePath: string): Promise<string> => {
		return fs.readFile(filePath, { encoding: 'utf-8' })
	},
	readIgnoreList: async (path: string): Promise<string[]> => {
		try {
			const body = await fileService.readFile(`${path}/.bfignore`)

			return body
				.split('\n')
				.map((v) => v.trim())
				.filter(Boolean)
		} catch (e) {
			logger().error('fileService.readIgnoreList', { error: e })

			return []
		}
	},
	removeFile: async (filePath: string): Promise<void> => {
		if (!(await fs.stat(filePath).catch(() => false))) {
			return
		}
		await fs.rm(filePath)
	},
	removeFolder: async (folderPath: string): Promise<void> => {
		if (!(await fs.stat(folderPath).catch(() => false))) {
			return
		}
		// @ts-expect-error
		await fs.rmdir(folderPath, { force: true, recursive: true })
	},
	unzip: async (src: string, dest: string): Promise<void> => {
		await extractZip(src, { dir: dest })
	},
	writeToFile: async (filePath: string, data: string): Promise<void> => {
		await fs.writeFile(filePath, data, 'utf-8')
	},
}
