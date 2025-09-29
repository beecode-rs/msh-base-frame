import { isAbsolute, join } from 'path'

export const pathAdapter = {
	getAbsolutePath: (params: { path: string }): string => {
		const { path } = params

		if (isAbsolute(path)) {
			return path
		}

		const absolutePath = join(process.cwd(), path)

		return absolutePath
	},
}
