"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.constant = void 0;
const path_1 = __importDefault(require("path"));
const constant = () => {
    const tempFolderPath = path_1.default.resolve(process.cwd(), './.base-frame-tmp/');
    const templateZipName = 'template.zip';
    return Object.freeze({
        configFilePath: path_1.default.resolve(process.cwd(), './.base-frame'),
        tempFolderPath,
        templateZipName,
        templateZipPath: path_1.default.resolve(tempFolderPath, `./${templateZipName}`),
    });
};
exports.constant = constant;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RhbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbC9jb25zdGFudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxnREFBdUI7QUFTaEIsTUFBTSxRQUFRLEdBQUcsR0FBbUIsRUFBRTtJQUMzQyxNQUFNLGNBQWMsR0FBRyxjQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxvQkFBb0IsQ0FBQyxDQUFBO0lBQ3hFLE1BQU0sZUFBZSxHQUFHLGNBQWMsQ0FBQTtJQUV0QyxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQWlCO1FBQ25DLGNBQWMsRUFBRSxjQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxlQUFlLENBQUM7UUFDNUQsY0FBYztRQUNkLGVBQWU7UUFDZixlQUFlLEVBQUUsY0FBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsS0FBSyxlQUFlLEVBQUUsQ0FBQztLQUN0RSxDQUFDLENBQUE7QUFDSixDQUFDLENBQUE7QUFWWSxRQUFBLFFBQVEsWUFVcEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuXG5leHBvcnQgdHlwZSBDb25zdGFudFJlc3VsdCA9IHtcbiAgY29uZmlnRmlsZVBhdGg6IHN0cmluZ1xuICB0ZW1wRm9sZGVyUGF0aDogc3RyaW5nXG4gIHRlbXBsYXRlWmlwTmFtZTogc3RyaW5nXG4gIHRlbXBsYXRlWmlwUGF0aDogc3RyaW5nXG59XG5cbmV4cG9ydCBjb25zdCBjb25zdGFudCA9ICgpOiBDb25zdGFudFJlc3VsdCA9PiB7XG4gIGNvbnN0IHRlbXBGb2xkZXJQYXRoID0gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksICcuLy5iYXNlLWZyYW1lLXRtcC8nKVxuICBjb25zdCB0ZW1wbGF0ZVppcE5hbWUgPSAndGVtcGxhdGUuemlwJ1xuXG4gIHJldHVybiBPYmplY3QuZnJlZXplPENvbnN0YW50UmVzdWx0Pih7XG4gICAgY29uZmlnRmlsZVBhdGg6IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCAnLi8uYmFzZS1mcmFtZScpLFxuICAgIHRlbXBGb2xkZXJQYXRoLFxuICAgIHRlbXBsYXRlWmlwTmFtZSxcbiAgICB0ZW1wbGF0ZVppcFBhdGg6IHBhdGgucmVzb2x2ZSh0ZW1wRm9sZGVyUGF0aCwgYC4vJHt0ZW1wbGF0ZVppcE5hbWV9YCksXG4gIH0pXG59XG4iXX0=