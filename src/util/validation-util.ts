import { JoiUtil } from '@beecode/msh-util/joi-util'
import { type ObjectSchema, type Schema } from 'joi'

export const validationUtil = {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-redundant-type-constituents
	sanitize: <T>(objectToValidate: Partial<T> | any, schema: Schema<T> | ObjectSchema<T>): T => {
		return new JoiUtil().sanitize(objectToValidate, schema)
	},
	// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-redundant-type-constituents
	validate: <T>(objectToValidate: Partial<T> | any, schema: Schema<T> | ObjectSchema<T>): T => {
		return new JoiUtil().validate(objectToValidate, schema)
	},
}
