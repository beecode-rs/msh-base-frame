import { fileService } from 'src/service/file-service'
import { gitService } from 'src/service/git-service'
import { tempFolderService } from 'src/service/temp-folder-service'
import { templateService } from 'src/service/template-service'
import { constant } from 'src/util/constant'

export const gitUseCase = {
  cleanAndGetNewCopyOfTemplateRepo: async (): Promise<void> => {
    await tempFolderService.cleanAll()
    await gitService.downloadZipToTempFolder()
  },
  extractAndRemoveZipFileAndPrepareTempFolder: async (): Promise<void> => {
    await fileService.unzip(constant.templateZipPath, constant.tempFolderPath)
    await fileService.removeFile(constant.templateZipPath)
    await tempFolderService.flattenFolderByOneLevelAndRemoveIgnored()
  },
  renderAllTemplateWithValuesFromConfig: async (): Promise<void> => {
    const contentList = await fileService.getRecurringFolderContent(constant.tempFolderPath)
    const files = await fileService.filterFiles(contentList)
    await Promise.all(files.map(templateService.renderAndOverrideFile))
  },
  copyFilesFromBaseIfTheyDontExist: async (): Promise<void> => {
    await fileService.copyFilesIfNotExists(constant.tempFolderPath, process.cwd())
    await fileService.removeFolder(constant.tempFolderPath)
  },
}
