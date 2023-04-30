"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const constant = __importStar(require("./constant"));
const contractor_factory_1 = require("@beecode/msh-test-contractor/lib/contract/contractor-factory");
const special_fn_name_1 = require("@beecode/msh-test-contractor/lib/enum/special-fn-name");
exports.default = (0, contractor_factory_1.contractFactory)({
    mock: () => {
        const spyCwd = jest.spyOn(process, 'cwd');
        spyCwd.mockReturnValue('/home/dummy');
        return [() => spyCwd.mockRestore()];
    },
    module: constant,
    subjectName: 'constant',
}, {
    [special_fn_name_1.SpecialFnName.SELF]: {
        terms: [
            {
                params: [],
                result: {
                    configFilePath: '/home/dummy/.base-frame',
                    tempFolderPath: '/home/dummy/.base-frame-tmp',
                    templateZipName: 'template.zip',
                    templateZipPath: '/home/dummy/.base-frame-tmp/template.zip',
                },
            },
        ],
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RhbnQuY29udHJhY3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbC9jb25zdGFudC5jb250cmFjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscURBQXNDO0FBQ3RDLHFHQUE4RjtBQUM5RiwyRkFBcUY7QUFHckYsa0JBQWUsSUFBQSxvQ0FBZSxFQUM3QjtJQUNDLElBQUksRUFBRSxHQUEwQixFQUFFO1FBQ2pDLE1BQU0sTUFBTSxHQUFxQixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQTtRQUMzRCxNQUFNLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxDQUFBO1FBRXJDLE9BQU8sQ0FBQyxHQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQTtJQUMxQyxDQUFDO0lBQ0QsTUFBTSxFQUFFLFFBQVE7SUFDaEIsV0FBVyxFQUFFLFVBQVU7Q0FDdkIsRUFDRDtJQUNDLENBQUMsK0JBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNyQixLQUFLLEVBQUU7WUFDTjtnQkFDQyxNQUFNLEVBQUUsRUFBRTtnQkFDVixNQUFNLEVBQUU7b0JBQ1AsY0FBYyxFQUFFLHlCQUF5QjtvQkFDekMsY0FBYyxFQUFFLDZCQUE2QjtvQkFDN0MsZUFBZSxFQUFFLGNBQWM7b0JBQy9CLGVBQWUsRUFBRSwwQ0FBMEM7aUJBQzNEO2FBQ0Q7U0FDRDtLQUNEO0NBQ0QsQ0FDRCxDQUFBIn0=