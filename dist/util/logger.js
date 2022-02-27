"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const msh_node_log_1 = require("@beecode/msh-node-log");
const simple_console_log_1 = require("@beecode/msh-node-log/lib/console-log-strategy/simple-console-log");
const console_logger_1 = require("@beecode/msh-node-log/lib/console-logger");
exports.logger = new console_logger_1.ConsoleLogger({
    logLevel: msh_node_log_1.LogLevelType.DEBUG,
    consoleLogStrategy: new simple_console_log_1.SimpleConsoleLog(),
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWwvbG9nZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHdEQUFvRDtBQUNwRCwwR0FBb0c7QUFDcEcsNkVBQXdFO0FBRTNELFFBQUEsTUFBTSxHQUFHLElBQUksOEJBQWEsQ0FBQztJQUN0QyxRQUFRLEVBQUUsMkJBQVksQ0FBQyxLQUFLO0lBQzVCLGtCQUFrQixFQUFFLElBQUkscUNBQWdCLEVBQUU7Q0FDM0MsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTG9nTGV2ZWxUeXBlIH0gZnJvbSAnQGJlZWNvZGUvbXNoLW5vZGUtbG9nJ1xuaW1wb3J0IHsgU2ltcGxlQ29uc29sZUxvZyB9IGZyb20gJ0BiZWVjb2RlL21zaC1ub2RlLWxvZy9saWIvY29uc29sZS1sb2ctc3RyYXRlZ3kvc2ltcGxlLWNvbnNvbGUtbG9nJ1xuaW1wb3J0IHsgQ29uc29sZUxvZ2dlciB9IGZyb20gJ0BiZWVjb2RlL21zaC1ub2RlLWxvZy9saWIvY29uc29sZS1sb2dnZXInXG5cbmV4cG9ydCBjb25zdCBsb2dnZXIgPSBuZXcgQ29uc29sZUxvZ2dlcih7XG4gIGxvZ0xldmVsOiBMb2dMZXZlbFR5cGUuREVCVUcsXG4gIGNvbnNvbGVMb2dTdHJhdGVneTogbmV3IFNpbXBsZUNvbnNvbGVMb2coKSxcbn0pXG4iXX0=