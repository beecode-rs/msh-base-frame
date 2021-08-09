import { promises as fs } from 'fs'
import Joi from 'joi'
import { constant } from 'src/util/constant'
import { logger } from 'src/util/logger'
import { validationUtil } from 'src/util/validation-util'

export type ConfigurationTemplateType = {
  projectName: string
}

export type ConfigurationType = {
  template: ConfigurationTemplateType
  gitZipUrl: string
}

export const configSchema = Joi.object<ConfigurationType>()
  .keys({
    template: Joi.object<ConfigurationTemplateType>().keys({ projectName: Joi.string().required() }).unknown(),
    gitZipUrl: Joi.string().required(),
  })
  .required()

export const config = {
  _init: async (): Promise<void> => {
    if (!(await fs.stat(constant.configFilePath))) throw Error(`Config file missing [${constant.configFilePath}]`)
    const jsonContent = JSON.parse(await fs.readFile(constant.configFilePath, 'utf8'))
    logger.debug('jsonContent', jsonContent)
    config._conf = validationUtil.validate(jsonContent, configSchema)
  },
  _conf: undefined as ConfigurationType | undefined,
  get: (): ConfigurationType => {
    if (!config._conf) throw Error('Config not found')
    return Object.freeze(config._conf)
  },
}
