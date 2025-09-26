import { type ZodType, type z } from '#src/lib/zod-wrapper'

export const validationUtil = {
	parse: <T extends ZodType>(objectToValidate: unknown, schema: T): z.infer<T> => {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-call
		return schema.parse(objectToValidate) as z.infer<T>
	},
}
