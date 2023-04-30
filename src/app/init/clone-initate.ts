import { LifeCycle } from '@beecode/msh-app-boot'
import { actionUseCase } from 'src/use-case/action-use-case'

export class CloneInitiate extends LifeCycle {
	constructor() {
		super({ name: 'Clone' })
	}

	protected async _createFn(): Promise<void> {
		await actionUseCase.clone()
	}

	protected async _destroyFn(): Promise<void> {
		return Promise.resolve(undefined)
	}
}
