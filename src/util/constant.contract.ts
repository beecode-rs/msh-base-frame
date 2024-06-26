import { contractFactory } from '@beecode/msh-test-contractor/contract/contractor-factory'
import { SpecialFnName } from '@beecode/msh-test-contractor/enum/special-fn-name'
import { ContractMockRevertFns } from '@beecode/msh-test-contractor/types'
import { vi } from 'vitest'

import * as constant from '#src/util/constant'

export default contractFactory(
	{
		mock: (): ContractMockRevertFns => {
			const spyCwd: vi.SpiedFunction<any> = vi.spyOn(process, 'cwd')
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
