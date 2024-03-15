import axios from 'axios'
import fs from 'fs'
import path from 'path'

import { config } from '#src/util/config'

export class GitService {
	protected _getAxiosHeader(): Record<string, string> | undefined {
		const { githubPersonAccessToken } = config()
		if (!githubPersonAccessToken) {
			return undefined
		}

		return { Authorization: `token ${githubPersonAccessToken}` }
	}

	async downloadZipToTempFolder(): Promise<void> {
		const { gitZipUrl, tempFolderPath, templateZipName } = config()
		const axiosHeader = this._getAxiosHeader()
		const { data: stream } = await axios.get(gitZipUrl, { headers: axiosHeader, responseType: 'stream' })
		stream.pipe(fs.createWriteStream(path.resolve(tempFolderPath, `./${templateZipName}`)))

		return new Promise((resolve, reject) => {
			stream.on('end', resolve)
			stream.on('error', reject)
		})
	}
}
