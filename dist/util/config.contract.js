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
Object.defineProperty(exports, "__esModule", { value: true });
const config = __importStar(require("./config"));
const contractor_factory_1 = require("@beecode/msh-test-contractor/lib/contract/contractor-factory");
const dummyConfig = { template: { projectName: 'test-project' }, gitZipUrl: 'https://test.local' };
exports.default = (0, contractor_factory_1.contractFactory)({
    module: config,
    subjectName: 'config',
    mock: () => {
        config.config._conf = dummyConfig;
        return [];
    },
}, {
    get: {
        terms: [
            {
                params: [],
                result: dummyConfig,
            },
        ],
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmNvbnRyYWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWwvY29uZmlnLmNvbnRyYWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlEQUFrQztBQUNsQyxxR0FBOEY7QUFHOUYsTUFBTSxXQUFXLEdBQUcsRUFBRSxRQUFRLEVBQUUsRUFBRSxXQUFXLEVBQUUsY0FBYyxFQUFFLEVBQUUsU0FBUyxFQUFFLG9CQUFvQixFQUFFLENBQUE7QUFFbEcsa0JBQWUsSUFBQSxvQ0FBZSxFQUM1QjtJQUNFLE1BQU0sRUFBRSxNQUFNO0lBQ2QsV0FBVyxFQUFFLFFBQVE7SUFDckIsSUFBSSxFQUFFLEdBQTBCLEVBQUU7UUFDaEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFBO1FBQ2pDLE9BQU8sRUFBRSxDQUFBO0lBQ1gsQ0FBQztDQUNGLEVBQ0Q7SUFDRSxHQUFHLEVBQUU7UUFDSCxLQUFLLEVBQUU7WUFDTDtnQkFDRSxNQUFNLEVBQUUsRUFBRTtnQkFDVixNQUFNLEVBQUUsV0FBVzthQUNwQjtTQUNGO0tBQ0Y7Q0FDRixDQUNGLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjb25maWcgZnJvbSAnLi9jb25maWcnXG5pbXBvcnQgeyBjb250cmFjdEZhY3RvcnkgfSBmcm9tICdAYmVlY29kZS9tc2gtdGVzdC1jb250cmFjdG9yL2xpYi9jb250cmFjdC9jb250cmFjdG9yLWZhY3RvcnknXG5pbXBvcnQgeyBDb250cmFjdE1vY2tSZXZlcnRGbnMgfSBmcm9tICdAYmVlY29kZS9tc2gtdGVzdC1jb250cmFjdG9yL2xpYi90eXBlcydcblxuY29uc3QgZHVtbXlDb25maWcgPSB7IHRlbXBsYXRlOiB7IHByb2plY3ROYW1lOiAndGVzdC1wcm9qZWN0JyB9LCBnaXRaaXBVcmw6ICdodHRwczovL3Rlc3QubG9jYWwnIH1cblxuZXhwb3J0IGRlZmF1bHQgY29udHJhY3RGYWN0b3J5KFxuICB7XG4gICAgbW9kdWxlOiBjb25maWcsXG4gICAgc3ViamVjdE5hbWU6ICdjb25maWcnLFxuICAgIG1vY2s6ICgpOiBDb250cmFjdE1vY2tSZXZlcnRGbnMgPT4ge1xuICAgICAgY29uZmlnLmNvbmZpZy5fY29uZiA9IGR1bW15Q29uZmlnXG4gICAgICByZXR1cm4gW11cbiAgICB9LFxuICB9LFxuICB7XG4gICAgZ2V0OiB7XG4gICAgICB0ZXJtczogW1xuICAgICAgICB7XG4gICAgICAgICAgcGFyYW1zOiBbXSxcbiAgICAgICAgICByZXN1bHQ6IGR1bW15Q29uZmlnLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICB9XG4pXG4iXX0=