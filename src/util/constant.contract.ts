import * as constant from './constant.js'
import { contractFactory } from '@beecode/msh-test-contractor/contract/contractor-factory.js'
import { SpecialFnName } from '@beecode/msh-test-contractor/enum/special-fn-name.js'
import { ContractMockRevertFns } from '@beecode/msh-test-contractor/types/index.js'

export default contractFactory(
	{
		mock: (): ContractMockRevertFns => {
			const spyCwd: jest.SpyInstance = jest.spyOn(process, 'cwd')
			spyCwd.mockReturnValue('/home/dummy')

			return [(): void => spyCwd.mockRestore()]
		},
		module: constant,
		subjectName: 'constant',
	},
	{
		[SpecialFnName.SELF]: {
			terms: [
				{
					params: [],
					result: {
						configFilePath: '/home/dummy/.base-frame',
					},
				},
			],
		},
	}
)
