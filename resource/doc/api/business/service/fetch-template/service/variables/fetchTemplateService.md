[**@beecode/msh-base-frame**](../../../../../README.md)

***

[@beecode/msh-base-frame](../../../../../README.md) / [business/service/fetch-template/service](../README.md) / fetchTemplateService

# Variable: fetchTemplateService

> `const` **fetchTemplateService**: `object`

Defined in: [packages/base-frame/src/business/service/fetch-template/service.ts:8](https://github.com/beecode-rs/msh-base-frame/blob/363da0790c4cfdb684239c1ae4984183c6204c34/src/business/service/fetch-template/service.ts#L8)

## Type Declaration

### getStrategy

> **getStrategy**: (`type`) => [`FetchTemplateStrategyGit`](../../strategy-git/classes/FetchTemplateStrategyGit.md) \| [`FetchTemplateStrategyLocalFolder`](../../strategy-local-folder/classes/FetchTemplateStrategyLocalFolder.md) \| [`FetchTemplateStrategyWebZip`](../../strategy-web-zip/classes/FetchTemplateStrategyWebZip.md)

#### Parameters

##### type

[`FetchTemplateStrategyType`](../../../../model/fetch-template-strategy-type/enumerations/FetchTemplateStrategyType.md)

#### Returns

[`FetchTemplateStrategyGit`](../../strategy-git/classes/FetchTemplateStrategyGit.md) \| [`FetchTemplateStrategyLocalFolder`](../../strategy-local-folder/classes/FetchTemplateStrategyLocalFolder.md) \| [`FetchTemplateStrategyWebZip`](../../strategy-web-zip/classes/FetchTemplateStrategyWebZip.md)
