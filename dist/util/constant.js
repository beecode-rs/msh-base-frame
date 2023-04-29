"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.constant = void 0;
const pattern_1 = require("@beecode/msh-util/lib/singleton/pattern");
const path_1 = __importDefault(require("path"));
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
exports.constant = (0, pattern_1.singletonPattern)(() => {
    return {
        configFilePath: path_1.default.resolve(process.cwd(), './.base-frame'),
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RhbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbC9jb25zdGFudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxxRUFBMEU7QUFDMUUsZ0RBQXVCO0FBRXZCLDRFQUE0RTtBQUMvRCxRQUFBLFFBQVEsR0FBRyxJQUFBLDBCQUFnQixFQUFDLEdBQUcsRUFBRTtJQUM3QyxPQUFPO1FBQ04sY0FBYyxFQUFFLGNBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLGVBQWUsQ0FBQztLQUNuRCxDQUFBO0FBQ1gsQ0FBQyxDQUFDLENBQUEifQ==