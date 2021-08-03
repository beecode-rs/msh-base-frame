"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationUtil = void 0;
const msh_node_util_1 = require("@beecode/msh-node-util");
const logger_1 = require("src/util/logger");
exports.validationUtil = {
    sanitize: (objectToValidate, schema) => msh_node_util_1.joiUtil.sanitize(objectToValidate, schema, { logger: logger_1.logger }),
    validate: (objectToValidate, schema) => msh_node_util_1.joiUtil.validate(objectToValidate, schema, { logger: logger_1.logger }),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi11dGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWwvdmFsaWRhdGlvbi11dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDBEQUFnRDtBQUVoRCw0Q0FBd0M7QUFFM0IsUUFBQSxjQUFjLEdBQUc7SUFDNUIsUUFBUSxFQUFFLENBQUksZ0JBQWtDLEVBQUUsTUFBbUMsRUFBSyxFQUFFLENBQzFGLHVCQUFPLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxFQUFFLE1BQU0sRUFBTixlQUFNLEVBQUUsQ0FBQztJQUN4RCxRQUFRLEVBQUUsQ0FBSSxnQkFBa0MsRUFBRSxNQUFtQyxFQUFLLEVBQUUsQ0FDMUYsdUJBQU8sQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLEVBQUUsTUFBTSxFQUFOLGVBQU0sRUFBRSxDQUFDO0NBQ3pELENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBqb2lVdGlsIH0gZnJvbSAnQGJlZWNvZGUvbXNoLW5vZGUtdXRpbCdcbmltcG9ydCB7IE9iamVjdFNjaGVtYSwgU2NoZW1hIH0gZnJvbSAnam9pJ1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnc3JjL3V0aWwvbG9nZ2VyJ1xuXG5leHBvcnQgY29uc3QgdmFsaWRhdGlvblV0aWwgPSB7XG4gIHNhbml0aXplOiA8VD4ob2JqZWN0VG9WYWxpZGF0ZTogUGFydGlhbDxUPiB8IGFueSwgc2NoZW1hOiBTY2hlbWE8VD4gfCBPYmplY3RTY2hlbWE8VD4pOiBUID0+XG4gICAgam9pVXRpbC5zYW5pdGl6ZShvYmplY3RUb1ZhbGlkYXRlLCBzY2hlbWEsIHsgbG9nZ2VyIH0pLFxuICB2YWxpZGF0ZTogPFQ+KG9iamVjdFRvVmFsaWRhdGU6IFBhcnRpYWw8VD4gfCBhbnksIHNjaGVtYTogU2NoZW1hPFQ+IHwgT2JqZWN0U2NoZW1hPFQ+KTogVCA9PlxuICAgIGpvaVV0aWwudmFsaWRhdGUob2JqZWN0VG9WYWxpZGF0ZSwgc2NoZW1hLCB7IGxvZ2dlciB9KSxcbn1cbiJdfQ==