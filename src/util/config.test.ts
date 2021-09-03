import constantContract from './constant.contract'
// import validationUtilContract from './validation-util.contract'
import { mocker } from '@beecode/msh-test-contractor'
// import { MockerJestObjectResult } from '@beecode/msh-test-contractor/lib/mocker/mocker-jest-object-strategy'
import { ContractMockRevertFn } from '@beecode/msh-test-contractor/lib/types'
import { promises as fs } from 'fs'
import { config } from 'src/util/config'

describe('config', () => {
  describe('_init', () => {
    let spy_constantContract: jest.SpyInstance
    let constantMockRestore: ContractMockRevertFn
    // let spy_validationUtilContract: MockerJestObjectResult
    // let validationUtilMockRestore: ContractMockRevertFn

    let spy_fsStat: jest.SpyInstance
    let spy_fsReadFile: jest.SpyInstance

    beforeEach(() => {
      const constantMocker = mocker.contract(constantContract)
      spy_constantContract = constantMocker.spy
      constantMockRestore = constantMocker.mockRestore
      // const validationUtilMocker = mocker.contract<MockerJestObjectResult>(validationUtilContract)
      // spy_validationUtilContract = validationUtilMocker.spy
      // validationUtilMockRestore = validationUtilMocker.mockRestore
      spy_fsStat = jest.spyOn(fs, 'stat')
      spy_fsReadFile = jest.spyOn(fs, 'readFile')
    })

    afterEach(() => {
      // configMockRestore()
      constantMockRestore()
      // validationUtilMockRestore()
      jest.restoreAllMocks()
    })

    it('should fail if config file does not exist', async () => {
      spy_fsStat.mockResolvedValue(false)

      await expect(config._init()).rejects.toThrow('Config file missing [/home/milos/code/beecode/msh/base-frame/.base-frame]')
      expect(spy_constantContract).toHaveBeenCalledTimes(2)
      expect(spy_fsReadFile).not.toHaveBeenCalled()
      // expect(spy_validationUtilContract.validate).not.toHaveBeenCalled()
    })

    it('should successfully init config', async () => {
      const dummyConfig = { template: { projectName: 'test-project' }, gitZipUrl: 'https://test.local' }

      spy_fsStat.mockResolvedValue(true)
      spy_fsReadFile.mockResolvedValue(JSON.stringify(dummyConfig))

      await config._init()
      expect(spy_constantContract).toHaveBeenCalledTimes(2)
      expect(spy_fsReadFile).toHaveBeenCalledTimes(1)
      expect(spy_fsReadFile).toHaveBeenCalledWith('/home/milos/code/beecode/msh/base-frame/.base-frame', 'utf8')
      // expect(spy_validationUtilContract.validate).toHaveBeenCalledTimes(1)

      expect(config._conf).toEqual(dummyConfig)
    })
  })
})
