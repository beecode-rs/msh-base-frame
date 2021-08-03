import { SimpleConsoleLog } from '@beecode/msh-node-log/lib/console-log-strategy/simple-console-log'
import { ConsoleLogger } from '@beecode/msh-node-log/lib/console-logger'

export const logger = new ConsoleLogger({
  logLevel: 'debug',
  consoleLogStrategy: new SimpleConsoleLog(),
})
