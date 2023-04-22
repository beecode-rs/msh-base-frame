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
//# sourceMappingURL=validation-util.js.map