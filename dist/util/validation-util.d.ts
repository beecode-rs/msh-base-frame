import { type ObjectSchema, type Schema } from 'joi';
export declare const validationUtil: {
    sanitize: <T>(objectToValidate: Partial<T> | any, schema: Schema<T> | ObjectSchema<T>) => T;
    validate: <T>(objectToValidate: Partial<T> | any, schema: Schema<T> | ObjectSchema<T>) => T;
};
//# sourceMappingURL=validation-util.d.ts.map