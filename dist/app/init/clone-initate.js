"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloneInitiate = void 0;
const msh_node_app_1 = require("@beecode/msh-node-app");
const action_use_case_1 = require("../../use-case/action-use-case");
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
//# sourceMappingURL=clone-initate.js.map