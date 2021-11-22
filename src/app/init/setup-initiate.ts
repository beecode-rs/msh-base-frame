import { LifeCycle } from '@beecode/msh-node-app'
import { config } from 'src/util/config'

export class SetupInitiate extends LifeCycle {
  constructor() {
    super({ name: 'Setup' })
  }

  protected async _createFn(): Promise<void> {
    await config._init()
  }

  protected async _destroyFn(): Promise<void> {
    return Promise.resolve(undefined)
  }
}
