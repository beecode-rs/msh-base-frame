[@beecode/msh-base-frame](../README.md) / [app/init/setup-initiate](../modules/app_init_setup_initiate.md) / SetupInitiate

# Class: SetupInitiate

[app/init/setup-initiate](../modules/app_init_setup_initiate.md).SetupInitiate

## Hierarchy

- `LifeCycle`

  ↳ **`SetupInitiate`**

## Table of contents

### Constructors

- [constructor](app_init_setup_initiate.SetupInitiate.md#constructor)

### Properties

- [name](app_init_setup_initiate.SetupInitiate.md#name)

### Methods

- [\_createFn](app_init_setup_initiate.SetupInitiate.md#_createfn)
- [\_destroyFn](app_init_setup_initiate.SetupInitiate.md#_destroyfn)
- [create](app_init_setup_initiate.SetupInitiate.md#create)
- [destroy](app_init_setup_initiate.SetupInitiate.md#destroy)

## Constructors

### constructor

• **new SetupInitiate**(): [`SetupInitiate`](app_init_setup_initiate.SetupInitiate.md)

#### Returns

[`SetupInitiate`](app_init_setup_initiate.SetupInitiate.md)

#### Overrides

LifeCycle.constructor

#### Defined in

[base-frame/src/app/init/setup-initiate.ts:6](https://github.com/beecode-rs/msh-base-frame/blob/20a571f/src/app/init/setup-initiate.ts#L6)

## Properties

### name

• `Readonly` **name**: `string`

#### Inherited from

LifeCycle.name

#### Defined in

[app-boot/src/life-cycle.ts:7](https://github.com/beecode-rs/msh-app-boot/blob/ff89a8e/src/life-cycle.ts#L7)

## Methods

### \_createFn

▸ **_createFn**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Overrides

LifeCycle.\_createFn

#### Defined in

[base-frame/src/app/init/setup-initiate.ts:10](https://github.com/beecode-rs/msh-base-frame/blob/20a571f/src/app/init/setup-initiate.ts#L10)

___

### \_destroyFn

▸ **_destroyFn**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Overrides

LifeCycle.\_destroyFn

#### Defined in

[base-frame/src/app/init/setup-initiate.ts:14](https://github.com/beecode-rs/msh-base-frame/blob/20a571f/src/app/init/setup-initiate.ts#L14)

___

### create

▸ **create**(): `Promise`\<`any`\>

#### Returns

`Promise`\<`any`\>

#### Inherited from

LifeCycle.create

#### Defined in

[app-boot/src/life-cycle.ts:14](https://github.com/beecode-rs/msh-app-boot/blob/ff89a8e/src/life-cycle.ts#L14)

___

### destroy

▸ **destroy**(): `Promise`\<`any`\>

#### Returns

`Promise`\<`any`\>

#### Inherited from

LifeCycle.destroy

#### Defined in

[app-boot/src/life-cycle.ts:22](https://github.com/beecode-rs/msh-app-boot/blob/ff89a8e/src/life-cycle.ts#L22)
