"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("source-map-support/register");
require("./util/config");
// import { LogLevel } from '@beecode/msh-logger'
// import { ConsoleLogStrategy } from '@beecode/msh-logger/lib/logger-strategy/console/log-strategy'
const msh_node_app_1 = require("@beecode/msh-node-app");
// import { NodeAppLogger } from '@beecode/msh-node-app/lib/util/logger'
const clone_app_1 = require("./app/clone-app");
const logger_1 = require("./util/logger");
process.on('uncaughtException', (error) => (0, logger_1.logger)().error('Uncaught Exception', { error }));
process.on('unhandledRejection', (error) => (0, logger_1.logger)().error('Unhandled Rejection', { error }));
// NodeAppLogger({ logger: logger() })
(0, msh_node_app_1.appStarterFactory)(clone_app_1.CloneApp)
    .start()
    .catch((err) => console.log(err)); // eslint-disable-line no-console
//# sourceMappingURL=index.js.map