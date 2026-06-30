[**@beecode/msh-base-frame**](../../../../../../../README.md)

***

[@beecode/msh-base-frame](../../../../../../../README.md) / [lib/zod-adapter](../../../../../README.md) / [z](../../../README.md) / [util](../README.md) / NoNeverKeys

# Type Alias: NoNeverKeys\<T\>

> **NoNeverKeys**\<`T`\> = `{ [k in keyof T]: [T[k]] extends [never] ? never : k }`\[keyof `T`\]

Defined in: node\_modules/zod/v4/core/util.d.cts:54

## Type Parameters

### T

`T`
