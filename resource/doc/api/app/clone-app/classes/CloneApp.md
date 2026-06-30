[**@beecode/msh-base-frame**](../../../README.md)

***

[@beecode/msh-base-frame](../../../README.md) / [app/clone-app](../README.md) / CloneApp

# Class: CloneApp

Defined in: [packages/base-frame/src/app/clone-app.ts:6](https://github.com/beecode-rs/msh-base-frame/blob/363da0790c4cfdb684239c1ae4984183c6204c34/src/app/clone-app.ts#L6)

## Extends

- `AppFlow`

## Constructors

### Constructor

> **new CloneApp**(): `CloneApp`

Defined in: [packages/base-frame/src/app/clone-app.ts:7](https://github.com/beecode-rs/msh-base-frame/blob/363da0790c4cfdb684239c1ae4984183c6204c34/src/app/clone-app.ts#L7)

#### Returns

`CloneApp`

#### Overrides

`AppFlow.constructor`

## Properties

### \_flowList

> `protected` `readonly` **\_flowList**: `FlowList`

Defined in: packages/app-boot/dist/business/service/app-flow.d.ts:8

#### Inherited from

`AppFlow._flowList`

## Methods

### \_topLevelReversedFlowList()

> `protected` **\_topLevelReversedFlowList**(): `FlowList`

Defined in: packages/app-boot/dist/business/service/app-flow.d.ts:12

#### Returns

`FlowList`

#### Inherited from

`AppFlow._topLevelReversedFlowList`

***

### create()

> **create**(): `Promise`\<`void`\>

Defined in: packages/app-boot/dist/business/service/app-flow.d.ts:10

#### Returns

`Promise`\<`void`\>

#### Inherited from

`AppFlow.create`

***

### destroy()

> **destroy**(): `Promise`\<`void`\>

Defined in: packages/app-boot/dist/business/service/app-flow.d.ts:11

#### Returns

`Promise`\<`void`\>

#### Inherited from

`AppFlow.destroy`

***

### DeepExecFlowList()

> `static` **DeepExecFlowList**(`params`): `Promise`\<`void`\>

Defined in: packages/app-boot/dist/business/service/app-flow.d.ts:13

#### Parameters

##### params

###### direction

`FlowDirectionMapper`

###### flowList

`FlowList`

#### Returns

`Promise`\<`void`\>

#### Inherited from

`AppFlow.DeepExecFlowList`

***

### ExecSyncFlowList()

> `static` **ExecSyncFlowList**(`lifeCycleList`, `createOrDestroy`): `Promise`\<`void`\>

Defined in: packages/app-boot/dist/business/service/app-flow.d.ts:17

#### Parameters

##### lifeCycleList

`LifeCycle`\<`any`\>[]

##### createOrDestroy

`FlowDirectionMapper`

#### Returns

`Promise`\<`void`\>

#### Inherited from

`AppFlow.ExecSyncFlowList`
