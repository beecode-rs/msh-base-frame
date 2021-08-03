import 'module-alias/register'
import 'source-map-support/register'
// import 'reflect-metadata'
import 'src/util/config'
import { appFactory } from 'src/app'
import { CloneApp } from 'src/app/clone-app'
import { logger } from 'src/util/logger'

process.on('uncaughtException', (error) => logger.error('Uncaught Exception', { error }))
process.on('unhandledRejection', (error) => logger.error('Unhandled Rejection', { error }))

appFactory(new CloneApp()).start()
