"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("source-map-support/register");
const msh_app_boot_1 = require("@beecode/msh-app-boot");
const logger_1 = require("@beecode/msh-app-boot/lib/util/logger");
const clone_app_1 = require("./app/clone-app");
const logger_2 = require("./util/logger");
process.on('uncaughtException', (error) => (0, logger_2.logger)().error('Uncaught Exception', { error }));
process.on('unhandledRejection', (error) => (0, logger_2.logger)().error('Unhandled Rejection', { error }));
(0, logger_1.setAppBootLogger)((0, logger_2.logger)());
new msh_app_boot_1.AppStarter(new clone_app_1.CloneApp()).start().catch((err) => console.log(err)); // eslint-disable-line no-console
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx1Q0FBb0M7QUFFcEMsd0RBQWtEO0FBQ2xELGtFQUF3RTtBQUN4RSxpREFBNEM7QUFDNUMsNENBQXdDO0FBRXhDLE9BQU8sQ0FBQyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLElBQUEsZUFBTSxHQUFFLENBQUMsS0FBSyxDQUFDLG9CQUFvQixFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFBO0FBQzNGLE9BQU8sQ0FBQyxFQUFFLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLElBQUEsZUFBTSxHQUFFLENBQUMsS0FBSyxDQUFDLHFCQUFxQixFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFBO0FBRTdGLElBQUEseUJBQWdCLEVBQUMsSUFBQSxlQUFNLEdBQUUsQ0FBQyxDQUFBO0FBRTFCLElBQUkseUJBQVUsQ0FBQyxJQUFJLG9CQUFRLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBLENBQUMsaUNBQWlDIn0=