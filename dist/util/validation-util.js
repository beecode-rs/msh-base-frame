"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationUtil = void 0;
const joi_util_1 = require("@beecode/msh-node-util/lib/joi-util");
const logger_1 = require("src/util/logger");
exports.validationUtil = {
    sanitize: (objectToValidate, schema) => joi_util_1.joiUtil.sanitize(objectToValidate, schema, { logger: logger_1.logger }),
    validate: (objectToValidate, schema) => joi_util_1.joiUtil.validate(objectToValidate, schema, { logger: logger_1.logger }),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi11dGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWwvdmFsaWRhdGlvbi11dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGtFQUE2RDtBQUU3RCw0Q0FBd0M7QUFFM0IsUUFBQSxjQUFjLEdBQUc7SUFDNUIsUUFBUSxFQUFFLENBQUksZ0JBQWtDLEVBQUUsTUFBbUMsRUFBSyxFQUFFLENBQzFGLGtCQUFPLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxFQUFFLE1BQU0sRUFBTixlQUFNLEVBQUUsQ0FBQztJQUN4RCxRQUFRLEVBQUUsQ0FBSSxnQkFBa0MsRUFBRSxNQUFtQyxFQUFLLEVBQUUsQ0FDMUYsa0JBQU8sQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLEVBQUUsTUFBTSxFQUFOLGVBQU0sRUFBRSxDQUFDO0NBQ3pELENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBqb2lVdGlsIH0gZnJvbSAnQGJlZWNvZGUvbXNoLW5vZGUtdXRpbC9saWIvam9pLXV0aWwnXG5pbXBvcnQgeyBPYmplY3RTY2hlbWEsIFNjaGVtYSB9IGZyb20gJ2pvaSdcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJ3NyYy91dGlsL2xvZ2dlcidcblxuZXhwb3J0IGNvbnN0IHZhbGlkYXRpb25VdGlsID0ge1xuICBzYW5pdGl6ZTogPFQ+KG9iamVjdFRvVmFsaWRhdGU6IFBhcnRpYWw8VD4gfCBhbnksIHNjaGVtYTogU2NoZW1hPFQ+IHwgT2JqZWN0U2NoZW1hPFQ+KTogVCA9PlxuICAgIGpvaVV0aWwuc2FuaXRpemUob2JqZWN0VG9WYWxpZGF0ZSwgc2NoZW1hLCB7IGxvZ2dlciB9KSxcbiAgdmFsaWRhdGU6IDxUPihvYmplY3RUb1ZhbGlkYXRlOiBQYXJ0aWFsPFQ+IHwgYW55LCBzY2hlbWE6IFNjaGVtYTxUPiB8IE9iamVjdFNjaGVtYTxUPik6IFQgPT5cbiAgICBqb2lVdGlsLnZhbGlkYXRlKG9iamVjdFRvVmFsaWRhdGUsIHNjaGVtYSwgeyBsb2dnZXIgfSksXG59XG4iXX0=