[**@beecode/msh-base-frame**](../../../README.md)

***

[@beecode/msh-base-frame](../../../README.md) / [lib/file-adapter](../README.md) / FileAdapter

# Class: FileAdapter

Defined in: [packages/base-frame/src/lib/file-adapter.ts:9](https://github.com/beecode-rs/msh-base-frame/blob/363da0790c4cfdb684239c1ae4984183c6204c34/src/lib/file-adapter.ts#L9)

## Constructors

### Constructor

> **new FileAdapter**(): `FileAdapter`

#### Returns

`FileAdapter`

## Methods

### copy()

> **copy**(`params`): `Promise`\<`void`\>

Defined in: [packages/base-frame/src/lib/file-adapter.ts:10](https://github.com/beecode-rs/msh-base-frame/blob/363da0790c4cfdb684239c1ae4984183c6204c34/src/lib/file-adapter.ts#L10)

#### Parameters

##### params

###### destinationFilePath

`string`

###### options?

\{ `ignoreList`: `string`[]; \}

###### options.ignoreList

`string`[]

###### sourceFilePath

`string`

#### Returns

`Promise`\<`void`\>

***

### copyAndOverride()

> **copyAndOverride**(`params`): `Promise`\<`void`\>

Defined in: [packages/base-frame/src/lib/file-adapter.ts:37](https://github.com/beecode-rs/msh-base-frame/blob/363da0790c4cfdb684239c1ae4984183c6204c34/src/lib/file-adapter.ts#L37)

#### Parameters

##### params

###### destinationFilePath

`string`

###### sourceFilePath

`string`

#### Returns

`Promise`\<`void`\>

***

### copyFilesIfNotExists()

> **copyFilesIfNotExists**(`params`): `Promise`\<`void`\>

Defined in: [packages/base-frame/src/lib/file-adapter.ts:31](https://github.com/beecode-rs/msh-base-frame/blob/363da0790c4cfdb684239c1ae4984183c6204c34/src/lib/file-adapter.ts#L31)

#### Parameters

##### params

###### destinationFilePath

`string`

###### sourceFilePath

`string`

#### Returns

`Promise`\<`void`\>

***

### filterFiles()

> **filterFiles**(`params`): `Promise`\<`string`[]\>

Defined in: [packages/base-frame/src/lib/file-adapter.ts:43](https://github.com/beecode-rs/msh-base-frame/blob/363da0790c4cfdb684239c1ae4984183c6204c34/src/lib/file-adapter.ts#L43)

#### Parameters

##### params

###### fileFolderPathList

`string`[]

#### Returns

`Promise`\<`string`[]\>

***

### getFolderContent()

> **getFolderContent**(`params`): `Promise`\<`string`[]\>

Defined in: [packages/base-frame/src/lib/file-adapter.ts:59](https://github.com/beecode-rs/msh-base-frame/blob/363da0790c4cfdb684239c1ae4984183c6204c34/src/lib/file-adapter.ts#L59)

#### Parameters

##### params

###### folderPath

`string`

#### Returns

`Promise`\<`string`[]\>

***

### getRecurringFolderContent()

> **getRecurringFolderContent**(`params`): `Promise`\<`string`[]\>

Defined in: [packages/base-frame/src/lib/file-adapter.ts:65](https://github.com/beecode-rs/msh-base-frame/blob/363da0790c4cfdb684239c1ae4984183c6204c34/src/lib/file-adapter.ts#L65)

#### Parameters

##### params

###### folderPath

`string`

#### Returns

`Promise`\<`string`[]\>

***

### isDirectory()

> **isDirectory**(`params`): `Promise`\<`boolean`\>

Defined in: [packages/base-frame/src/lib/file-adapter.ts:83](https://github.com/beecode-rs/msh-base-frame/blob/363da0790c4cfdb684239c1ae4984183c6204c34/src/lib/file-adapter.ts#L83)

#### Parameters

##### params

###### folderPath

`string`

#### Returns

`Promise`\<`boolean`\>

***

### isFile()

> **isFile**(`params`): `Promise`\<`boolean`\>

Defined in: [packages/base-frame/src/lib/file-adapter.ts:97](https://github.com/beecode-rs/msh-base-frame/blob/363da0790c4cfdb684239c1ae4984183c6204c34/src/lib/file-adapter.ts#L97)

#### Parameters

##### params

###### filePath

`string`

#### Returns

`Promise`\<`boolean`\>

***

### makeFolderIfNotExist()

> **makeFolderIfNotExist**(`params`): `Promise`\<`void`\>

Defined in: [packages/base-frame/src/lib/file-adapter.ts:111](https://github.com/beecode-rs/msh-base-frame/blob/363da0790c4cfdb684239c1ae4984183c6204c34/src/lib/file-adapter.ts#L111)

#### Parameters

##### params

###### folderPath

`string`

#### Returns

`Promise`\<`void`\>

***

### readFile()

> **readFile**(`params`): `Promise`\<`string`\>

Defined in: [packages/base-frame/src/lib/file-adapter.ts:121](https://github.com/beecode-rs/msh-base-frame/blob/363da0790c4cfdb684239c1ae4984183c6204c34/src/lib/file-adapter.ts#L121)

#### Parameters

##### params

###### filePath

`string`

#### Returns

`Promise`\<`string`\>

***

### removeFile()

> **removeFile**(`params`): `Promise`\<`void`\>

Defined in: [packages/base-frame/src/lib/file-adapter.ts:127](https://github.com/beecode-rs/msh-base-frame/blob/363da0790c4cfdb684239c1ae4984183c6204c34/src/lib/file-adapter.ts#L127)

#### Parameters

##### params

###### filePath

`string`

#### Returns

`Promise`\<`void`\>

***

### removeFolder()

> **removeFolder**(`params`): `Promise`\<`void`\>

Defined in: [packages/base-frame/src/lib/file-adapter.ts:137](https://github.com/beecode-rs/msh-base-frame/blob/363da0790c4cfdb684239c1ae4984183c6204c34/src/lib/file-adapter.ts#L137)

#### Parameters

##### params

###### folderPath

`string`

#### Returns

`Promise`\<`void`\>

***

### writeToFile()

> **writeToFile**(`params`): `Promise`\<`void`\>

Defined in: [packages/base-frame/src/lib/file-adapter.ts:147](https://github.com/beecode-rs/msh-base-frame/blob/363da0790c4cfdb684239c1ae4984183c6204c34/src/lib/file-adapter.ts#L147)

#### Parameters

##### params

###### fileContent

`string`

###### filePath

`string`

#### Returns

`Promise`\<`void`\>
