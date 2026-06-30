import { vi } from 'vitest'

import type { ContractMockRevertFns } from '@beecode/msh-test-contractor/business/model/contract-model'

export default function constantMock(): ContractMockRevertFns {
	const spy = vi.spyOn(process, 'cwd').mockReturnValue('/home/dummy')

	return [
		(): void => {
			spy.mockRestore()
		},
	]
}
