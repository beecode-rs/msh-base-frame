[**@beecode/msh-base-frame**](../../../../../../../README.md)

***

[@beecode/msh-base-frame](../../../../../../../README.md) / [lib/zod-adapter](../../../../../README.md) / [z](../../../README.md) / [core](../README.md) / $InferInnerFunctionTypeAsync

# Type Alias: $InferInnerFunctionTypeAsync\<Args, Returns\>

> **$InferInnerFunctionTypeAsync**\<`Args`, `Returns`\> = (...`args`) => [`MaybeAsync`](../../util/type-aliases/MaybeAsync.md)\<[`input`](input.md)\<`Returns`\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:1104

## Type Parameters

### Args

`Args` *extends* [`$ZodFunctionIn`]($ZodFunctionIn.md)

### Returns

`Returns` *extends* [`$ZodFunctionOut`]($ZodFunctionOut.md)

## Parameters

### args

...[`$ZodFunctionIn`]($ZodFunctionIn.md) *extends* `Args` ? `never`[] : [`output`](output.md)\<`Args`\>

## Returns

[`MaybeAsync`](../../util/type-aliases/MaybeAsync.md)\<[`input`](input.md)\<`Returns`\>\>
