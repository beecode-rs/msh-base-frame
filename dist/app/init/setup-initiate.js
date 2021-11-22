"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetupInitiate = void 0;
const msh_node_app_1 = require("@beecode/msh-node-app");
const config_1 = require("src/util/config");
class SetupInitiate extends msh_node_app_1.LifeCycle {
    constructor() {
        super({ name: 'Setup' });
    }
    async _createFn() {
        await config_1.config._init();
    }
    async _destroyFn() {
        return Promise.resolve(undefined);
    }
}
exports.SetupInitiate = SetupInitiate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dXAtaW5pdGlhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBwL2luaXQvc2V0dXAtaW5pdGlhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsd0RBQWlEO0FBQ2pELDRDQUF3QztBQUV4QyxNQUFhLGFBQWMsU0FBUSx3QkFBUztJQUMxQztRQUNFLEtBQUssQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFBO0lBQzFCLENBQUM7SUFFUyxLQUFLLENBQUMsU0FBUztRQUN2QixNQUFNLGVBQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUN0QixDQUFDO0lBRVMsS0FBSyxDQUFDLFVBQVU7UUFDeEIsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQ25DLENBQUM7Q0FDRjtBQVpELHNDQVlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGlmZUN5Y2xlIH0gZnJvbSAnQGJlZWNvZGUvbXNoLW5vZGUtYXBwJ1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnc3JjL3V0aWwvY29uZmlnJ1xuXG5leHBvcnQgY2xhc3MgU2V0dXBJbml0aWF0ZSBleHRlbmRzIExpZmVDeWNsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKHsgbmFtZTogJ1NldHVwJyB9KVxuICB9XG5cbiAgcHJvdGVjdGVkIGFzeW5jIF9jcmVhdGVGbigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBhd2FpdCBjb25maWcuX2luaXQoKVxuICB9XG5cbiAgcHJvdGVjdGVkIGFzeW5jIF9kZXN0cm95Rm4oKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh1bmRlZmluZWQpXG4gIH1cbn1cbiJdfQ==