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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validationUtil = __importStar(require("./validation-util"));
const contractor_factory_1 = require("@beecode/msh-test-contractor/lib/contract/contractor-factory");
const joi_1 = __importDefault(require("joi"));
exports.default = (0, contractor_factory_1.contractFactory)({ module: validationUtil, subjectName: 'validationUtil' }, {
    sanitize: {
        terms: [
            {
                params: [{ test: 'test' }, joi_1.default.object().keys({ test: joi_1.default.string().required() })],
                result: { test: 'test' },
            },
            {
                params: [{ test: 'test', test2: 'test2' }, joi_1.default.object().keys({ test: joi_1.default.string().required() })],
                result: { test: 'test' },
            },
        ],
    },
    validate: {
        terms: [
            {
                params: [{ test: 'test' }, joi_1.default.object().keys({ test: joi_1.default.string().required() })],
                result: { test: 'test' },
            },
            {
                params: [{ test: 'test', test2: 'test2' }, joi_1.default.object().keys({ test: joi_1.default.string().required() })],
                result: new Error("'test2' is not allowed"),
            },
        ],
    },
});
//# sourceMappingURL=validation-util.contract.js.map