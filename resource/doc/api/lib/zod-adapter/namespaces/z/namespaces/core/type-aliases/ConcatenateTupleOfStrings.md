[**@beecode/msh-base-frame**](../../../../../../../README.md)

***

[@beecode/msh-base-frame](../../../../../../../README.md) / [lib/zod-adapter](../../../../../README.md) / [z](../../../README.md) / [core](../README.md) / ConcatenateTupleOfStrings

# Type Alias: ConcatenateTupleOfStrings\<T\>

> **ConcatenateTupleOfStrings**\<`T`\> = `T` *extends* \[infer First, `...(infer Rest extends string[])`\] ? `Rest` *extends* `string`[] ? `First` *extends* `""` ? `ConcatenateTupleOfStrings`\<`Rest`\> : `` `${First}${ConcatenateTupleOfStrings<Rest>}` `` : `never` : `""`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:1090

## Type Parameters

### T

`T` *extends* `string`[]
