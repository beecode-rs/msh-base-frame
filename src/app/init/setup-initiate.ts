import { Initiate } from '@beecode/msh-node-app'
import { config } from 'src/util/config'
import { logger } from 'src/util/logger'

export class SetupInitiate extends Initiate {
  constructor() {
    super()
    this.Logger = logger
  }
  public get Name(): string {
    return 'Setup'
  }

  protected _loadConfig() :Promise<void> {
    return config._init()
  }

  protected async _destroyFn(): Promise<void> {
    return Promise.resolve(undefined)
  }

  protected async _initFn(): Promise<void> {
    await this._loadConfig()
  }
}
