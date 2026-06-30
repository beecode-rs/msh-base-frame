import { LogLevel } from '@beecode/msh-logger'
import { PresetConsoleSimpleString } from '@beecode/msh-logger/controller/preset/console-simple-string'
import { singletonPattern } from '@beecode/msh-util/singleton/pattern'

export const logger = singletonPattern(() => {
	return new PresetConsoleSimpleString({
		logLevel: LogLevel.INFO,
	})
})
