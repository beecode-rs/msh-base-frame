import path from 'path'

import { singletonPattern } from '@beecode/msh-util/singleton/pattern'

export const constant = singletonPattern(() => {
	return {
		configFilePath: path.resolve(process.cwd(), './.base-frame.json'),
		templateTmpZipName: 'template.zip',
	} as const
})
