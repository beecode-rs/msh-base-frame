import { AppFlow } from '@beecode/msh-app-boot'

import { CloneInitiate } from '#/app/init/clone-initate'
import { SetupInitiate } from '#/app/init/setup-initiate'

export class CloneApp extends AppFlow {
	constructor() {
		super(new SetupInitiate(), new CloneInitiate())
	}
}
