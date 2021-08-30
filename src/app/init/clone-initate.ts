import { Initiate } from '@beecode/msh-node-app'
import { actionUseCase } from 'src/use-case/action-use-case'
import { logger } from 'src/util/logger'

export class CloneInitiate extends Initiate {
  constructor() {
    super()
    this.Logger = logger
  }
  public get Name(): string {
    return 'Clone'
  }

  protected async _destroyFn(): Promise<void> {
    return Promise.resolve(undefined)
  }

  protected async _initFn(): Promise<void> {
    await actionUseCase.clone()
  }
}
