import { type ZodType, type z } from '#src/lib/zod-adapter'

export const validationUtil = {
	parse: <T extends ZodType>(objectToValidate: unknown, schema: T): z.infer<T> => {
		return schema.parse(objectToValidate) as z.infer<T>
	},
}
