[@beecode/msh-base-frame](../README.md) / [app/clone-app](../modules/app_clone_app.md) / CloneApp

# Class: CloneApp

[app/clone-app](../modules/app_clone_app.md).CloneApp

## Hierarchy

- `AppFlow`

  ↳ **`CloneApp`**

## Table of contents

### Constructors

- [constructor](app_clone_app.CloneApp.md#constructor)

### Properties

- [\_flowList](app_clone_app.CloneApp.md#_flowlist)

### Methods

- [\_topLevelReversedFlowList](app_clone_app.CloneApp.md#_toplevelreversedflowlist)
- [create](app_clone_app.CloneApp.md#create)
- [destroy](app_clone_app.CloneApp.md#destroy)
- [DeepExecFlowList](app_clone_app.CloneApp.md#deepexecflowlist)
- [ExecSyncFlowList](app_clone_app.CloneApp.md#execsyncflowlist)

## Constructors

### constructor

• **new CloneApp**(): [`CloneApp`](app_clone_app.CloneApp.md)

#### Returns

[`CloneApp`](app_clone_app.CloneApp.md)

#### Overrides

AppFlow.constructor

#### Defined in

[base-frame/src/app/clone-app.ts:7](https://github.com/beecode-rs/msh-base-frame/blob/20a571f/src/app/clone-app.ts#L7)

## Properties

### \_flowList

• `Protected` `Readonly` **\_flowList**: `FlowList`

#### Inherited from

AppFlow.\_flowList

#### Defined in

[app-boot/src/app-flow.ts:12](https://github.com/beecode-rs/msh-app-boot/blob/ff89a8e/src/app-flow.ts#L12)

## Methods

### \_topLevelReversedFlowList

▸ **_topLevelReversedFlowList**(): `FlowList`

#### Returns

`FlowList`

#### Inherited from

AppFlow.\_topLevelReversedFlowList

#### Defined in

[app-boot/src/app-flow.ts:26](https://github.com/beecode-rs/msh-app-boot/blob/ff89a8e/src/app-flow.ts#L26)

___

### create

▸ **create**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

AppFlow.create

#### Defined in

[app-boot/src/app-flow.ts:18](https://github.com/beecode-rs/msh-app-boot/blob/ff89a8e/src/app-flow.ts#L18)

___

### destroy

▸ **destroy**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

AppFlow.destroy

#### Defined in

[app-boot/src/app-flow.ts:22](https://github.com/beecode-rs/msh-app-boot/blob/ff89a8e/src/app-flow.ts#L22)

___

### DeepExecFlowList

▸ **DeepExecFlowList**(`params`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Object` |
| `params.direction` | `FlowDirectionMapper` |
| `params.flowList` | `FlowList` |

#### Returns

`Promise`\<`void`\>

#### Inherited from

AppFlow.DeepExecFlowList

#### Defined in

[app-boot/src/app-flow.ts:30](https://github.com/beecode-rs/msh-app-boot/blob/ff89a8e/src/app-flow.ts#L30)

___

### ExecSyncFlowList

▸ **ExecSyncFlowList**(`lifeCycleList`, `createOrDestroy`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `lifeCycleList` | `LifeCycle`\<`any`\>[] |
| `createOrDestroy` | `FlowDirectionMapper` |

#### Returns

`Promise`\<`void`\>

#### Inherited from

AppFlow.ExecSyncFlowList

#### Defined in

[app-boot/src/app-flow.ts:49](https://github.com/beecode-rs/msh-app-boot/blob/ff89a8e/src/app-flow.ts#L49)
