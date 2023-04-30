"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloneApp = void 0;
const msh_app_boot_1 = require("@beecode/msh-app-boot");
const clone_initate_1 = require("../app/init/clone-initate");
const setup_initiate_1 = require("../app/init/setup-initiate");
class CloneApp extends msh_app_boot_1.AppFlow {
    constructor() {
        super(new setup_initiate_1.SetupInitiate(), new clone_initate_1.CloneInitiate());
    }
}
exports.CloneApp = CloneApp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvbmUtYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FwcC9jbG9uZS1hcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsd0RBQStDO0FBQy9DLDhEQUEwRDtBQUMxRCxnRUFBMkQ7QUFFM0QsTUFBYSxRQUFTLFNBQVEsc0JBQU87SUFDcEM7UUFDQyxLQUFLLENBQUMsSUFBSSw4QkFBYSxFQUFFLEVBQUUsSUFBSSw2QkFBYSxFQUFFLENBQUMsQ0FBQTtJQUNoRCxDQUFDO0NBQ0Q7QUFKRCw0QkFJQyJ9