[**@beecode/msh-base-frame**](../../../../../../../README.md)

***

[@beecode/msh-base-frame](../../../../../../../README.md) / [lib/zod-adapter](../../../../../README.md) / [z](../../../README.md) / [util](../README.md) / AssertNotEqual

# Type Alias: AssertNotEqual\<T, U\>

> **AssertNotEqual**\<`T`, `U`\> = \<`V`\>() => `V` *extends* `T` ? `1` : `2` *extends* \<`V`\>() => `V` *extends* `U` ? `1` : `2` ? `false` : `true`

Defined in: node\_modules/zod/v4/core/util.d.cts:16

## Type Parameters

### T

`T`

### U

`U`
