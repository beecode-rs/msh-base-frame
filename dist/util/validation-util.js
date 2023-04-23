"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationUtil = void 0;
const joi_util_1 = require("@beecode/msh-util/lib/joi-util");
exports.validationUtil = {
    sanitize: (objectToValidate, schema) => {
        return new joi_util_1.JoiUtil().sanitize(objectToValidate, schema);
    },
    validate: (objectToValidate, schema) => {
        return new joi_util_1.JoiUtil().validate(objectToValidate, schema);
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi11dGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWwvdmFsaWRhdGlvbi11dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZEQUF3RDtBQUczQyxRQUFBLGNBQWMsR0FBRztJQUM3QixRQUFRLEVBQUUsQ0FBSSxnQkFBa0MsRUFBRSxNQUFtQyxFQUFLLEVBQUU7UUFDM0YsT0FBTyxJQUFJLGtCQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsTUFBTSxDQUFDLENBQUE7SUFDeEQsQ0FBQztJQUNELFFBQVEsRUFBRSxDQUFJLGdCQUFrQyxFQUFFLE1BQW1DLEVBQUssRUFBRTtRQUMzRixPQUFPLElBQUksa0JBQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxNQUFNLENBQUMsQ0FBQTtJQUN4RCxDQUFDO0NBQ0QsQ0FBQSJ9