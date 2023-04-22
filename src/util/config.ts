import { singletonPattern } from '@beecode/msh-util/lib/singleton/pattern'
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
		githubPersonAccessToken: Joi.string().allow(null).empty([null, '']).optional(),
		gitZipUrl: Joi.string().required(),
		localTemplateFolder: Joi.string().allow(null).empty([null, '']).optional(),
		template: Joi.object<ConfigurationTemplateType>().keys({ projectName: Joi.string().required() }).unknown(),
	})
	.required()

export class ConfigSetup {
	protected _configuration?: ConfigurationType = undefined

	get configuration(): ConfigurationType | undefined {
		return this._configuration
	}

	protected async _getUserConfigIfExists(): Promise<any> {
		try {
			const userConfigFileLocation = path.join(os.homedir(), '.base-frame.user.json')
			const userConfigContent = await fs.readFile(userConfigFileLocation, 'utf8')

			return JSON.parse(userConfigContent)
		} catch (_e) {
			return {}
		}
	}

	async initialize(): Promise<void> {
		if (this._configuration !== undefined) {
			throw Error('Config already initialized')
		}
		if (!(await fs.stat(constant().configFilePath))) {
			throw Error(`Config file missing [${constant().configFilePath}]`)
		}
		const jsonContent = JSON.parse(await fs.readFile(constant().configFilePath, 'utf8'))
		const userJsonContent = await this._getUserConfigIfExists()
		logger().debug('jsonContent', { jsonContent, userJsonContent })
		this._configuration = validationUtil.validate({ ...userJsonContent, ...jsonContent }, configSchema)
	}
}

export const configSetupSingleton = singletonPattern(() => {
	return new ConfigSetup()
})

export const config = (): ConfigurationType => {
	const conf = configSetupSingleton().configuration
	if (!conf) {
		throw Error('Config not initialized')
	}

	return conf
}
