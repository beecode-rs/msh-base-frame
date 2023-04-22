import { AppFlow } from '@beecode/msh-node-app'
import { CloneInitiate } from 'src/app/init/clone-initate'
import { SetupInitiate } from 'src/app/init/setup-initiate'

export class CloneApp extends AppFlow {
	constructor() {
		super(new SetupInitiate(), new CloneInitiate())
	}
}
