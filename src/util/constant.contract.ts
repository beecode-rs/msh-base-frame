import * as constant from './constant'
import { contractFactory } from '@beecode/msh-test-contractor/lib/contract/contractor-factory'

export default contractFactory(constant, 'constant', {
  configFilePath: {
    mock: {
      jest: (jest: any): any => {
        // TODO check the problem with return type
        const spyCwd: jest.SpyInstance = jest.spyOn(process, 'cwd')
        spyCwd.mockReturnValue('/home/dummy')
        return [(): void => spyCwd.mockRestore()]
      },
    },
  },
})
