import { promises as fs } from 'fs'
import { type Mock, afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { config, configSetupSingleton } from '#src/util/config.js'

describe('config', () => {
	describe('_init', () => {
		let spy_constantContract: Mock
		let spy_fsStat: Mock
		let spy_fsReadFile: Mock

		beforeEach(async () => {
			configSetupSingleton()['_configuration'] = undefined
			const constantModule = await import('#src/util/constant.js')
			spy_constantContract = vi.spyOn(constantModule, 'constant').mockReturnValue({
				configFilePath: '/home/dummy/.base-frame.json',
				templateTmpZipName: 'template.zip',
			})
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			spy_fsStat = vi.spyOn(fs, 'stat') as any
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			spy_fsReadFile = vi.spyOn(fs, 'readFile') as any
		})

		afterEach(() => {
			vi.restoreAllMocks()
		})

		it('should fail if config file does not exist', async () => {
			spy_fsStat.mockResolvedValue(false)

			await expect(configSetupSingleton().initialize()).rejects.toThrow('Config file missing [/home/dummy/.base-frame.json]')
			expect(spy_constantContract).toHaveBeenCalledTimes(1)
			expect(spy_fsReadFile).not.toHaveBeenCalled()
		})

		it('should successfully init config', async () => {
			const dummyConfig = {
				template: {
					fetchStrategy: 'GIT',
					forceOverride: false,
					localDestinationFolder: '/home/dummy/.base-frame-template',
					location: 'https://test.local',
					subFolderLocation: './template/msh-lib',
				},
				tmpFolderPath: '/tmp',
				variables: {
					projectName: 'test-project',
				},
			}

			spy_fsStat.mockResolvedValue(true)
			spy_fsReadFile.mockImplementation(async (filePath: string) => {
				if (filePath.includes('.base-frame.user.json')) return '{}'
				return JSON.stringify(dummyConfig)
			})

			await configSetupSingleton().initialize()
			expect(spy_constantContract).toHaveBeenCalledTimes(1)
			expect(spy_fsReadFile).toHaveBeenCalledWith('/home/dummy/.base-frame.json', 'utf8')

			expect(config()).toEqual(dummyConfig)
		})
	})
})
