"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloneInitiate = void 0;
const msh_node_app_1 = require("@beecode/msh-node-app");
const action_use_case_1 = require("src/use-case/action-use-case");
class CloneInitiate extends msh_node_app_1.LifeCycle {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvbmUtaW5pdGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvaW5pdC9jbG9uZS1pbml0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHdEQUFpRDtBQUNqRCxrRUFBNEQ7QUFFNUQsTUFBYSxhQUFjLFNBQVEsd0JBQVM7SUFDMUM7UUFDRSxLQUFLLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQTtJQUMxQixDQUFDO0lBRVMsS0FBSyxDQUFDLFNBQVM7UUFDdkIsTUFBTSwrQkFBYSxDQUFDLEtBQUssRUFBRSxDQUFBO0lBQzdCLENBQUM7SUFFUyxLQUFLLENBQUMsVUFBVTtRQUN4QixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDbkMsQ0FBQztDQUNGO0FBWkQsc0NBWUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaWZlQ3ljbGUgfSBmcm9tICdAYmVlY29kZS9tc2gtbm9kZS1hcHAnXG5pbXBvcnQgeyBhY3Rpb25Vc2VDYXNlIH0gZnJvbSAnc3JjL3VzZS1jYXNlL2FjdGlvbi11c2UtY2FzZSdcblxuZXhwb3J0IGNsYXNzIENsb25lSW5pdGlhdGUgZXh0ZW5kcyBMaWZlQ3ljbGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcih7IG5hbWU6ICdDbG9uZScgfSlcbiAgfVxuXG4gIHByb3RlY3RlZCBhc3luYyBfY3JlYXRlRm4oKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgYXdhaXQgYWN0aW9uVXNlQ2FzZS5jbG9uZSgpXG4gIH1cblxuICBwcm90ZWN0ZWQgYXN5bmMgX2Rlc3Ryb3lGbigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHVuZGVmaW5lZClcbiAgfVxufVxuIl19