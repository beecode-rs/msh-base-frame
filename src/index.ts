import 'source-map-support/register'
import 'src/util/config'

// import { LogLevel } from '@beecode/msh-logger'
// import { ConsoleLogStrategy } from '@beecode/msh-logger/lib/logger-strategy/console/log-strategy'
import { AppStarter } from '@beecode/msh-app-boot'
// import { NodeAppLogger } from '@beecode/msh-app-boot/lib/util/logger'
import { CloneApp } from 'src/app/clone-app'
import { logger } from 'src/util/logger'

process.on('uncaughtException', (error) => logger().error('Uncaught Exception', { error }))
process.on('unhandledRejection', (error) => logger().error('Unhandled Rejection', { error }))

// NodeAppLogger({ logger: logger() })

new AppStarter(new CloneApp()).start().catch((err) => console.log(err)) // eslint-disable-line no-console
