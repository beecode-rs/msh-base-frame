import { arrayUtil } from '@beecode/msh-util/array-util'

import { FileAdapter } from '#src/lib/file-adapter'
import { logger } from '#src/util/logger'

export const fileService = {
	readIgnoreFileFolderList: async (params: { folderPath: string }): Promise<string[]> => {
		const { folderPath } = params

		try {
			const body = await new FileAdapter().readFile({ filePath: `${folderPath}/.bfignore` })

			return body
				.split('\n')
				.map((stringLine) => stringLine.trim())
				.filter(arrayUtil.notFalsy)
		} catch (error) {
			logger().error('fileService.readIgnoreFileFolderList', { error })

			return []
		}
	},
}
