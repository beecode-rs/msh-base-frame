[**@beecode/msh-base-frame**](../../../../../../../README.md)

***

[@beecode/msh-base-frame](../../../../../../../README.md) / [lib/zod-adapter](../../../../../README.md) / [z](../../../README.md) / [coerce](../README.md) / bigint

# Function: bigint()

> **bigint**\<`T`\>(`params?`): [`ZodCoercedBigInt`](../../../interfaces/ZodCoercedBigInt.md)\<`T`\>

Defined in: node\_modules/zod/v4/classic/coerce.d.cts:14

## Type Parameters

### T

`T` = `unknown`

## Parameters

### params?

`string` \| \{ `coerce?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](../../core/interfaces/$ZodErrorMap.md)\<[`$ZodIssueInvalidType`](../../core/interfaces/$ZodIssueInvalidType.md)\<`unknown`\>\>; `message?`: `string`; \}

`string`

***

#### Type Literal

\{ `coerce?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](../../core/interfaces/$ZodErrorMap.md)\<[`$ZodIssueInvalidType`](../../core/interfaces/$ZodIssueInvalidType.md)\<`unknown`\>\>; `message?`: `string`; \}

##### coerce?

`boolean`

##### error?

`string` \| [`$ZodErrorMap`](../../core/interfaces/$ZodErrorMap.md)\<[`$ZodIssueInvalidType`](../../core/interfaces/$ZodIssueInvalidType.md)\<`unknown`\>\>

##### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

## Returns

[`ZodCoercedBigInt`](../../../interfaces/ZodCoercedBigInt.md)\<`T`\>
