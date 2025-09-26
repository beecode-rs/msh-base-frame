import { type ZodString, ZodType, z } from 'zod'

export { z, ZodType }

export const zStringRequired = (msg?: string): ZodString => {
	return z
		.string()
		.trim()
		.min(1, { message: msg ?? 'Required' })
}
