"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloneApp = void 0;
const setup_initiate_1 = require("./init/setup-initiate");
const msh_node_app_1 = require("@beecode/msh-node-app");
const clone_initate_1 = require("src/app/init/clone-initate");
class CloneApp extends msh_node_app_1.App {
    constructor() {
        super(new setup_initiate_1.SetupInitiate(), new clone_initate_1.CloneInitiate());
    }
}
exports.CloneApp = CloneApp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvbmUtYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FwcC9jbG9uZS1hcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMERBQXFEO0FBQ3JELHdEQUEyQztBQUMzQyw4REFBMEQ7QUFFMUQsTUFBYSxRQUFTLFNBQVEsa0JBQUc7SUFDL0I7UUFDRSxLQUFLLENBQUMsSUFBSSw4QkFBYSxFQUFFLEVBQUUsSUFBSSw2QkFBYSxFQUFFLENBQUMsQ0FBQTtJQUNqRCxDQUFDO0NBQ0Y7QUFKRCw0QkFJQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNldHVwSW5pdGlhdGUgfSBmcm9tICcuL2luaXQvc2V0dXAtaW5pdGlhdGUnXG5pbXBvcnQgeyBBcHAgfSBmcm9tICdAYmVlY29kZS9tc2gtbm9kZS1hcHAnXG5pbXBvcnQgeyBDbG9uZUluaXRpYXRlIH0gZnJvbSAnc3JjL2FwcC9pbml0L2Nsb25lLWluaXRhdGUnXG5cbmV4cG9ydCBjbGFzcyBDbG9uZUFwcCBleHRlbmRzIEFwcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKG5ldyBTZXR1cEluaXRpYXRlKCksIG5ldyBDbG9uZUluaXRpYXRlKCkpXG4gIH1cbn1cbiJdfQ==