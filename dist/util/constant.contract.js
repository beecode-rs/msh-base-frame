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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RhbnQuY29udHJhY3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbC9jb25zdGFudC5jb250cmFjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxREFBc0M7QUFDdEMscUdBQThGO0FBQzlGLDJGQUFxRjtBQUdyRixrQkFBZSxJQUFBLG9DQUFlLEVBQzVCO0lBQ0UsTUFBTSxFQUFFLFFBQVE7SUFDaEIsV0FBVyxFQUFFLFVBQVU7SUFDdkIsSUFBSSxFQUFFLEdBQTBCLEVBQUU7UUFDaEMsTUFBTSxNQUFNLEdBQXFCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFBO1FBQzNELE1BQU0sQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLENBQUE7UUFDckMsT0FBTyxDQUFDLEdBQVMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFBO0lBQzNDLENBQUM7Q0FDRixFQUNEO0lBQ0UsQ0FBQywrQkFBYSxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ3BCLEtBQUssRUFBRTtZQUNMO2dCQUNFLE1BQU0sRUFBRSxFQUFFO2dCQUNWLE1BQU0sRUFBRTtvQkFDTixjQUFjLEVBQUUseUJBQXlCO29CQUN6QyxjQUFjLEVBQUUsNkJBQTZCO29CQUM3QyxlQUFlLEVBQUUsY0FBYztvQkFDL0IsZUFBZSxFQUFFLDBDQUEwQztpQkFDNUQ7YUFDRjtTQUNGO0tBQ0Y7Q0FDRixDQUNGLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjb25zdGFudCBmcm9tICcuL2NvbnN0YW50J1xuaW1wb3J0IHsgY29udHJhY3RGYWN0b3J5IH0gZnJvbSAnQGJlZWNvZGUvbXNoLXRlc3QtY29udHJhY3Rvci9saWIvY29udHJhY3QvY29udHJhY3Rvci1mYWN0b3J5J1xuaW1wb3J0IHsgU3BlY2lhbEZuTmFtZSB9IGZyb20gJ0BiZWVjb2RlL21zaC10ZXN0LWNvbnRyYWN0b3IvbGliL2VudW0vc3BlY2lhbC1mbi1uYW1lJ1xuaW1wb3J0IHsgQ29udHJhY3RNb2NrUmV2ZXJ0Rm5zIH0gZnJvbSAnQGJlZWNvZGUvbXNoLXRlc3QtY29udHJhY3Rvci9saWIvdHlwZXMnXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRyYWN0RmFjdG9yeShcbiAge1xuICAgIG1vZHVsZTogY29uc3RhbnQsXG4gICAgc3ViamVjdE5hbWU6ICdjb25zdGFudCcsXG4gICAgbW9jazogKCk6IENvbnRyYWN0TW9ja1JldmVydEZucyA9PiB7XG4gICAgICBjb25zdCBzcHlDd2Q6IGplc3QuU3B5SW5zdGFuY2UgPSBqZXN0LnNweU9uKHByb2Nlc3MsICdjd2QnKVxuICAgICAgc3B5Q3dkLm1vY2tSZXR1cm5WYWx1ZSgnL2hvbWUvZHVtbXknKVxuICAgICAgcmV0dXJuIFsoKTogdm9pZCA9PiBzcHlDd2QubW9ja1Jlc3RvcmUoKV1cbiAgICB9LFxuICB9LFxuICB7XG4gICAgW1NwZWNpYWxGbk5hbWUuU0VMRl06IHtcbiAgICAgIHRlcm1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwYXJhbXM6IFtdLFxuICAgICAgICAgIHJlc3VsdDoge1xuICAgICAgICAgICAgY29uZmlnRmlsZVBhdGg6ICcvaG9tZS9kdW1teS8uYmFzZS1mcmFtZScsXG4gICAgICAgICAgICB0ZW1wRm9sZGVyUGF0aDogJy9ob21lL2R1bW15Ly5iYXNlLWZyYW1lLXRtcCcsXG4gICAgICAgICAgICB0ZW1wbGF0ZVppcE5hbWU6ICd0ZW1wbGF0ZS56aXAnLFxuICAgICAgICAgICAgdGVtcGxhdGVaaXBQYXRoOiAnL2hvbWUvZHVtbXkvLmJhc2UtZnJhbWUtdG1wL3RlbXBsYXRlLnppcCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgfVxuKVxuIl19