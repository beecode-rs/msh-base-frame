[**@beecode/msh-base-frame**](../../../../../../../README.md)

***

[@beecode/msh-base-frame](../../../../../../../README.md) / [lib/zod-adapter](../../../../../README.md) / [z](../../../README.md) / [core](../README.md) / \_intersection

# Function: \_intersection()

> **\_intersection**\<`T`, `U`\>(`Class`, `left`, `right`): [`$ZodIntersection`](../interfaces/$ZodIntersection.md)\<`T`, `U`\>

Defined in: node\_modules/zod/v4/core/api.d.cts:239

## Type Parameters

### T

`T` *extends* [`$ZodObject`](../interfaces/$ZodObject.md)\<`Readonly`\<`Readonly`\<\{\[`k`: `string`\]: [`$ZodType`](../interfaces/$ZodType-1.md)\<`unknown`, `unknown`, [`$ZodTypeInternals`](../interfaces/$ZodTypeInternals-1.md)\<`unknown`, `unknown`\>\>; \}\>\>, [`$ZodObjectConfig`](../type-aliases/$ZodObjectConfig.md)\>

### U

`U` *extends* [`$ZodObject`](../interfaces/$ZodObject.md)\<`Readonly`\<`Readonly`\<\{\[`k`: `string`\]: [`$ZodType`](../interfaces/$ZodType-1.md)\<`unknown`, `unknown`, [`$ZodTypeInternals`](../interfaces/$ZodTypeInternals-1.md)\<`unknown`, `unknown`\>\>; \}\>\>, [`$ZodObjectConfig`](../type-aliases/$ZodObjectConfig.md)\>

## Parameters

### Class

[`SchemaClass`](../../util/type-aliases/SchemaClass.md)\<[`$ZodIntersection`](../interfaces/$ZodIntersection.md)\<[`$ZodType`](../interfaces/$ZodType-1.md)\<`unknown`, `unknown`, [`$ZodTypeInternals`](../interfaces/$ZodTypeInternals-1.md)\<`unknown`, `unknown`\>\>, [`$ZodType`](../interfaces/$ZodType-1.md)\<`unknown`, `unknown`, [`$ZodTypeInternals`](../interfaces/$ZodTypeInternals-1.md)\<`unknown`, `unknown`\>\>\>\>

### left

`T`

### right

`U`

## Returns

[`$ZodIntersection`](../interfaces/$ZodIntersection.md)\<`T`, `U`\>
