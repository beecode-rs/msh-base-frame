"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloneInitiate = void 0;
const msh_node_app_1 = require("@beecode/msh-node-app");
const action_use_case_1 = require("src/use-case/action-use-case");
const logger_1 = require("src/util/logger");
class CloneInitiate extends msh_node_app_1.Initiate {
    constructor() {
        super();
        this.Logger = logger_1.logger;
    }
    get Name() {
        return 'Clone';
    }
    async _destroyFn() {
        return Promise.resolve(undefined);
    }
    async _initFn() {
        await action_use_case_1.actionUseCase.clone();
    }
}
exports.CloneInitiate = CloneInitiate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvbmUtaW5pdGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvaW5pdC9jbG9uZS1pbml0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHdEQUFnRDtBQUNoRCxrRUFBNEQ7QUFDNUQsNENBQXdDO0FBRXhDLE1BQWEsYUFBYyxTQUFRLHVCQUFRO0lBQ3pDO1FBQ0UsS0FBSyxFQUFFLENBQUE7UUFDUCxJQUFJLENBQUMsTUFBTSxHQUFHLGVBQU0sQ0FBQTtJQUN0QixDQUFDO0lBQ0QsSUFBVyxJQUFJO1FBQ2IsT0FBTyxPQUFPLENBQUE7SUFDaEIsQ0FBQztJQUVTLEtBQUssQ0FBQyxVQUFVO1FBQ3hCLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUNuQyxDQUFDO0lBRVMsS0FBSyxDQUFDLE9BQU87UUFDckIsTUFBTSwrQkFBYSxDQUFDLEtBQUssRUFBRSxDQUFBO0lBQzdCLENBQUM7Q0FDRjtBQWhCRCxzQ0FnQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbml0aWF0ZSB9IGZyb20gJ0BiZWVjb2RlL21zaC1ub2RlLWFwcCdcbmltcG9ydCB7IGFjdGlvblVzZUNhc2UgfSBmcm9tICdzcmMvdXNlLWNhc2UvYWN0aW9uLXVzZS1jYXNlJ1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnc3JjL3V0aWwvbG9nZ2VyJ1xuXG5leHBvcnQgY2xhc3MgQ2xvbmVJbml0aWF0ZSBleHRlbmRzIEluaXRpYXRlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuTG9nZ2VyID0gbG9nZ2VyXG4gIH1cbiAgcHVibGljIGdldCBOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICdDbG9uZSdcbiAgfVxuXG4gIHByb3RlY3RlZCBhc3luYyBfZGVzdHJveUZuKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodW5kZWZpbmVkKVxuICB9XG5cbiAgcHJvdGVjdGVkIGFzeW5jIF9pbml0Rm4oKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgYXdhaXQgYWN0aW9uVXNlQ2FzZS5jbG9uZSgpXG4gIH1cbn1cbiJdfQ==