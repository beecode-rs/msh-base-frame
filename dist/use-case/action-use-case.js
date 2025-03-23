import { gitUseCase } from '#src/use-case/git-use-case';
import { logger } from '#src/util/logger';
export const actionUseCase = {
    clone: async () => {
        await gitUseCase.cleanAndGetNewCopyOfTemplateRepo();
        await gitUseCase.extractAndRemoveZipFileAndPrepareTempFolder();
        await gitUseCase.renderAllTemplateWithValuesFromConfig();
        await gitUseCase.copyFilesFromBaseIfTheyDontExist().catch((err) => {
            if (err instanceof Error) {
                logger().error('Some file already exist, you need to compare folder manually', { errorMessage: err.message });
                return;
            }
            logger().error('Some file already exist, you need to compare folder manually', { err });
        });
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLXVzZS1jYXNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3VzZS1jYXNlL2FjdGlvbi11c2UtY2FzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sNEJBQTRCLENBQUE7QUFDdkQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGtCQUFrQixDQUFBO0FBRXpDLE1BQU0sQ0FBQyxNQUFNLGFBQWEsR0FBRztJQUM1QixLQUFLLEVBQUUsS0FBSyxJQUFtQixFQUFFO1FBQ2hDLE1BQU0sVUFBVSxDQUFDLGdDQUFnQyxFQUFFLENBQUE7UUFDbkQsTUFBTSxVQUFVLENBQUMsMkNBQTJDLEVBQUUsQ0FBQTtRQUM5RCxNQUFNLFVBQVUsQ0FBQyxxQ0FBcUMsRUFBRSxDQUFBO1FBQ3hELE1BQU0sVUFBVSxDQUFDLGdDQUFnQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBWSxFQUFFLEVBQUU7WUFDMUUsSUFBSSxHQUFHLFlBQVksS0FBSyxFQUFFLENBQUM7Z0JBQzFCLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQyw4REFBOEQsRUFBRSxFQUFFLFlBQVksRUFBRSxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQTtnQkFFN0csT0FBTTtZQUNQLENBQUM7WUFDRCxNQUFNLEVBQUUsQ0FBQyxLQUFLLENBQUMsOERBQThELEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFBO1FBQ3hGLENBQUMsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztDQUNELENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnaXRVc2VDYXNlIH0gZnJvbSAnI3NyYy91c2UtY2FzZS9naXQtdXNlLWNhc2UnXG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICcjc3JjL3V0aWwvbG9nZ2VyJ1xuXG5leHBvcnQgY29uc3QgYWN0aW9uVXNlQ2FzZSA9IHtcblx0Y2xvbmU6IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHRhd2FpdCBnaXRVc2VDYXNlLmNsZWFuQW5kR2V0TmV3Q29weU9mVGVtcGxhdGVSZXBvKClcblx0XHRhd2FpdCBnaXRVc2VDYXNlLmV4dHJhY3RBbmRSZW1vdmVaaXBGaWxlQW5kUHJlcGFyZVRlbXBGb2xkZXIoKVxuXHRcdGF3YWl0IGdpdFVzZUNhc2UucmVuZGVyQWxsVGVtcGxhdGVXaXRoVmFsdWVzRnJvbUNvbmZpZygpXG5cdFx0YXdhaXQgZ2l0VXNlQ2FzZS5jb3B5RmlsZXNGcm9tQmFzZUlmVGhleURvbnRFeGlzdCgpLmNhdGNoKChlcnI6IHVua25vd24pID0+IHtcblx0XHRcdGlmIChlcnIgaW5zdGFuY2VvZiBFcnJvcikge1xuXHRcdFx0XHRsb2dnZXIoKS5lcnJvcignU29tZSBmaWxlIGFscmVhZHkgZXhpc3QsIHlvdSBuZWVkIHRvIGNvbXBhcmUgZm9sZGVyIG1hbnVhbGx5JywgeyBlcnJvck1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pXG5cblx0XHRcdFx0cmV0dXJuXG5cdFx0XHR9XG5cdFx0XHRsb2dnZXIoKS5lcnJvcignU29tZSBmaWxlIGFscmVhZHkgZXhpc3QsIHlvdSBuZWVkIHRvIGNvbXBhcmUgZm9sZGVyIG1hbnVhbGx5JywgeyBlcnIgfSlcblx0XHR9KVxuXHR9LFxufVxuIl19