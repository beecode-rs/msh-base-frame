[**@beecode/msh-base-frame**](../../../../../README.md)

***

[@beecode/msh-base-frame](../../../../../README.md) / [lib/zod-adapter](../../../README.md) / [z](../README.md) / codec

# Function: codec()

> **codec**\<`A`, `B`\>(`in_`, `out`, `params`): [`ZodCodec`](../interfaces/ZodCodec.md)\<`A`, `B`\>

Defined in: node\_modules/zod/v4/classic/schemas.d.cts:672

## Type Parameters

### A

`A` *extends* [`SomeType`](../namespaces/core/type-aliases/SomeType.md)

### B

`B` *extends* [`SomeType`](../namespaces/core/type-aliases/SomeType.md) = [`$ZodType`](../namespaces/core/interfaces/$ZodType-1.md)\<`unknown`, `unknown`, [`$ZodTypeInternals`](../namespaces/core/interfaces/$ZodTypeInternals-1.md)\<`unknown`, `unknown`\>\>

## Parameters

### in\_

`A`

### out

`B`

### params

#### decode

(`value`, `payload`) => [`MaybeAsync`](../namespaces/util/type-aliases/MaybeAsync.md)\<[`input`](../namespaces/core/type-aliases/input.md)\<`B`\>\>

#### encode

(`value`, `payload`) => [`MaybeAsync`](../namespaces/util/type-aliases/MaybeAsync.md)\<[`output`](../namespaces/core/type-aliases/output.md)\<`A`\>\>

## Returns

[`ZodCodec`](../interfaces/ZodCodec.md)\<`A`, `B`\>
