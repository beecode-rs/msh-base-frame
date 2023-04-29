"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloneInitiate = void 0;
const msh_app_boot_1 = require("@beecode/msh-app-boot");
const action_use_case_1 = require("../../use-case/action-use-case");
class CloneInitiate extends msh_app_boot_1.LifeCycle {
    constructor() {
        super({ name: 'Clone' });
    }
    async _createFn() {
        await action_use_case_1.actionUseCase.clone();
    }
    async _destroyFn() {
        return Promise.resolve(undefined);
    }
}
exports.CloneInitiate = CloneInitiate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvbmUtaW5pdGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvaW5pdC9jbG9uZS1pbml0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHdEQUFpRDtBQUNqRCxrRUFBNEQ7QUFFNUQsTUFBYSxhQUFjLFNBQVEsd0JBQVM7SUFDM0M7UUFDQyxLQUFLLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQTtJQUN6QixDQUFDO0lBRVMsS0FBSyxDQUFDLFNBQVM7UUFDeEIsTUFBTSwrQkFBYSxDQUFDLEtBQUssRUFBRSxDQUFBO0lBQzVCLENBQUM7SUFFUyxLQUFLLENBQUMsVUFBVTtRQUN6QixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDbEMsQ0FBQztDQUNEO0FBWkQsc0NBWUMifQ==