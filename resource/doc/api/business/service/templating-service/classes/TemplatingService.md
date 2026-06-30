[**@beecode/msh-base-frame**](../../../../README.md)

***

[@beecode/msh-base-frame](../../../../README.md) / [business/service/templating-service](../README.md) / TemplatingService

# Class: TemplatingService

Defined in: [packages/base-frame/src/business/service/templating-service.ts:5](https://github.com/beecode-rs/msh-base-frame/blob/363da0790c4cfdb684239c1ae4984183c6204c34/src/business/service/templating-service.ts#L5)

## Constructors

### Constructor

> **new TemplatingService**(): `TemplatingService`

#### Returns

`TemplatingService`

## Methods

### renderFile()

> **renderFile**(`params`): `Promise`\<`string`\>

Defined in: [packages/base-frame/src/business/service/templating-service.ts:14](https://github.com/beecode-rs/msh-base-frame/blob/363da0790c4cfdb684239c1ae4984183c6204c34/src/business/service/templating-service.ts#L14)

#### Parameters

##### params

###### filePath

`string`

###### templateValues

`Record`\<`string`, `unknown`\>

#### Returns

`Promise`\<`string`\>

***

### replaceFileWithRenderedTemplate()

> **replaceFileWithRenderedTemplate**(`params`): `Promise`\<`void`\>

Defined in: [packages/base-frame/src/business/service/templating-service.ts:6](https://github.com/beecode-rs/msh-base-frame/blob/363da0790c4cfdb684239c1ae4984183c6204c34/src/business/service/templating-service.ts#L6)

#### Parameters

##### params

###### filePath

`string`

#### Returns

`Promise`\<`void`\>
