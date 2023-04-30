"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const msh_logger_1 = require("@beecode/msh-logger");
const console_1 = require("@beecode/msh-logger/lib/logger-strategy/console");
const simple_1 = require("@beecode/msh-logger/lib/logger-strategy/console/log-strategy/simple");
const pattern_1 = require("@beecode/msh-util/lib/singleton/pattern");
exports.logger = (0, pattern_1.singletonPattern)(() => {
    return new console_1.LoggerStrategyConsole({
        consoleLogStrategy: new simple_1.ConsoleLogStrategySimple(),
        logLevel: msh_logger_1.LogLevel.DEBUG,
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWwvbG9nZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG9EQUE4QztBQUM5Qyw2RUFBdUY7QUFDdkYsZ0dBQThHO0FBQzlHLHFFQUEwRTtBQUU3RCxRQUFBLE1BQU0sR0FBRyxJQUFBLDBCQUFnQixFQUFDLEdBQUcsRUFBRTtJQUMzQyxPQUFPLElBQUksK0JBQXFCLENBQUM7UUFDaEMsa0JBQWtCLEVBQUUsSUFBSSxpQ0FBd0IsRUFBRTtRQUNsRCxRQUFRLEVBQUUscUJBQVEsQ0FBQyxLQUFLO0tBQ3hCLENBQUMsQ0FBQTtBQUNILENBQUMsQ0FBQyxDQUFBIn0=