import axios, { type AxiosHeaders, type RawAxiosRequestHeaders } from 'axios'
import fs from 'fs'

export const webAdapter = {
	async downloadFile(params: {
		fileUrl: string
		fileDestinationPath: string
		headers?: RawAxiosRequestHeaders | AxiosHeaders
	}): Promise<void> {
		const { fileUrl, fileDestinationPath, headers } = params

		const response = await axios.get(fileUrl, { headers, responseType: 'stream' })
		const writer = fs.createWriteStream(fileDestinationPath)
		response.data.pipe(writer)

		await new Promise((resolve, reject) => {
			writer.on('finish', () => {
				resolve(undefined)
			})
			writer.on('error', reject)
		})
	},
}
