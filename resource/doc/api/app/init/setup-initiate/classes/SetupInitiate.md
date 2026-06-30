[**@beecode/msh-base-frame**](../../../../README.md)

***

[@beecode/msh-base-frame](../../../../README.md) / [app/init/setup-initiate](../README.md) / SetupInitiate

# Class: SetupInitiate

Defined in: [packages/base-frame/src/app/init/setup-initiate.ts:5](https://github.com/beecode-rs/msh-base-frame/blob/363da0790c4cfdb684239c1ae4984183c6204c34/src/app/init/setup-initiate.ts#L5)

## Extends

- `LifeCycle`

## Constructors

### Constructor

> **new SetupInitiate**(): `SetupInitiate`

Defined in: [packages/base-frame/src/app/init/setup-initiate.ts:6](https://github.com/beecode-rs/msh-base-frame/blob/363da0790c4cfdb684239c1ae4984183c6204c34/src/app/init/setup-initiate.ts#L6)

#### Returns

`SetupInitiate`

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

Defined in: [packages/base-frame/src/app/init/setup-initiate.ts:10](https://github.com/beecode-rs/msh-base-frame/blob/363da0790c4cfdb684239c1ae4984183c6204c34/src/app/init/setup-initiate.ts#L10)

#### Returns

`Promise`\<`void`\>

#### Overrides

`LifeCycle._createFn`

***

### \_destroyFn()

> `protected` **\_destroyFn**(): `Promise`\<`void`\>

Defined in: [packages/base-frame/src/app/init/setup-initiate.ts:14](https://github.com/beecode-rs/msh-base-frame/blob/363da0790c4cfdb684239c1ae4984183c6204c34/src/app/init/setup-initiate.ts#L14)

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
