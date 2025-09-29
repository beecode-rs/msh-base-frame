import { type ZodString, ZodType, z } from 'zod'

export { z, ZodType }

// TODO: check if this function is required
export const zStringRequired = (params?: { error?: string }): ZodString => {
	const { error = 'Required' } = params ?? {}

	return z.string().trim().min(1, { error })
}
