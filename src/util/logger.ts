import { LogLevel } from '@beecode/msh-logger'
import { LoggerStrategyConsole } from '@beecode/msh-logger/logger-strategy/console'
import { ConsoleLogStrategySimple } from '@beecode/msh-logger/logger-strategy/console/log-strategy/simple'
import { singletonPattern } from '@beecode/msh-util/singleton/pattern'

export const logger = singletonPattern(() => {
	return new LoggerStrategyConsole({
		consoleLogStrategy: new ConsoleLogStrategySimple(),
		logLevel: LogLevel.DEBUG,
	})
})
