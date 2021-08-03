"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.constant = void 0;
const path_1 = __importDefault(require("path"));
const tempFolderPath = path_1.default.resolve(process.cwd(), './.base-frame-tmp/');
const templateZipName = 'template.zip';
exports.constant = {
    configFilePath: path_1.default.resolve(process.cwd(), './.base-frame'),
    tempFolderPath,
    templateZipName,
    templateZipPath: path_1.default.resolve(tempFolderPath, `./${templateZipName}`),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RhbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbC9jb25zdGFudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxnREFBdUI7QUFFdkIsTUFBTSxjQUFjLEdBQUcsY0FBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsb0JBQW9CLENBQUMsQ0FBQTtBQUN4RSxNQUFNLGVBQWUsR0FBRyxjQUFjLENBQUE7QUFFekIsUUFBQSxRQUFRLEdBQUc7SUFDdEIsY0FBYyxFQUFFLGNBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLGVBQWUsQ0FBQztJQUM1RCxjQUFjO0lBQ2QsZUFBZTtJQUNmLGVBQWUsRUFBRSxjQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxLQUFLLGVBQWUsRUFBRSxDQUFDO0NBQ3RFLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuXG5jb25zdCB0ZW1wRm9sZGVyUGF0aCA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCAnLi8uYmFzZS1mcmFtZS10bXAvJylcbmNvbnN0IHRlbXBsYXRlWmlwTmFtZSA9ICd0ZW1wbGF0ZS56aXAnXG5cbmV4cG9ydCBjb25zdCBjb25zdGFudCA9IHtcbiAgY29uZmlnRmlsZVBhdGg6IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCAnLi8uYmFzZS1mcmFtZScpLFxuICB0ZW1wRm9sZGVyUGF0aCxcbiAgdGVtcGxhdGVaaXBOYW1lLFxuICB0ZW1wbGF0ZVppcFBhdGg6IHBhdGgucmVzb2x2ZSh0ZW1wRm9sZGVyUGF0aCwgYC4vJHt0ZW1wbGF0ZVppcE5hbWV9YCksXG59XG4iXX0=