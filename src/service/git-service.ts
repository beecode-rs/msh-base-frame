import axios from 'axios'
import fs from 'fs'
import { config } from 'src/util/config'
import { constant } from 'src/util/constant'

export const gitService = {
  downloadZipToTempFolder: async (): Promise<void> => {
    const { githubPersonAccessToken } = config.get()
    const axiosHeader = githubPersonAccessToken ? { Authorization: `token ${githubPersonAccessToken}` } : {}
    const { data: stream } = await axios.get(config.get().gitZipUrl, { responseType: 'stream', headers: axiosHeader })
    stream.pipe(fs.createWriteStream(constant().templateZipPath))
    return new Promise((resolve, reject) => {
      stream.on('end', resolve)
      stream.on('error', reject)
    })
  },
}
