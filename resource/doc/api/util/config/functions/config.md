[**@beecode/msh-base-frame**](../../../README.md)

***

[@beecode/msh-base-frame](../../../README.md) / [util/config](../README.md) / config

# Function: config()

> **config**(): `object`

Defined in: [packages/base-frame/src/util/config.ts:87](https://github.com/beecode-rs/msh-base-frame/blob/363da0790c4cfdb684239c1ae4984183c6204c34/src/util/config.ts#L87)

## Returns

`object`

### authorization?

> `optional` **authorization?**: `object` = `userConfigurationTypeSchema`

#### authorization.githubPersonAccessToken?

> `optional` **githubPersonAccessToken?**: `string`

### template

> **template**: `object`

#### template.fetchStrategy

> **fetchStrategy**: [`FetchTemplateStrategyType`](../../../business/model/fetch-template-strategy-type/enumerations/FetchTemplateStrategyType.md)

#### template.forceOverride

> **forceOverride**: `boolean`

#### template.localDestinationFolder

> **localDestinationFolder**: `string`

#### template.location

> **location**: `string`

#### template.subFolderLocation?

> `optional` **subFolderLocation?**: `string`

### tmpFolderPath

> **tmpFolderPath**: `string`

### variables

> **variables**: `object`

#### Index Signature

\[`key`: `string`\]: `unknown`

#### variables.projectName

> **projectName**: `string`
