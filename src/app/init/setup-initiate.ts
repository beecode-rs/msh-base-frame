import { LifeCycle } from '@beecode/msh-app-boot'

import { configSetupSingleton } from '#/util/config'

export class SetupInitiate extends LifeCycle {
	constructor() {
		super({ name: 'Setup' })
	}

	protected async _createFn(): Promise<void> {
		await configSetupSingleton().initialize()
	}

	protected async _destroyFn(): Promise<void> {
		return Promise.resolve(undefined)
	}
}
