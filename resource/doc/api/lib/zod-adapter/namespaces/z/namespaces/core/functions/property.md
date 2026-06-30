[**@beecode/msh-base-frame**](../../../../../../../README.md)

***

[@beecode/msh-base-frame](../../../../../../../README.md) / [lib/zod-adapter](../../../../../README.md) / [z](../../../README.md) / [core](../README.md) / \_property

# Function: \_property()

> **\_property**\<`K`, `T`\>(`property`, `schema`, `params?`): [`$ZodCheckProperty`](../interfaces/$ZodCheckProperty.md)\<`{ [k in string]: output<T> }`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:210

## Type Parameters

### K

`K` *extends* `string`

### T

`T` *extends* [`$ZodType`](../interfaces/$ZodType-1.md)\<`unknown`, `unknown`, [`$ZodTypeInternals`](../interfaces/$ZodTypeInternals-1.md)\<`unknown`, `unknown`\>\>

## Parameters

### property

`K`

### schema

`T`

### params?

`string` \| \{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](../interfaces/$ZodErrorMap.md)\<`NonNullable`\<[`$ZodIssue`](../type-aliases/$ZodIssue.md)\>\>; `message?`: `string`; \}

`string`

***

#### Type Literal

\{ `abort?`: `boolean`; `error?`: `string` \| [`$ZodErrorMap`](../interfaces/$ZodErrorMap.md)\<`NonNullable`\<[`$ZodIssue`](../type-aliases/$ZodIssue.md)\>\>; `message?`: `string`; \}

##### abort?

`boolean`

If true, no later checks will be executed if this check fails. Default `false`.

##### error?

`string` \| [`$ZodErrorMap`](../interfaces/$ZodErrorMap.md)\<`NonNullable`\<[`$ZodIssue`](../type-aliases/$ZodIssue.md)\>\>

##### message?

`string`

**Deprecated**

This parameter is deprecated. Use `error` instead.

## Returns

[`$ZodCheckProperty`](../interfaces/$ZodCheckProperty.md)\<`{ [k in string]: output<T> }`\>
