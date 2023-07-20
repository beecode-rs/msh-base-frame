import { JoiUtil } from '@beecode/msh-util/joi-util.js'
import { ObjectSchema, Schema } from 'joi'

export const validationUtil = {
	sanitize: <T>(objectToValidate: Partial<T> | any, schema: Schema<T> | ObjectSchema<T>): T => {
		return new JoiUtil().sanitize(objectToValidate, schema)
	},
	validate: <T>(objectToValidate: Partial<T> | any, schema: Schema<T> | ObjectSchema<T>): T => {
		return new JoiUtil().validate(objectToValidate, schema)
	},
}
