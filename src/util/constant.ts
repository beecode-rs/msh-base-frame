import path from 'path'

export type ConstantResult = {
  configFilePath: string
  tempFolderPath: string
  templateZipName: string
  templateZipPath: string
}

export const constant = (): ConstantResult => {
  const tempFolderPath = path.resolve(process.cwd(), './.base-frame-tmp/')
  const templateZipName = 'template.zip'

  return Object.freeze<ConstantResult>({
    configFilePath: path.resolve(process.cwd(), './.base-frame'),
    tempFolderPath,
    templateZipName,
    templateZipPath: path.resolve(tempFolderPath, `./${templateZipName}`),
  })
}
