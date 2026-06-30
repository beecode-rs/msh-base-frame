[**@beecode/msh-base-frame**](../../../../../../../README.md)

***

[@beecode/msh-base-frame](../../../../../../../README.md) / [lib/zod-adapter](../../../../../README.md) / [z](../../../README.md) / [core](../README.md) / $PartsToTemplateLiteral

# Type Alias: $PartsToTemplateLiteral\<Parts\>

> **$PartsToTemplateLiteral**\<`Parts`\> = \[\] *extends* `Parts` ? `""` : `Parts` *extends* \[`...(infer Rest)`, infer Last\] ? `Rest` *extends* [`$ZodTemplateLiteralPart`]($ZodTemplateLiteralPart.md)[] ? `AppendToTemplateLiteral`\<`$PartsToTemplateLiteral`\<`Rest`\>, `Last`\> : `never` : `never`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:1098

## Type Parameters

### Parts

`Parts` *extends* [`$ZodTemplateLiteralPart`]($ZodTemplateLiteralPart.md)[]
