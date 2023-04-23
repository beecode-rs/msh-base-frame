"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetupInitiate = void 0;
const msh_app_boot_1 = require("@beecode/msh-app-boot");
const config_1 = require("../../util/config");
class SetupInitiate extends msh_app_boot_1.LifeCycle {
    constructor() {
        super({ name: 'Setup' });
    }
    async _createFn() {
        await (0, config_1.configSetupSingleton)().initialize();
    }
    async _destroyFn() {
        return Promise.resolve(undefined);
    }
}
exports.SetupInitiate = SetupInitiate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dXAtaW5pdGlhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBwL2luaXQvc2V0dXAtaW5pdGlhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsd0RBQWlEO0FBQ2pELDRDQUFzRDtBQUV0RCxNQUFhLGFBQWMsU0FBUSx3QkFBUztJQUMzQztRQUNDLEtBQUssQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFBO0lBQ3pCLENBQUM7SUFFUyxLQUFLLENBQUMsU0FBUztRQUN4QixNQUFNLElBQUEsNkJBQW9CLEdBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQTtJQUMxQyxDQUFDO0lBRVMsS0FBSyxDQUFDLFVBQVU7UUFDekIsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQ2xDLENBQUM7Q0FDRDtBQVpELHNDQVlDIn0=