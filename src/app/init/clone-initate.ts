import { LifeCycle } from '@beecode/msh-app-boot'

import { actionUseCase } from '#/use-case/action-use-case.js'

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
