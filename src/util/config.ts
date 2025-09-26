import { singletonPattern } from '@beecode/msh-util/singleton/pattern'
import { promises as fs } from 'fs'
import os from 'os'
import path from 'path'

import { zEnumFetchTemplateStrategyType } from '#src/business/service/fetch-template/service'
import { z } from '#src/lib/zod-wrapper'
import { constant } from '#src/util/constant'
import { logger } from '#src/util/logger'
import { validationUtil } from '#src/util/validation-util'

export const userConfigurationTypeSchema = z
	.object({
		githubPersonAccessToken: z.string().optional(),
	})
	.optional()

export type UserConfigurationType = z.infer<typeof userConfigurationTypeSchema>

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const configurationTypeSchemaFactory = () =>
	z.object({
		authorization: userConfigurationTypeSchema,
		localTemplateFolder: z.string().optional().default(path.resolve(process.cwd(), './.base-frame-tmp/')),
		template: z.object({
			fetchStrategy: zEnumFetchTemplateStrategyType,
			location: z.string(),
			variables: z.object({ projectName: z.string() }).loose(),
		}),
		tmpFolderPath: z.string(),
	})

type ConfigurationType = z.infer<ReturnType<typeof configurationTypeSchemaFactory>>

export class ConfigSetup {
	protected _configuration?: ConfigurationType = undefined

	get configuration(): ConfigurationType | undefined {
		return this._configuration
	}

	protected async _getUserConfigIfExists(): Promise<UserConfigurationType> {
		try {
			const userConfigFileLocation = path.join(os.homedir(), '.base-frame.user.json')
			const userConfigContent = await fs.readFile(userConfigFileLocation, 'utf8')

			return validationUtil.parse(userConfigContent, userConfigurationTypeSchema)
		} catch (error: unknown) {
			if (error instanceof Error) {
				logger().warn('Error reading user config, continuing without it', error.message)
			} else {
				logger().warn('Unknown error reading user config, continuing without it', String(error))
			}

			return {}
		}
	}

	async initialize(): Promise<void> {
		if (this._configuration !== undefined) {
			throw Error('Config already initialized')
		}
		const { configFilePath } = constant()

		// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
		if (!(await fs.stat(configFilePath))) {
			throw Error(`Config file missing [${String(configFilePath)}]`)
		}

		const userJsonContent = await this._getUserConfigIfExists()
		const jsonContent = JSON.parse(await fs.readFile(configFilePath, 'utf8'))
		logger().debug('jsonContent', { jsonContent, userJsonContent })
		console.log('json content', { jsonContent, userJsonContent }) // eslint-disable-line no-console

		this._configuration = validationUtil.parse(
			{
				...jsonContent,
				authorisation: { ...userJsonContent, ...jsonContent.authorisation },
			},
			configurationTypeSchemaFactory()
		)
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
