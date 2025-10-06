// import validationUtilContract from './validation-util.contract'
import { mocker } from '@beecode/msh-test-contractor'
import { promises as fs } from 'fs'
import { type Mock, afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
// import { MockerJestObjectResult } from '@beecode/msh-test-contractor/mocker/mocker-jest-object-strategy'
// import { ContractMockRevertFn } from '@beecode/msh-test-contractor/types'

import { config, configSetupSingleton } from '#src/util/config'
// import { constant } from '#src/util/constant'
import constantContract from '#src/util/constant.contract'

// get node js working directory
const cwd = process.cwd()

describe('config', () => {
	describe('_init', () => {
		let spy_constantContract: Mock
		// let constantMockRestore: ContractMockRevertFn
		// let spy_validationUtilContract: MockerJestObjectResult
		// let validationUtilMockRestore: ContractMockRevertFn

		let spy_fsStat: Mock
		let spy_fsReadFile: Mock

		beforeEach(() => {
			configSetupSingleton()['_configuration'] = undefined
			const constantMocker = mocker.contract(constantContract)
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			spy_constantContract = constantMocker.spy as any
			// constantMockRestore = constantMocker.mockRestore
			// const validationUtilMocker = mocker.contract<MockerJestObjectResult>(validationUtilContract)
			// spy_validationUtilContract = validationUtilMocker.spy
			// validationUtilMockRestore = validationUtilMocker.mockRestore
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			spy_fsStat = vi.spyOn(fs, 'stat') as any
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			spy_fsReadFile = vi.spyOn(fs, 'readFile') as any
		})

		afterEach(() => {
			// configMockRestore()
			// constantMockRestore()
			// validationUtilMockRestore()
			vi.restoreAllMocks()
		})

		it('should fail if config file does not exist', async () => {
			spy_fsStat.mockResolvedValue(false)

			await expect(configSetupSingleton().initialize()).rejects.toThrow(`Config file missing [${cwd}/.base-frame.json]`)
			expect(spy_constantContract).toHaveBeenCalledTimes(1)
			expect(spy_fsReadFile).not.toHaveBeenCalled()
			// expect(spy_validationUtilContract.validate).not.toHaveBeenCalled()
		})

		it('should successfully init config', async () => {
			const dummyConfig = {
				template: {
					fetchStrategy: 'GIT',
					forceOverride: false,
					localDestinationFolder: `${cwd}/.base-frame-template`,
					location: 'https://test.local',
					subFolderLocation: './template/msh-lib',
				},
				tmpFolderPath: '/tmp',
				variables: {
					projectName: 'test-project',
				},
			}

			spy_fsStat.mockResolvedValue(true)
			spy_fsReadFile.mockResolvedValue(JSON.stringify(dummyConfig))

			await configSetupSingleton().initialize()
			expect(spy_constantContract).toHaveBeenCalledTimes(1)
			expect(spy_fsReadFile).toHaveBeenCalledTimes(2)
			expect(spy_fsReadFile).toHaveBeenCalledWith(`${cwd}/.base-frame.json`, 'utf8')
			// expect(spy_validationUtilContract.validate).toHaveBeenCalledTimes(1)

			expect(config()).toEqual(dummyConfig)
		})
	})
})
