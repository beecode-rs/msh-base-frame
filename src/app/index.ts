import { App } from '@beecode/msh-node-app'
import { CloneApp } from 'src/app/clone-app'
import { logger } from 'src/util/logger'

export type AppFactoryResult = {
  _onError: (err: Error) => Promise<void>
  _stop: () => Promise<void>
  _start: () => Promise<void>
  start: () => void
  _registerOnExit: () => void
  _isDestroying: boolean
  _isStarting: boolean
  _isStarted: boolean
}

export const appFactory = (app: App): AppFactoryResult => {
  const self = {
    _isStarted: false,
    _isStarting: false,
    _isDestroying: false,
    start: (): void => {
      self
        ._start()
        .then(self._registerOnExit)
        .catch(self._onError)
        .catch((err) => logger.error(err))
    },
    _registerOnExit: (): void => {
      ;['SIGTERM', 'SIGINT'].forEach((signal: string) => {
        process.on(signal, () => {
          self
            ._stop()
            .then(() => process.exit(0))
            .catch((err) => logger.error(err))
        })
      })
    },
    _stop: async (): Promise<void> => {
      if (self._isDestroying || !self._isStarted) return
      try {
        self._isDestroying = true
        await app.destroy()
      } finally {
        self._isStarted = false
        self._isDestroying = false
      }
    },
    _start: async (): Promise<void> => {
      if (self._isStarted || self._isStarting) return
      try {
        self._isStarting = true
        await app.initiate()
      } finally {
        self._isStarted = true
        self._isStarting = false
      }
    },
    _onError: async (err: Error): Promise<void> => {
      logger.error(err.message)
      await self._stop()
      process.exit(1)
    },
  }
  return self
}
