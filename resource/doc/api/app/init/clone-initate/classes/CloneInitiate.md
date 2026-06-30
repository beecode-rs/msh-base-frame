[**@beecode/msh-base-frame**](../../../../README.md)

***

[@beecode/msh-base-frame](../../../../README.md) / [app/init/clone-initate](../README.md) / CloneInitiate

# Class: CloneInitiate

Defined in: [packages/base-frame/src/app/init/clone-initate.ts:5](https://github.com/beecode-rs/msh-base-frame/blob/363da0790c4cfdb684239c1ae4984183c6204c34/src/app/init/clone-initate.ts#L5)

## Extends

- `LifeCycle`

## Constructors

### Constructor

> **new CloneInitiate**(): `CloneInitiate`

Defined in: [packages/base-frame/src/app/init/clone-initate.ts:6](https://github.com/beecode-rs/msh-base-frame/blob/363da0790c4cfdb684239c1ae4984183c6204c34/src/app/init/clone-initate.ts#L6)

#### Returns

`CloneInitiate`

#### Overrides

`LifeCycle.constructor`

## Properties

### name

> `readonly` **name**: `string`

Defined in: packages/app-boot/dist/business/service/life-cycle.d.ts:4

#### Inherited from

`LifeCycle.name`

## Methods

### \_createFn()

> `protected` **\_createFn**(): `Promise`\<`void`\>

Defined in: [packages/base-frame/src/app/init/clone-initate.ts:10](https://github.com/beecode-rs/msh-base-frame/blob/363da0790c4cfdb684239c1ae4984183c6204c34/src/app/init/clone-initate.ts#L10)

#### Returns

`Promise`\<`void`\>

#### Overrides

`LifeCycle._createFn`

***

### \_destroyFn()

> `protected` **\_destroyFn**(): `Promise`\<`void`\>

Defined in: [packages/base-frame/src/app/init/clone-initate.ts:14](https://github.com/beecode-rs/msh-base-frame/blob/363da0790c4cfdb684239c1ae4984183c6204c34/src/app/init/clone-initate.ts#L14)

#### Returns

`Promise`\<`void`\>

#### Overrides

`LifeCycle._destroyFn`

***

### create()

> **create**(): `Promise`\<`any`\>

Defined in: packages/app-boot/dist/business/service/life-cycle.d.ts:8

#### Returns

`Promise`\<`any`\>

#### Inherited from

`LifeCycle.create`

***

### destroy()

> **destroy**(): `Promise`\<`any`\>

Defined in: packages/app-boot/dist/business/service/life-cycle.d.ts:9

#### Returns

`Promise`\<`any`\>

#### Inherited from

`LifeCycle.destroy`
