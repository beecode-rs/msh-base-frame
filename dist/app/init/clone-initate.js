"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloneInitiate = void 0;
const msh_node_app_1 = require("@beecode/msh-node-app");
const git_use_case_1 = require("src/use-case/git-use-case");
const logger_1 = require("src/util/logger");
class CloneInitiate extends msh_node_app_1.Initiate {
    constructor() {
        super();
        this.Logger = logger_1.logger;
    }
    get Name() {
        return 'Clone';
    }
    async _cloneAction() {
        await git_use_case_1.gitUseCase.cleanAndGetNewCopyOfTemplateRepo();
        await git_use_case_1.gitUseCase.extractAndRemoveZipFileAndPrepareTempFolder();
        await git_use_case_1.gitUseCase.renderAllTemplateWithValuesFromConfig();
        await git_use_case_1.gitUseCase
            .copyFilesFromBaseIfTheyDontExist()
            .catch((err) => logger_1.logger.error('Some file already exist, you need to compare folder manually', { err }));
    }
    async _destroyFn() {
        return Promise.resolve(undefined);
    }
    async _initFn() {
        await this._cloneAction();
    }
}
exports.CloneInitiate = CloneInitiate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvbmUtaW5pdGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvaW5pdC9jbG9uZS1pbml0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHdEQUFnRDtBQUVoRCw0REFBc0Q7QUFFdEQsNENBQXdDO0FBRXhDLE1BQWEsYUFBYyxTQUFRLHVCQUFRO0lBQ3pDO1FBQ0UsS0FBSyxFQUFFLENBQUE7UUFDUCxJQUFJLENBQUMsTUFBTSxHQUFHLGVBQU0sQ0FBQTtJQUN0QixDQUFDO0lBQ0QsSUFBVyxJQUFJO1FBQ2IsT0FBTyxPQUFPLENBQUE7SUFDaEIsQ0FBQztJQUVTLEtBQUssQ0FBQyxZQUFZO1FBQzFCLE1BQU0seUJBQVUsQ0FBQyxnQ0FBZ0MsRUFBRSxDQUFBO1FBQ25ELE1BQU0seUJBQVUsQ0FBQywyQ0FBMkMsRUFBRSxDQUFBO1FBQzlELE1BQU0seUJBQVUsQ0FBQyxxQ0FBcUMsRUFBRSxDQUFBO1FBQ3hELE1BQU0seUJBQVU7YUFDYixnQ0FBZ0MsRUFBRTthQUNsQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLGVBQU0sQ0FBQyxLQUFLLENBQUMsOERBQThELEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFDMUcsQ0FBQztJQUVTLEtBQUssQ0FBQyxVQUFVO1FBQ3hCLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUNuQyxDQUFDO0lBRVMsS0FBSyxDQUFDLE9BQU87UUFDckIsTUFBTSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUE7SUFDM0IsQ0FBQztDQUNGO0FBekJELHNDQXlCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluaXRpYXRlIH0gZnJvbSAnQGJlZWNvZGUvbXNoLW5vZGUtYXBwJ1xuaW1wb3J0IHsgZmlsZVNlcnZpY2UgfSBmcm9tICdzcmMvc2VydmljZS9maWxlLXNlcnZpY2UnXG5pbXBvcnQgeyBnaXRVc2VDYXNlIH0gZnJvbSAnc3JjL3VzZS1jYXNlL2dpdC11c2UtY2FzZSdcbmltcG9ydCB7IGNvbnN0YW50IH0gZnJvbSAnc3JjL3V0aWwvY29uc3RhbnQnXG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICdzcmMvdXRpbC9sb2dnZXInXG5cbmV4cG9ydCBjbGFzcyBDbG9uZUluaXRpYXRlIGV4dGVuZHMgSW5pdGlhdGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5Mb2dnZXIgPSBsb2dnZXJcbiAgfVxuICBwdWJsaWMgZ2V0IE5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ0Nsb25lJ1xuICB9XG5cbiAgcHJvdGVjdGVkIGFzeW5jIF9jbG9uZUFjdGlvbigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBhd2FpdCBnaXRVc2VDYXNlLmNsZWFuQW5kR2V0TmV3Q29weU9mVGVtcGxhdGVSZXBvKClcbiAgICBhd2FpdCBnaXRVc2VDYXNlLmV4dHJhY3RBbmRSZW1vdmVaaXBGaWxlQW5kUHJlcGFyZVRlbXBGb2xkZXIoKVxuICAgIGF3YWl0IGdpdFVzZUNhc2UucmVuZGVyQWxsVGVtcGxhdGVXaXRoVmFsdWVzRnJvbUNvbmZpZygpXG4gICAgYXdhaXQgZ2l0VXNlQ2FzZVxuICAgICAgLmNvcHlGaWxlc0Zyb21CYXNlSWZUaGV5RG9udEV4aXN0KClcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBsb2dnZXIuZXJyb3IoJ1NvbWUgZmlsZSBhbHJlYWR5IGV4aXN0LCB5b3UgbmVlZCB0byBjb21wYXJlIGZvbGRlciBtYW51YWxseScsIHsgZXJyIH0pKVxuICB9XG5cbiAgcHJvdGVjdGVkIGFzeW5jIF9kZXN0cm95Rm4oKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh1bmRlZmluZWQpXG4gIH1cblxuICBwcm90ZWN0ZWQgYXN5bmMgX2luaXRGbigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBhd2FpdCB0aGlzLl9jbG9uZUFjdGlvbigpXG4gIH1cbn1cbiJdfQ==