"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloneApp = void 0;
const msh_node_app_1 = require("@beecode/msh-node-app");
const clone_initate_1 = require("../app/init/clone-initate");
const setup_initiate_1 = require("../app/init/setup-initiate");
class CloneApp extends msh_node_app_1.AppFlow {
    constructor() {
        super(new setup_initiate_1.SetupInitiate(), new clone_initate_1.CloneInitiate());
    }
}
exports.CloneApp = CloneApp;
//# sourceMappingURL=clone-app.js.map