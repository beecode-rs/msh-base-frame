[@beecode/msh-base-frame](../README.md) / [app/init/clone-initate](../modules/app_init_clone_initate.md) / CloneInitiate

# Class: CloneInitiate

[app/init/clone-initate](../modules/app_init_clone_initate.md).CloneInitiate

## Hierarchy

- `LifeCycle`

  ↳ **`CloneInitiate`**

## Table of contents

### Constructors

- [constructor](app_init_clone_initate.CloneInitiate.md#constructor)

### Properties

- [name](app_init_clone_initate.CloneInitiate.md#name)

### Methods

- [\_createFn](app_init_clone_initate.CloneInitiate.md#_createfn)
- [\_destroyFn](app_init_clone_initate.CloneInitiate.md#_destroyfn)
- [create](app_init_clone_initate.CloneInitiate.md#create)
- [destroy](app_init_clone_initate.CloneInitiate.md#destroy)

## Constructors

### constructor

• **new CloneInitiate**(): [`CloneInitiate`](app_init_clone_initate.CloneInitiate.md)

#### Returns

[`CloneInitiate`](app_init_clone_initate.CloneInitiate.md)

#### Overrides

LifeCycle.constructor

#### Defined in

[base-frame/src/app/init/clone-initate.ts:6](https://github.com/beecode-rs/msh-base-frame/blob/20a571f/src/app/init/clone-initate.ts#L6)

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

[base-frame/src/app/init/clone-initate.ts:10](https://github.com/beecode-rs/msh-base-frame/blob/20a571f/src/app/init/clone-initate.ts#L10)

___

### \_destroyFn

▸ **_destroyFn**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Overrides

LifeCycle.\_destroyFn

#### Defined in

[base-frame/src/app/init/clone-initate.ts:14](https://github.com/beecode-rs/msh-base-frame/blob/20a571f/src/app/init/clone-initate.ts#L14)

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
