import path from 'path'

import { type FetchTemplateStrategy } from '#src/business/service/fetch-template/strategy.js'
import { FileAdapter } from '#src/lib/file-adapter.js'
import { pathAdapter } from '#src/lib/path-adapter.js'
import { webAdapter } from '#src/lib/web-adapter.js'
import { zipAdapter } from '#src/lib/zip-adapter.js'
import { config } from '#src/util/config.js'
import { constant } from '#src/util/constant.js'

export class FetchTemplateStrategyWebZip implements FetchTemplateStrategy {
	async fetch(): Promise<void> {
		const {
			template: { location: templateLocation, localDestinationFolder },
			tmpFolderPath,
		} = config()
		const { templateTmpZipName } = constant()

		await webAdapter.downloadFile({ fileDestinationPath: tmpFolderPath, fileUrl: templateLocation })

		const absoluteSourcePath = pathAdapter.getAbsolutePath({
			path: path.resolve(tmpFolderPath, `./${templateTmpZipName}`),
		})
		const absoluteDestinationPath = pathAdapter.getAbsolutePath({ path: localDestinationFolder })

		await zipAdapter.unzip({ absoluteDestinationPath, absoluteSourcePath })
		await new FileAdapter().removeFile({ filePath: absoluteSourcePath })
	}
}
