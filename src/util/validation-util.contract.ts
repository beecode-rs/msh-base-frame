import * as validationUtil from './validation-util'
import { contractFactory } from '@beecode/msh-test-contractor/lib/contract/contractor-factory'
import Joi from 'joi'

export default contractFactory(
  { module: validationUtil, subjectName: 'validationUtil' },
  {
    sanitize: {
      terms: [
        {
          params: [{ test: 'test' }, Joi.object().keys({ test: Joi.string().required() })],
          result: { test: 'test' },
        },
        {
          params: [{ test: 'test', test2: 'test2' }, Joi.object().keys({ test: Joi.string().required() })],
          result: { test: 'test' },
        },
      ],
    },
    validate: {
      terms: [
        {
          params: [{ test: 'test' }, Joi.object().keys({ test: Joi.string().required() })],
          result: { test: 'test' },
        },
        {
          params: [{ test: 'test', test2: 'test2' }, Joi.object().keys({ test: Joi.string().required() })],
          result: new Error("'test2' is not allowed"),
        },
      ],
    },
  }
)
