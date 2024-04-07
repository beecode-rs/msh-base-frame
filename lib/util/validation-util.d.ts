import { ObjectSchema, Schema } from 'joi';
export declare const validationUtil: {
    sanitize: <T>(objectToValidate: Partial<T> | any, schema: Schema<T> | ObjectSchema<T>) => T;
    validate: <T_1>(objectToValidate: any, schema: Schema<T_1>) => T_1;
};
//# sourceMappingURL=validation-util.d.ts.map