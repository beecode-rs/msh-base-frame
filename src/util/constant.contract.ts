import { contractFactory } from '@beecode/msh-test-contractor/contract/contractor-factory'
import { SpecialFnName } from '@beecode/msh-test-contractor/enum/special-fn-name'
import { type ContractMockRevertFns } from '@beecode/msh-test-contractor/types'
import { vi } from 'vitest'

import * as constant from '#src/util/constant'

export default contractFactory(
	{
		mock: (): ContractMockRevertFns => {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
