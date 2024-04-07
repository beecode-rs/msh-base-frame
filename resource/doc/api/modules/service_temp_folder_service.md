[@beecode/msh-base-frame](../README.md) / service/temp-folder-service

# Module: service/temp-folder-service

## Table of contents

### Variables

- [tempFolderService](service_temp_folder_service.md#tempfolderservice)

## Variables

### tempFolderService

• `Const` **tempFolderService**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cleanAll` | () => `Promise`\<`void`\> |
| `flattenFolderByOneLevelAndRemoveIgnored` | () => `Promise`\<`void`\> |
| `makeTempFolderIfNotExist` | () => `Promise`\<`void`\> |
| `readIgnoreList` | () => `Promise`\<`string`[]\> |

#### Defined in

[base-frame/src/service/temp-folder-service.ts:6](https://github.com/beecode-rs/msh-base-frame/blob/20a571f/src/service/temp-folder-service.ts#L6)
