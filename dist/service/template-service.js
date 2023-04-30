"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.templateService = void 0;
const mustache_1 = __importDefault(require("mustache"));
const file_service_1 = require("../service/file-service");
const config_1 = require("../util/config");
exports.templateService = {
    render: (template, templateValues) => {
        return mustache_1.default.render(template, templateValues);
    },
    renderAndOverrideFile: async (filePath) => {
        const renderedContent = await exports.templateService.renderFile(filePath, (0, config_1.config)().template);
        await file_service_1.fileService.writeToFile(filePath, renderedContent);
    },
    renderFile: async (filePath, templateValues) => {
        const fileContent = await file_service_1.fileService.readFile(filePath);
        return exports.templateService.render(fileContent, templateValues);
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUtc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlL3RlbXBsYXRlLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsd0RBQStCO0FBQy9CLDJEQUFzRDtBQUN0RCw0Q0FBd0M7QUFFM0IsUUFBQSxlQUFlLEdBQUc7SUFDOUIsTUFBTSxFQUFFLENBQUMsUUFBZ0IsRUFBRSxjQUFtQixFQUFVLEVBQUU7UUFDekQsT0FBTyxrQkFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsY0FBYyxDQUFDLENBQUE7SUFDakQsQ0FBQztJQUNELHFCQUFxQixFQUFFLEtBQUssRUFBRSxRQUFnQixFQUFpQixFQUFFO1FBQ2hFLE1BQU0sZUFBZSxHQUFHLE1BQU0sdUJBQWUsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLElBQUEsZUFBTSxHQUFFLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDckYsTUFBTSwwQkFBVyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsZUFBZSxDQUFDLENBQUE7SUFDekQsQ0FBQztJQUNELFVBQVUsRUFBRSxLQUFLLEVBQUUsUUFBZ0IsRUFBRSxjQUFtQixFQUFtQixFQUFFO1FBQzVFLE1BQU0sV0FBVyxHQUFHLE1BQU0sMEJBQVcsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUE7UUFFeEQsT0FBTyx1QkFBZSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsY0FBYyxDQUFDLENBQUE7SUFDM0QsQ0FBQztDQUNELENBQUEifQ==