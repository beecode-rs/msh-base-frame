[**@beecode/msh-base-frame**](../../../../../../../README.md)

***

[@beecode/msh-base-frame](../../../../../../../README.md) / [lib/zod-adapter](../../../../../README.md) / [z](../../../README.md) / [core](../README.md) / \_catch

# Function: \_catch()

> **\_catch**\<`T`\>(`Class`, `innerType`, `catchValue`): [`$ZodCatch`](../interfaces/$ZodCatch.md)\<`T`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:278

## Type Parameters

### T

`T` *extends* [`$ZodObject`](../interfaces/$ZodObject.md)\<`Readonly`\<`Readonly`\<\{\[`k`: `string`\]: [`$ZodType`](../interfaces/$ZodType-1.md)\<`unknown`, `unknown`, [`$ZodTypeInternals`](../interfaces/$ZodTypeInternals-1.md)\<`unknown`, `unknown`\>\>; \}\>\>, [`$ZodObjectConfig`](../type-aliases/$ZodObjectConfig.md)\>

## Parameters

### Class

[`SchemaClass`](../../util/type-aliases/SchemaClass.md)\<[`$ZodCatch`](../interfaces/$ZodCatch.md)\<[`$ZodType`](../interfaces/$ZodType-1.md)\<`unknown`, `unknown`, [`$ZodTypeInternals`](../interfaces/$ZodTypeInternals-1.md)\<`unknown`, `unknown`\>\>\>\>

### innerType

`T`

### catchValue

[`output`](../type-aliases/output.md)\<`T`\> \| ((`ctx`) => [`output`](../type-aliases/output.md)\<`T`\>)

## Returns

[`$ZodCatch`](../interfaces/$ZodCatch.md)\<`T`\>
