[**@beecode/msh-base-frame**](../../../README.md)

***

[@beecode/msh-base-frame](../../../README.md) / [util/config](../README.md) / ConfigSetup

# Class: ConfigSetup

Defined in: [packages/base-frame/src/util/config.ts:37](https://github.com/beecode-rs/msh-base-frame/blob/363da0790c4cfdb684239c1ae4984183c6204c34/src/util/config.ts#L37)

## Constructors

### Constructor

> **new ConfigSetup**(): `ConfigSetup`

#### Returns

`ConfigSetup`

## Properties

### \_configuration?

> `protected` `optional` **\_configuration?**: `object` = `undefined`

Defined in: [packages/base-frame/src/util/config.ts:38](https://github.com/beecode-rs/msh-base-frame/blob/363da0790c4cfdb684239c1ae4984183c6204c34/src/util/config.ts#L38)

#### authorization?

> `optional` **authorization?**: `object` = `userConfigurationTypeSchema`

##### authorization.githubPersonAccessToken?

> `optional` **githubPersonAccessToken?**: `string`

#### template

> **template**: `object`

##### template.fetchStrategy

> **fetchStrategy**: [`FetchTemplateStrategyType`](../../../business/model/fetch-template-strategy-type/enumerations/FetchTemplateStrategyType.md)

##### template.forceOverride

> **forceOverride**: `boolean`

##### template.localDestinationFolder

> **localDestinationFolder**: `string`

##### template.location

> **location**: `string`

##### template.subFolderLocation?

> `optional` **subFolderLocation?**: `string`

#### tmpFolderPath

> **tmpFolderPath**: `string`

#### variables

> **variables**: `object`

##### Index Signature

\[`key`: `string`\]: `unknown`

##### variables.projectName

> **projectName**: `string`

## Accessors

### configuration

#### Get Signature

> **get** **configuration**(): \{ `authorization?`: \{ `githubPersonAccessToken?`: `string`; \}; `template`: \{ `fetchStrategy`: [`FetchTemplateStrategyType`](../../../business/model/fetch-template-strategy-type/enumerations/FetchTemplateStrategyType.md); `forceOverride`: `boolean`; `localDestinationFolder`: `string`; `location`: `string`; `subFolderLocation?`: `string`; \}; `tmpFolderPath`: `string`; `variables`: \{\[`key`: `string`\]: `unknown`; `projectName`: `string`; \}; \} \| `undefined`

Defined in: [packages/base-frame/src/util/config.ts:40](https://github.com/beecode-rs/msh-base-frame/blob/363da0790c4cfdb684239c1ae4984183c6204c34/src/util/config.ts#L40)

##### Returns

\{ `authorization?`: \{ `githubPersonAccessToken?`: `string`; \}; `template`: \{ `fetchStrategy`: [`FetchTemplateStrategyType`](../../../business/model/fetch-template-strategy-type/enumerations/FetchTemplateStrategyType.md); `forceOverride`: `boolean`; `localDestinationFolder`: `string`; `location`: `string`; `subFolderLocation?`: `string`; \}; `tmpFolderPath`: `string`; `variables`: \{\[`key`: `string`\]: `unknown`; `projectName`: `string`; \}; \} \| `undefined`

## Methods

### \_getUserConfigIfExists()

> `protected` **\_getUserConfigIfExists**(): `Promise`\<\{ `githubPersonAccessToken?`: `string`; \} \| `undefined`\>

Defined in: [packages/base-frame/src/util/config.ts:44](https://github.com/beecode-rs/msh-base-frame/blob/363da0790c4cfdb684239c1ae4984183c6204c34/src/util/config.ts#L44)

#### Returns

`Promise`\<\{ `githubPersonAccessToken?`: `string`; \} \| `undefined`\>

***

### initialize()

> **initialize**(): `Promise`\<`void`\>

Defined in: [packages/base-frame/src/util/config.ts:58](https://github.com/beecode-rs/msh-base-frame/blob/363da0790c4cfdb684239c1ae4984183c6204c34/src/util/config.ts#L58)

#### Returns

`Promise`\<`void`\>
