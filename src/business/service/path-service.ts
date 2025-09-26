import { isAbsolute, join } from 'path'

export const pathService = {
	getAbsolutePath: (path: string): string => {
		if (isAbsolute(path)) {
			return path
		}

		const absolutePath = join(process.cwd(), path)

		return absolutePath
	},
}
