import path from 'path'
import { config } from 'src/util/config'

export type ConstantResult = {
	configFilePath: string
	tempFolderPath: string
	templateZipName: string
	templateZipPath: string
}

export const constant = (): ConstantResult => {
	const tempFolderPath = config().localTemplateFolder ?? path.resolve(process.cwd(), './.base-frame-tmp/')
	const templateZipName = 'template.zip'

	return Object.freeze<ConstantResult>({
		configFilePath: path.resolve(process.cwd(), './.base-frame'),
		tempFolderPath,
		templateZipName,
		templateZipPath: path.resolve(tempFolderPath, `./${templateZipName}`),
	})
}
