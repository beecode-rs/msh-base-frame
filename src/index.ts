import 'source-map-support/register.js'

import { AppStarter } from '@beecode/msh-app-boot'
import { setAppBootLogger } from '@beecode/msh-app-boot/util/logger'

import { CloneApp } from '#src/app/clone-app'
import { logger } from '#src/util/logger'

process.on('uncaughtException', (error) => {
	logger().error('Uncaught Exception', { error })
})
process.on('unhandledRejection', (error) => {
	logger().error('Unhandled Rejection', { error })
})

setAppBootLogger(logger())

console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$') // eslint-disable-line no-console

try {
	await new AppStarter(new CloneApp()).start()
} catch (err) {
	console.log(err) // eslint-disable-line no-console
}
