[**@beecode/msh-base-frame**](../../../../../../../README.md)

***

[@beecode/msh-base-frame](../../../../../../../README.md) / [lib/zod-adapter](../../../../../README.md) / [z](../../../README.md) / [core](../README.md) / $InferTupleOutputType

# Type Alias: $InferTupleOutputType\<T, Rest\>

> **$InferTupleOutputType**\<`T`, `Rest`\> = \[`...TupleOutputTypeWithOptionals<T>`, `...(Rest extends SomeType ? output<Rest>[] : [])`\]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:717

## Type Parameters

### T

`T` *extends* [`TupleItems`](../../util/type-aliases/TupleItems.md)

### Rest

`Rest` *extends* [`SomeType`](SomeType.md) \| `null`
