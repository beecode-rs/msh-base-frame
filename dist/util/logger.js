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
//# sourceMappingURL=logger.js.map