import { cacheUtil } from '@beecode/msh-node-util/lib/cache-util'
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
  localTemplateFolder?: string
}

export const configSchema = Joi.object<ConfigurationType>()
  .keys({
    template: Joi.object<ConfigurationTemplateType>().keys({ projectName: Joi.string().required() }).unknown(),
    gitZipUrl: Joi.string().required(),
    githubPersonAccessToken: Joi.string().allow(null).empty([null, '']).optional(),
    localTemplateFolder: Joi.string().allow(null).empty([null, '']).optional(),
  })
  .required()

const _self = {
  _conf: undefined as ConfigurationType | undefined,
  initialize: async (): Promise<void> => {
    if (_self._conf !== undefined) throw Error('Config already initialized')
    if (!(await fs.stat(constant().configFilePath))) throw Error(`Config file missing [${constant().configFilePath}]`)
    const jsonContent = JSON.parse(await fs.readFile(constant().configFilePath, 'utf8'))
    const userJsonContent = await _self._getUserConfigIfExists()
    logger.debug('jsonContent', { jsonContent, userJsonContent })
    _self._conf = validationUtil.validate({ ...userJsonContent, ...jsonContent }, configSchema)
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
}
export const configSetup = _self

export const config = (): ConfigurationType => {
  if (!_self._conf) throw Error('Config not initialized')
  return Object.freeze(_self._conf)
}
