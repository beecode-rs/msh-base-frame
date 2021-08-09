import { Initiate } from '@beecode/msh-node-app'
import { gitUseCase } from 'src/use-case/git-use-case'
import { logger } from 'src/util/logger'

export class CloneInitiate extends Initiate {
  constructor() {
    super()
    this.Logger = logger
  }
  public get Name(): string {
    return 'Clone'
  }

  protected async _cloneAction(): Promise<void> {
    await gitUseCase.cleanAndGetNewCopyOfTemplateRepo()
    await gitUseCase.extractAndRemoveZipFileAndPrepareTempFolder()
    await gitUseCase.renderAllTemplateWithValuesFromConfig()
    await gitUseCase
      .copyFilesFromBaseIfTheyDontExist()
      .catch((err) => logger.error('Some file already exist, you need to compare folder manually', { err }))
  }

  protected async _destroyFn(): Promise<void> {
    return Promise.resolve(undefined)
  }

  protected async _initFn(): Promise<void> {
    await this._cloneAction()
  }
}
