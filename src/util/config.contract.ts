import * as config from './config'
import { contractFactory } from '@beecode/msh-test-contractor/lib/contract/contractor-factory'
import { ContractMockRevertFns } from '@beecode/msh-test-contractor/lib/types'

const dummyConfig = { template: { projectName: 'test-project' }, gitZipUrl: 'https://test.local' }

export default contractFactory(
  {
    module: config,
    subjectName: 'config',
    mock: {
      jest: (): ContractMockRevertFns => {
        config.config._conf = dummyConfig
        return []
      },
    },
  },
  {
    get: {
      terms: [
        {
          params: [],
          result: dummyConfig,
        },
      ],
    },
  }
)
