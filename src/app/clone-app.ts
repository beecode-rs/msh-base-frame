import { SetupInitiate } from './init/setup-initiate'
import { App } from '@beecode/msh-node-app'
import { CloneInitiate } from 'src/app/init/clone-initate'

export class CloneApp extends App {
  constructor() {
    super(new SetupInitiate(), new CloneInitiate())
  }
}
