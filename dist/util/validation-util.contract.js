"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi11dGlsLmNvbnRyYWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWwvdmFsaWRhdGlvbi11dGlsLmNvbnRyYWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtFQUFtRDtBQUNuRCxxR0FBOEY7QUFDOUYsOENBQXFCO0FBRXJCLGtCQUFlLElBQUEsb0NBQWUsRUFDNUIsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxFQUN6RDtJQUNFLFFBQVEsRUFBRTtRQUNSLEtBQUssRUFBRTtZQUNMO2dCQUNFLE1BQU0sRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxFQUFFLGFBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsYUFBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDaEYsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTthQUN6QjtZQUNEO2dCQUNFLE1BQU0sRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEVBQUUsYUFBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxhQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUNoRyxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFO2FBQ3pCO1NBQ0Y7S0FDRjtJQUNELFFBQVEsRUFBRTtRQUNSLEtBQUssRUFBRTtZQUNMO2dCQUNFLE1BQU0sRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxFQUFFLGFBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsYUFBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDaEYsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTthQUN6QjtZQUNEO2dCQUNFLE1BQU0sRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEVBQUUsYUFBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxhQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUNoRyxNQUFNLEVBQUUsSUFBSSxLQUFLLENBQUMsd0JBQXdCLENBQUM7YUFDNUM7U0FDRjtLQUNGO0NBQ0YsQ0FDRixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgdmFsaWRhdGlvblV0aWwgZnJvbSAnLi92YWxpZGF0aW9uLXV0aWwnXG5pbXBvcnQgeyBjb250cmFjdEZhY3RvcnkgfSBmcm9tICdAYmVlY29kZS9tc2gtdGVzdC1jb250cmFjdG9yL2xpYi9jb250cmFjdC9jb250cmFjdG9yLWZhY3RvcnknXG5pbXBvcnQgSm9pIGZyb20gJ2pvaSdcblxuZXhwb3J0IGRlZmF1bHQgY29udHJhY3RGYWN0b3J5KFxuICB7IG1vZHVsZTogdmFsaWRhdGlvblV0aWwsIHN1YmplY3ROYW1lOiAndmFsaWRhdGlvblV0aWwnIH0sXG4gIHtcbiAgICBzYW5pdGl6ZToge1xuICAgICAgdGVybXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHBhcmFtczogW3sgdGVzdDogJ3Rlc3QnIH0sIEpvaS5vYmplY3QoKS5rZXlzKHsgdGVzdDogSm9pLnN0cmluZygpLnJlcXVpcmVkKCkgfSldLFxuICAgICAgICAgIHJlc3VsdDogeyB0ZXN0OiAndGVzdCcgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhcmFtczogW3sgdGVzdDogJ3Rlc3QnLCB0ZXN0MjogJ3Rlc3QyJyB9LCBKb2kub2JqZWN0KCkua2V5cyh7IHRlc3Q6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpIH0pXSxcbiAgICAgICAgICByZXN1bHQ6IHsgdGVzdDogJ3Rlc3QnIH0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAgdmFsaWRhdGU6IHtcbiAgICAgIHRlcm1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwYXJhbXM6IFt7IHRlc3Q6ICd0ZXN0JyB9LCBKb2kub2JqZWN0KCkua2V5cyh7IHRlc3Q6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpIH0pXSxcbiAgICAgICAgICByZXN1bHQ6IHsgdGVzdDogJ3Rlc3QnIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYXJhbXM6IFt7IHRlc3Q6ICd0ZXN0JywgdGVzdDI6ICd0ZXN0MicgfSwgSm9pLm9iamVjdCgpLmtleXMoeyB0ZXN0OiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSB9KV0sXG4gICAgICAgICAgcmVzdWx0OiBuZXcgRXJyb3IoXCIndGVzdDInIGlzIG5vdCBhbGxvd2VkXCIpLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICB9XG4pXG4iXX0=