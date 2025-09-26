import { singletonPattern } from '@beecode/msh-util/singleton/pattern'
import path from 'path'

export const constant = singletonPattern(() => {
	return {
		configFilePath: path.resolve(process.cwd(), './.base-frame'),
		templateTmpZipName: 'template.zip',
	} as const
})
