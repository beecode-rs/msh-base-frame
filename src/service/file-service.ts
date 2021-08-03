import extractZip from 'extract-zip'
import { promises as fs } from 'fs'
import glob from 'glob'
import copy from 'recursive-copy'
import { logger } from 'src/util/logger'

export const fileService = {
  makeFolderIfNotExist: async (folderPath: string): Promise<void> => {
    if (await fs.stat(folderPath).catch(() => false)) return
    await fs.mkdir(folderPath)
  },
  removeFile: async (filePath: string): Promise<void> => {
    if (!(await fs.stat(filePath).catch(() => false))) return
    await fs.rm(filePath)
  },
  removeFolder: async (folderPath: string): Promise<void> => {
    if (!(await fs.stat(folderPath).catch(() => false))) return
    await fs.rmdir(folderPath, { recursive: true })
  },
  unzip: async (src: string, dest: string): Promise<void> => {
    await extractZip(src, { dir: dest })
  },
  getFolderContent: async (path: string): Promise<string[]> => {
    return fs.readdir(path)
  },
  isDirectory: async (path: string): Promise<boolean> => {
    try {
      const stat = await fs.stat(path)
      return stat.isDirectory()
    } catch (e) {
      logger.error('fileService.isDirectory', { error: e })
      return false
    }
  },
  isFile: async (path: string): Promise<boolean> => {
    try {
      const stat = await fs.stat(path)
      return stat.isFile()
    } catch (e) {
      logger.error('fileService.isFile', { error: e })
      return false
    }
  },
  filterFiles: async (fileFolderList: string[]): Promise<string[]> => {
    const filtered = await Promise.all(fileFolderList.map(async (f) => ((await fileService.isFile(f)) ? f : undefined)))
    return filtered.filter(Boolean) as string[]
  },
  copy: async (src: string, dest: string, options: { ignore: string[] } = { ignore: [] }): Promise<void> => {
    // TODO this is to complex
    const copyContentList = await new Promise<string[]>((resolve, reject) => {
      glob('**/*', { cwd: src, dot: true, nodir: true, ignore: [...options.ignore, '.bfignore'] }, (err, files) => {
        if (err) return reject(err)
        return resolve(files)
      })
    })
    await Promise.all(copyContentList.map((file) => copy(`${src}/${file}`, `${dest}/${file}`)))
  },
  readFile: async (filePath: string): Promise<string> => {
    return fs.readFile(filePath, { encoding: 'utf-8' })
  },
  getRecurringFolderContent: async (path: string): Promise<string[]> => {
    if (!(await fileService.isDirectory(path))) return []
    const folderContent = (await fileService.getFolderContent(path)).map((f) => `${path}/${f}`)
    const subFolderContents = await Promise.all(folderContent.map(fileService.getRecurringFolderContent))
    return [...folderContent, ...subFolderContents.flat()]
  },
  readIgnoreList: async (path: string): Promise<string[]> => {
    try {
      const body = await fileService.readFile(`${path}/.bfignore`)
      return body
        .split('\n')
        .map((v) => v.trim())
        .filter(Boolean)
    } catch (e) {
      logger.error('fileService.readIgnoreList', { error: e })
      return []
    }
  },
  writeToFile: async (filePath: string, data: string): Promise<void> => {
    await fs.writeFile(filePath, data, 'utf-8')
  },
  copyFilesIfNotExists: async (src: string, dest: string): Promise<void> => {
    await copy(src, dest, { overwrite: false, dot: true })
  },
}
