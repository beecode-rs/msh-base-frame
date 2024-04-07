[@beecode/msh-base-frame](../README.md) / util/config

# Module: util/config

## Table of contents

### Classes

- [ConfigSetup](../classes/util_config.ConfigSetup.md)

### Type Aliases

- [ConfigurationTemplateType](util_config.md#configurationtemplatetype)
- [ConfigurationType](util_config.md#configurationtype)

### Variables

- [configSchema](util_config.md#configschema)

### Functions

- [config](util_config.md#config)
- [configSetupSingleton](util_config.md#configsetupsingleton)

## Type Aliases

### ConfigurationTemplateType

Ƭ **ConfigurationTemplateType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `projectName` | `string` |

#### Defined in

[base-frame/src/util/config.ts:11](https://github.com/beecode-rs/msh-base-frame/blob/20a571f/src/util/config.ts#L11)

___

### ConfigurationType

Ƭ **ConfigurationType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `gitZipUrl` | `string` |
| `githubPersonAccessToken?` | `string` |
| `localTemplateFolder?` | `string` |
| `tempFolderPath` | `string` |
| `template` | [`ConfigurationTemplateType`](util_config.md#configurationtemplatetype) |
| `templateZipName` | `string` |

#### Defined in

[base-frame/src/util/config.ts:15](https://github.com/beecode-rs/msh-base-frame/blob/20a571f/src/util/config.ts#L15)

## Variables

### configSchema

• `Const` **configSchema**: `ObjectSchema`\<[`ConfigurationType`](util_config.md#configurationtype)\>

#### Defined in

[base-frame/src/util/config.ts:25](https://github.com/beecode-rs/msh-base-frame/blob/20a571f/src/util/config.ts#L25)

## Functions

### config

▸ **config**(): [`ConfigurationType`](util_config.md#configurationtype)

#### Returns

[`ConfigurationType`](util_config.md#configurationtype)

#### Defined in

[base-frame/src/util/config.ts:78](https://github.com/beecode-rs/msh-base-frame/blob/20a571f/src/util/config.ts#L78)

___

### configSetupSingleton

▸ **configSetupSingleton**(): [`ConfigSetup`](../classes/util_config.ConfigSetup.md)

#### Returns

[`ConfigSetup`](../classes/util_config.ConfigSetup.md)

#### Defined in

[base-frame/src/util/config.ts:74](https://github.com/beecode-rs/msh-base-frame/blob/20a571f/src/util/config.ts#L74)
