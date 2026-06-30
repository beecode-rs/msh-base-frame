[**@beecode/msh-base-frame**](../../../../../../../README.md)

***

[@beecode/msh-base-frame](../../../../../../../README.md) / [lib/zod-adapter](../../../../../README.md) / [z](../../../README.md) / [core](../README.md) / $InferTupleInputType

# Type Alias: $InferTupleInputType\<T, Rest\>

> **$InferTupleInputType**\<`T`, `Rest`\> = \[`...TupleInputTypeWithOptionals<T>`, `...(Rest extends SomeType ? input<Rest>[] : [])`\]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:706

## Type Parameters

### T

`T` *extends* [`TupleItems`](../../util/type-aliases/TupleItems.md)

### Rest

`Rest` *extends* [`SomeType`](SomeType.md) \| `null`
