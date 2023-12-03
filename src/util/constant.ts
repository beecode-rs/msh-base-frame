import { singletonPattern } from '@beecode/msh-util/singleton/pattern'
import path from 'path'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const constant = singletonPattern(() => {
	return {
		configFilePath: path.resolve(process.cwd(), './.base-frame'),
	} as const
})
