import path from 'path'

const tempFolderPath = path.resolve(process.cwd(), './.base-frame-tmp/')
const templateZipName = 'template.zip'

export const constant = {
  configFilePath: path.resolve(process.cwd(), './.base-frame'),
  tempFolderPath,
  templateZipName,
  templateZipPath: path.resolve(tempFolderPath, `./${templateZipName}`),
}
