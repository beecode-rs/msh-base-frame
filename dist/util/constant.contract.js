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
    module: constant,
    subjectName: 'constant',
    mock: () => {
        const spyCwd = jest.spyOn(process, 'cwd');
        spyCwd.mockReturnValue('/home/dummy');
        return [() => spyCwd.mockRestore()];
    },
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
//# sourceMappingURL=constant.contract.js.map