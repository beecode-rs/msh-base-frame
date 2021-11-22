import { joiUtil } from '@beecode/msh-node-util/lib/joi-util'
import { ObjectSchema, Schema } from 'joi'
import { logger } from 'src/util/logger'

export const validationUtil = {
  sanitize: <T>(objectToValidate: Partial<T> | any, schema: Schema<T> | ObjectSchema<T>): T =>
    joiUtil.sanitize(objectToValidate, schema, { logger }),
  validate: <T>(objectToValidate: Partial<T> | any, schema: Schema<T> | ObjectSchema<T>): T =>
    joiUtil.validate(objectToValidate, schema, { logger }),
}
