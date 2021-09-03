import * as constant from './constant'
import { contractFactory } from '@beecode/msh-test-contractor/lib/contract/contractor-factory'
import { SpecialFnName } from '@beecode/msh-test-contractor/lib/enum/special-fn-name'
import { ContractMockRevertFns } from '@beecode/msh-test-contractor/lib/types'

export default contractFactory(
  {
    module: constant,
    subjectName: 'constant',
    mock: {
      jest: (): ContractMockRevertFns => {
        const spyCwd: jest.SpyInstance = jest.spyOn(process, 'cwd')
        spyCwd.mockReturnValue('/home/dummy')
        return [(): void => spyCwd.mockRestore()]
      },
    },
  },
  {
    [SpecialFnName.SELF]: {
      terms: [
        {
          params: [],
          result: {
            configFilePath: '/home/dummy/.base-frame',
            tempFolderPath: '/home/dummy/.base-frame-tmp',
            templateZipName: 'template.zip',
            templateZipPath: '/home/dummy/.base-frame-tmp/template.zip',
          },
        },
      ],
    },
  }
)
