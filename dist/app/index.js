"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appFactory = void 0;
const logger_1 = require("src/util/logger");
const appFactory = (app) => {
    const self = {
        _isStarted: false,
        _isStarting: false,
        _isDestroying: false,
        start: () => {
            self
                ._start()
                .then(self._registerOnExit)
                .catch(self._onError)
                .catch((err) => logger_1.logger.error(err));
        },
        _registerOnExit: () => {
            ;
            ['SIGTERM', 'SIGINT'].forEach((signal) => {
                process.on(signal, () => {
                    self
                        ._stop()
                        .then(() => process.exit(0))
                        .catch((err) => logger_1.logger.error(err));
                });
            });
        },
        _stop: async () => {
            if (self._isDestroying || !self._isStarted)
                return;
            try {
                self._isDestroying = true;
                await app.destroy();
            }
            finally {
                self._isStarted = false;
                self._isDestroying = false;
            }
        },
        _start: async () => {
            if (self._isStarted || self._isStarting)
                return;
            try {
                self._isStarting = true;
                await app.initiate();
            }
            finally {
                self._isStarted = true;
                self._isStarting = false;
            }
        },
        _onError: async (err) => {
            logger_1.logger.error(err.message);
            await self._stop();
            process.exit(1);
        },
    };
    return self;
};
exports.appFactory = appFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYXBwL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLDRDQUF3QztBQWFqQyxNQUFNLFVBQVUsR0FBRyxDQUFDLEdBQVEsRUFBb0IsRUFBRTtJQUN2RCxNQUFNLElBQUksR0FBRztRQUNYLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLFdBQVcsRUFBRSxLQUFLO1FBQ2xCLGFBQWEsRUFBRSxLQUFLO1FBQ3BCLEtBQUssRUFBRSxHQUFTLEVBQUU7WUFDaEIsSUFBSTtpQkFDRCxNQUFNLEVBQUU7aUJBQ1IsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7aUJBQzFCLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO2lCQUNwQixLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLGVBQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtRQUN0QyxDQUFDO1FBQ0QsZUFBZSxFQUFFLEdBQVMsRUFBRTtZQUMxQixDQUFDO1lBQUEsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBYyxFQUFFLEVBQUU7Z0JBQ2hELE9BQU8sQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRTtvQkFDdEIsSUFBSTt5QkFDRCxLQUFLLEVBQUU7eUJBQ1AsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7eUJBQzNCLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsZUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO2dCQUN0QyxDQUFDLENBQUMsQ0FBQTtZQUNKLENBQUMsQ0FBQyxDQUFBO1FBQ0osQ0FBQztRQUNELEtBQUssRUFBRSxLQUFLLElBQW1CLEVBQUU7WUFDL0IsSUFBSSxJQUFJLENBQUMsYUFBYSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVU7Z0JBQUUsT0FBTTtZQUNsRCxJQUFJO2dCQUNGLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFBO2dCQUN6QixNQUFNLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQTthQUNwQjtvQkFBUztnQkFDUixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQTtnQkFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUE7YUFDM0I7UUFDSCxDQUFDO1FBQ0QsTUFBTSxFQUFFLEtBQUssSUFBbUIsRUFBRTtZQUNoQyxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFdBQVc7Z0JBQUUsT0FBTTtZQUMvQyxJQUFJO2dCQUNGLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFBO2dCQUN2QixNQUFNLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQTthQUNyQjtvQkFBUztnQkFDUixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQTtnQkFDdEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUE7YUFDekI7UUFDSCxDQUFDO1FBQ0QsUUFBUSxFQUFFLEtBQUssRUFBRSxHQUFVLEVBQWlCLEVBQUU7WUFDNUMsZUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7WUFDekIsTUFBTSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUE7WUFDbEIsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNqQixDQUFDO0tBQ0YsQ0FBQTtJQUNELE9BQU8sSUFBSSxDQUFBO0FBQ2IsQ0FBQyxDQUFBO0FBakRZLFFBQUEsVUFBVSxjQWlEdEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHAgfSBmcm9tICdAYmVlY29kZS9tc2gtbm9kZS1hcHAnXG5pbXBvcnQgeyBDbG9uZUFwcCB9IGZyb20gJ3NyYy9hcHAvY2xvbmUtYXBwJ1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnc3JjL3V0aWwvbG9nZ2VyJ1xuXG5leHBvcnQgdHlwZSBBcHBGYWN0b3J5UmVzdWx0ID0ge1xuICBfb25FcnJvcjogKGVycjogRXJyb3IpID0+IFByb21pc2U8dm9pZD5cbiAgX3N0b3A6ICgpID0+IFByb21pc2U8dm9pZD5cbiAgX3N0YXJ0OiAoKSA9PiBQcm9taXNlPHZvaWQ+XG4gIHN0YXJ0OiAoKSA9PiB2b2lkXG4gIF9yZWdpc3Rlck9uRXhpdDogKCkgPT4gdm9pZFxuICBfaXNEZXN0cm95aW5nOiBib29sZWFuXG4gIF9pc1N0YXJ0aW5nOiBib29sZWFuXG4gIF9pc1N0YXJ0ZWQ6IGJvb2xlYW5cbn1cblxuZXhwb3J0IGNvbnN0IGFwcEZhY3RvcnkgPSAoYXBwOiBBcHApOiBBcHBGYWN0b3J5UmVzdWx0ID0+IHtcbiAgY29uc3Qgc2VsZiA9IHtcbiAgICBfaXNTdGFydGVkOiBmYWxzZSxcbiAgICBfaXNTdGFydGluZzogZmFsc2UsXG4gICAgX2lzRGVzdHJveWluZzogZmFsc2UsXG4gICAgc3RhcnQ6ICgpOiB2b2lkID0+IHtcbiAgICAgIHNlbGZcbiAgICAgICAgLl9zdGFydCgpXG4gICAgICAgIC50aGVuKHNlbGYuX3JlZ2lzdGVyT25FeGl0KVxuICAgICAgICAuY2F0Y2goc2VsZi5fb25FcnJvcilcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IGxvZ2dlci5lcnJvcihlcnIpKVxuICAgIH0sXG4gICAgX3JlZ2lzdGVyT25FeGl0OiAoKTogdm9pZCA9PiB7XG4gICAgICA7WydTSUdURVJNJywgJ1NJR0lOVCddLmZvckVhY2goKHNpZ25hbDogc3RyaW5nKSA9PiB7XG4gICAgICAgIHByb2Nlc3Mub24oc2lnbmFsLCAoKSA9PiB7XG4gICAgICAgICAgc2VsZlxuICAgICAgICAgICAgLl9zdG9wKClcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHByb2Nlc3MuZXhpdCgwKSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBsb2dnZXIuZXJyb3IoZXJyKSlcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSxcbiAgICBfc3RvcDogYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgICAgaWYgKHNlbGYuX2lzRGVzdHJveWluZyB8fCAhc2VsZi5faXNTdGFydGVkKSByZXR1cm5cbiAgICAgIHRyeSB7XG4gICAgICAgIHNlbGYuX2lzRGVzdHJveWluZyA9IHRydWVcbiAgICAgICAgYXdhaXQgYXBwLmRlc3Ryb3koKVxuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgc2VsZi5faXNTdGFydGVkID0gZmFsc2VcbiAgICAgICAgc2VsZi5faXNEZXN0cm95aW5nID0gZmFsc2VcbiAgICAgIH1cbiAgICB9LFxuICAgIF9zdGFydDogYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgICAgaWYgKHNlbGYuX2lzU3RhcnRlZCB8fCBzZWxmLl9pc1N0YXJ0aW5nKSByZXR1cm5cbiAgICAgIHRyeSB7XG4gICAgICAgIHNlbGYuX2lzU3RhcnRpbmcgPSB0cnVlXG4gICAgICAgIGF3YWl0IGFwcC5pbml0aWF0ZSgpXG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBzZWxmLl9pc1N0YXJ0ZWQgPSB0cnVlXG4gICAgICAgIHNlbGYuX2lzU3RhcnRpbmcgPSBmYWxzZVxuICAgICAgfVxuICAgIH0sXG4gICAgX29uRXJyb3I6IGFzeW5jIChlcnI6IEVycm9yKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgICBsb2dnZXIuZXJyb3IoZXJyLm1lc3NhZ2UpXG4gICAgICBhd2FpdCBzZWxmLl9zdG9wKClcbiAgICAgIHByb2Nlc3MuZXhpdCgxKVxuICAgIH0sXG4gIH1cbiAgcmV0dXJuIHNlbGZcbn1cbiJdfQ==