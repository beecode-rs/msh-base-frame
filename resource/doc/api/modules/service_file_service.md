[@beecode/msh-base-frame](../README.md) / service/file-service

# Module: service/file-service

## Table of contents

### Variables

- [fileService](service_file_service.md#fileservice)

## Variables

### fileService

• `Const` **fileService**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `copy` | (`src`: `string`, `dest`: `string`, `options`: \{ `ignore`: `string`[]  }) => `Promise`\<`void`\> |
| `copyFilesIfNotExists` | (`src`: `string`, `dest`: `string`) => `Promise`\<`void`\> |
| `filterFiles` | (`fileFolderList`: `string`[]) => `Promise`\<`string`[]\> |
| `getFolderContent` | (`path`: `string`) => `Promise`\<`string`[]\> |
| `getRecurringFolderContent` | (`path`: `string`) => `Promise`\<`string`[]\> |
| `isDirectory` | (`path`: `string`) => `Promise`\<`boolean`\> |
| `isFile` | (`path`: `string`) => `Promise`\<`boolean`\> |
| `makeFolderIfNotExist` | (`folderPath`: `string`) => `Promise`\<`void`\> |
| `readFile` | (`filePath`: `string`) => `Promise`\<`string`\> |
| `readIgnoreList` | (`path`: `string`) => `Promise`\<`string`[]\> |
| `removeFile` | (`filePath`: `string`) => `Promise`\<`void`\> |
| `removeFolder` | (`folderPath`: `string`) => `Promise`\<`void`\> |
| `unzip` | (`src`: `string`, `dest`: `string`) => `Promise`\<`void`\> |
| `writeToFile` | (`filePath`: `string`, `data`: `string`) => `Promise`\<`void`\> |

#### Defined in

[base-frame/src/service/file-service.ts:8](https://github.com/beecode-rs/msh-base-frame/blob/20a571f/src/service/file-service.ts#L8)
