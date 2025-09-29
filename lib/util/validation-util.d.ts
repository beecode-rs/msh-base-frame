import { type ZodType, type z } from '../lib/zod-adapter.js';
export declare const validationUtil: {
    parse: <T extends ZodType>(objectToValidate: unknown, schema: T) => z.infer<T>;
};
//# sourceMappingURL=validation-util.d.ts.map