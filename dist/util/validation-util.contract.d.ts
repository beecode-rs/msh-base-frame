import * as validationUtil from './validation-util';
import Joi from 'joi';
declare const _default: import("@beecode/msh-test-contractor/lib/types").Contract<typeof validationUtil, "validationUtil", {
    sanitize: <T>(objectToValidate: any, schema: Joi.Schema<T>) => T;
    validate: <T_1>(objectToValidate: any, schema: Joi.Schema<T_1>) => T_1;
}>;
export default _default;
//# sourceMappingURL=validation-util.contract.d.ts.map