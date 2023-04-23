"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("source-map-support/register");
require("./util/config");
// import { LogLevel } from '@beecode/msh-logger'
// import { ConsoleLogStrategy } from '@beecode/msh-logger/lib/logger-strategy/console/log-strategy'
const msh_app_boot_1 = require("@beecode/msh-app-boot");
// import { NodeAppLogger } from '@beecode/msh-app-boot/lib/util/logger'
const clone_app_1 = require("./app/clone-app");
const logger_1 = require("./util/logger");
process.on('uncaughtException', (error) => (0, logger_1.logger)().error('Uncaught Exception', { error }));
process.on('unhandledRejection', (error) => (0, logger_1.logger)().error('Unhandled Rejection', { error }));
// NodeAppLogger({ logger: logger() })
new msh_app_boot_1.AppStarter(new clone_app_1.CloneApp()).start().catch((err) => console.log(err)); // eslint-disable-line no-console
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx1Q0FBb0M7QUFDcEMsMkJBQXdCO0FBRXhCLGlEQUFpRDtBQUNqRCxvR0FBb0c7QUFDcEcsd0RBQWtEO0FBQ2xELHdFQUF3RTtBQUN4RSxpREFBNEM7QUFDNUMsNENBQXdDO0FBRXhDLE9BQU8sQ0FBQyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLElBQUEsZUFBTSxHQUFFLENBQUMsS0FBSyxDQUFDLG9CQUFvQixFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFBO0FBQzNGLE9BQU8sQ0FBQyxFQUFFLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLElBQUEsZUFBTSxHQUFFLENBQUMsS0FBSyxDQUFDLHFCQUFxQixFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFBO0FBRTdGLHNDQUFzQztBQUV0QyxJQUFJLHlCQUFVLENBQUMsSUFBSSxvQkFBUSxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQSxDQUFDLGlDQUFpQyJ9