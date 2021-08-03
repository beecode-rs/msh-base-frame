import axios from 'axios'
import fs from 'fs'
import { config } from 'src/util/config'
import { constant } from 'src/util/constant'

export const gitService = {
  downloadZipToTempFolder: async (): Promise<void> => {
    const { data: stream } = await axios.get(config.get().gitZipUrl, { responseType: 'stream' })
    stream.pipe(fs.createWriteStream(constant.templateZipPath))
    return new Promise((resolve, reject) => {
      stream.on('end', resolve)
      stream.on('error', reject)
    })
  },

}
