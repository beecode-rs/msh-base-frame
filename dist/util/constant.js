"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.constant = void 0;
const path_1 = __importDefault(require("path"));
const config_1 = require("../util/config");
const constant = () => {
    const tempFolderPath = (0, config_1.config)().localTemplateFolder ?? path_1.default.resolve(process.cwd(), './.base-frame-tmp/');
    const templateZipName = 'template.zip';
    return Object.freeze({
        configFilePath: path_1.default.resolve(process.cwd(), './.base-frame'),
        tempFolderPath,
        templateZipName,
        templateZipPath: path_1.default.resolve(tempFolderPath, `./${templateZipName}`),
    });
};
exports.constant = constant;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RhbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbC9jb25zdGFudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxnREFBdUI7QUFDdkIsNENBQXdDO0FBU2pDLE1BQU0sUUFBUSxHQUFHLEdBQW1CLEVBQUU7SUFDNUMsTUFBTSxjQUFjLEdBQUcsSUFBQSxlQUFNLEdBQUUsQ0FBQyxtQkFBbUIsSUFBSSxjQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxvQkFBb0IsQ0FBQyxDQUFBO0lBQ3hHLE1BQU0sZUFBZSxHQUFHLGNBQWMsQ0FBQTtJQUV0QyxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQWlCO1FBQ3BDLGNBQWMsRUFBRSxjQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxlQUFlLENBQUM7UUFDNUQsY0FBYztRQUNkLGVBQWU7UUFDZixlQUFlLEVBQUUsY0FBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsS0FBSyxlQUFlLEVBQUUsQ0FBQztLQUNyRSxDQUFDLENBQUE7QUFDSCxDQUFDLENBQUE7QUFWWSxRQUFBLFFBQVEsWUFVcEIifQ==