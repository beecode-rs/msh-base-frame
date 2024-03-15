import constantContract from './constant.contract'
// import validationUtilContract from './validation-util.contract'
import { mocker } from '@beecode/msh-test-contractor'
// import { MockerJestObjectResult } from '@beecode/msh-test-contractor/mocker/mocker-jest-object-strategy'
// import { ContractMockRevertFn } from '@beecode/msh-test-contractor/types'
import { jest } from '@jest/globals'
import { promises as fs } from 'fs'

import { config, configSetupSingleton } from '#src/util/config'

// get node js working directory
const cwd = process.cwd()

describe('config', () => {
	describe('_init', () => {
		let spy_constantContract: jest.SpiedFunction<any>
		// let constantMockRestore: ContractMockRevertFn
		// let spy_validationUtilContract: MockerJestObjectResult
		// let validationUtilMockRestore: ContractMockRevertFn

		let spy_fsStat: jest.SpiedFunction<any>
		let spy_fsReadFile: jest.SpiedFunction<any>

		beforeEach(() => {
			configSetupSingleton()['_configuration'] = undefined
			const constantMocker = mocker.contract(constantContract)
			spy_constantContract = constantMocker.spy as any
			// constantMockRestore = constantMocker.mockRestore
			// const validationUtilMocker = mocker.contract<MockerJestObjectResult>(validationUtilContract)
			// spy_validationUtilContract = validationUtilMocker.spy
			// validationUtilMockRestore = validationUtilMocker.mockRestore
			spy_fsStat = jest.spyOn(fs, 'stat')
			spy_fsReadFile = jest.spyOn(fs, 'readFile')
		})

		afterEach(() => {
			// configMockRestore()
			// constantMockRestore()
			// validationUtilMockRestore()
			jest.restoreAllMocks()
			jest.resetAllMocks()
		})

		it('should fail if config file does not exist', async () => {
			spy_fsStat.mockResolvedValue(false)

			await expect(configSetupSingleton().initialize()).rejects.toThrow(`Config file missing [${cwd}/.base-frame]`)
			expect(spy_constantContract).toHaveBeenCalledTimes(1)
			expect(spy_fsReadFile).not.toHaveBeenCalled()
			// expect(spy_validationUtilContract.validate).not.toHaveBeenCalled()
		})

		it('should successfully init config', async () => {
			const dummyConfig = {
				gitZipUrl: 'https://test.local',
				tempFolderPath: `${cwd}/.base-frame-tmp`,
				template: {
					projectName: 'test-project',
				},
				templateZipName: 'template.zip',
			}

			spy_fsStat.mockResolvedValue(true)
			spy_fsReadFile.mockResolvedValue(JSON.stringify(dummyConfig))

			await configSetupSingleton().initialize()
			expect(spy_constantContract).toHaveBeenCalledTimes(1)
			expect(spy_fsReadFile).toHaveBeenCalledTimes(2)
			expect(spy_fsReadFile).toHaveBeenCalledWith(`${cwd}/.base-frame`, 'utf8')
			// expect(spy_validationUtilContract.validate).toHaveBeenCalledTimes(1)

			expect(config()).toEqual(dummyConfig)
		})
	})
})
