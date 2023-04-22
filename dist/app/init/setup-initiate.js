"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetupInitiate = void 0;
const msh_node_app_1 = require("@beecode/msh-node-app");
const config_1 = require("../../util/config");
class SetupInitiate extends msh_node_app_1.LifeCycle {
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
//# sourceMappingURL=setup-initiate.js.map