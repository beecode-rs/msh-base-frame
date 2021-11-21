"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetupInitiate = void 0;
const msh_node_app_1 = require("@beecode/msh-node-app");
const config_1 = require("src/util/config");
const logger_1 = require("src/util/logger");
class SetupInitiate extends msh_node_app_1.Initiate {
    constructor() {
        super();
        this.Logger = logger_1.logger;
    }
    get Name() {
        return 'Setup';
    }
    async _destroyFn() {
        return Promise.resolve(undefined);
    }
    async _initFn() {
        await config_1.config._init();
    }
}
exports.SetupInitiate = SetupInitiate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dXAtaW5pdGlhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBwL2luaXQvc2V0dXAtaW5pdGlhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsd0RBQWdEO0FBQ2hELDRDQUF3QztBQUN4Qyw0Q0FBd0M7QUFFeEMsTUFBYSxhQUFjLFNBQVEsdUJBQVE7SUFDekM7UUFDRSxLQUFLLEVBQUUsQ0FBQTtRQUNQLElBQUksQ0FBQyxNQUFNLEdBQUcsZUFBTSxDQUFBO0lBQ3RCLENBQUM7SUFFRCxJQUFXLElBQUk7UUFDYixPQUFPLE9BQU8sQ0FBQTtJQUNoQixDQUFDO0lBRVMsS0FBSyxDQUFDLFVBQVU7UUFDeEIsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQ25DLENBQUM7SUFFUyxLQUFLLENBQUMsT0FBTztRQUNyQixNQUFNLGVBQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUN0QixDQUFDO0NBQ0Y7QUFqQkQsc0NBaUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5pdGlhdGUgfSBmcm9tICdAYmVlY29kZS9tc2gtbm9kZS1hcHAnXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICdzcmMvdXRpbC9jb25maWcnXG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICdzcmMvdXRpbC9sb2dnZXInXG5cbmV4cG9ydCBjbGFzcyBTZXR1cEluaXRpYXRlIGV4dGVuZHMgSW5pdGlhdGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5Mb2dnZXIgPSBsb2dnZXJcbiAgfVxuXG4gIHB1YmxpYyBnZXQgTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiAnU2V0dXAnXG4gIH1cblxuICBwcm90ZWN0ZWQgYXN5bmMgX2Rlc3Ryb3lGbigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHVuZGVmaW5lZClcbiAgfVxuXG4gIHByb3RlY3RlZCBhc3luYyBfaW5pdEZuKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGF3YWl0IGNvbmZpZy5faW5pdCgpXG4gIH1cbn1cbiJdfQ==