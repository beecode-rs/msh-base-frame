import axios from 'axios'
import fs from 'fs'
import path from 'path'

import { config } from '#src/util/config'
import { constant } from '#src/util/constant'

export class GitService {
	protected _getAxiosHeader(): Record<string, string> | undefined {
		const { authorization: { githubPersonAccessToken } = {} } = config()
		if (!githubPersonAccessToken) {
			return undefined
		}

		return { Authorization: `token ${String(githubPersonAccessToken)}` }
	}

	async downloadZipToTempFolder(): Promise<void> {
		const {
			template: { location: templateLocation },
			tmpFolderPath,
		} = config()
		const { templateTmpZipName } = constant()
		const axiosHeader = this._getAxiosHeader()
		const { data: stream } = await axios.get(templateLocation, { headers: axiosHeader, responseType: 'stream' })
		stream.pipe(fs.createWriteStream(path.resolve(tmpFolderPath, `./${String(templateTmpZipName)}`)))

		return new Promise((resolve, reject) => {
			stream.on('end', resolve)
			stream.on('error', reject)
		})
	}
}
