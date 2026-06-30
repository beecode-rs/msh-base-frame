import type { ContractMockFn } from '@beecode/msh-test-contractor/types'
import { vi } from 'vitest'

const ContractMock: ContractMockFn = () => {
	const spy = vi.spyOn(process, 'cwd').mockReturnValue('/home/dummy')

	return [() => { spy.mockRestore() }]
}

export default ContractMock
