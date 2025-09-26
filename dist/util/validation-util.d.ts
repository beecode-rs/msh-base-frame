import { type ZodType, type z } from '#src/lib/zod-wrapper';
export declare const validationUtil: {
    parse: <T extends ZodType>(objectToValidate: unknown, schema: T) => z.infer<T>;
};
//# sourceMappingURL=validation-util.d.ts.map