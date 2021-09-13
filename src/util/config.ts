import { promises as fs } from 'fs'
import Joi from 'joi'
import os from 'os'
import path from 'path'
import { constant } from 'src/util/constant'
import { logger } from 'src/util/logger'
import { validationUtil } from 'src/util/validation-util'

export type ConfigurationTemplateType = {
  projectName: string
}

export type ConfigurationType = {
  template: ConfigurationTemplateType
  gitZipUrl: string
  githubPersonAccessToken?: string
}

export const configSchema = Joi.object<ConfigurationType>()
  .keys({
    template: Joi.object<ConfigurationTemplateType>().keys({ projectName: Joi.string().required() }).unknown(),
    gitZipUrl: Joi.string().required(),
    githubPersonAccessToken: Joi.string().allow(null).empty([null, '']).optional(),
  })
  .required()

export const config = {
  _init: async (): Promise<void> => {
    if (!(await fs.stat(constant.configFilePath))) throw Error(`Config file missing [${constant.configFilePath}]`)
    const jsonContent = JSON.parse(await fs.readFile(constant.configFilePath, 'utf8'))
    const userJsonContent = await config._getUserConfigIfExists()
    logger.debug('jsonContent', { jsonContent, userJsonContent })
    config._conf = validationUtil.validate({ ...userJsonContent, ...jsonContent }, configSchema)
  },
  _getUserConfigIfExists: async (): Promise<any> => {
    try {
      const userConfigFileLocation = path.join(os.homedir(), '.base-frame.user.json')
      const userConfigContent = await fs.readFile(userConfigFileLocation, 'utf8')
      return JSON.parse(userConfigContent)
    } catch (_e) {
      return {}
    }
  },
  _conf: undefined as ConfigurationType | undefined,
  get: (): ConfigurationType => {
    if (!config._conf) throw Error('Config not found')
    return Object.freeze(config._conf)
  },
}
