[**@beecode/msh-base-frame**](../../../../../../../README.md)

***

[@beecode/msh-base-frame](../../../../../../../README.md) / [lib/zod-adapter](../../../../../README.md) / [z](../../../README.md) / [core](../README.md) / $ZodNumberFormatInternals

# Interface: $ZodNumberFormatInternals

Defined in: node\_modules/zod/v4/core/schemas.d.cts:410

**`Internal`**

## Extends

- [`$ZodNumberInternals`]($ZodNumberInternals.md)\<`number`\>.[`$ZodCheckNumberFormatInternals`]($ZodCheckNumberFormatInternals.md)

## Properties

### bag

> **bag**: [`LoosePartial`](../../util/type-aliases/LoosePartial.md)\<\{ `exclusiveMaximum`: `number`; `exclusiveMinimum`: `number`; `format`: `string`; `maximum`: `number`; `minimum`: `number`; `pattern`: `RegExp`; \}\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:395

**`Internal`**

A catchall object for bag metadata related to this schema. Commonly modified by checks using `onattach`.

#### Inherited from

[`$ZodNumberInternals`]($ZodNumberInternals.md).[`bag`]($ZodNumberInternals.md#bag)

***

### constr

> **constr**: (`def`) => [`$ZodType`]($ZodType-1.md)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:74

**`Internal`**

The constructor function of this schema.

#### Parameters

##### def

`any`

#### Returns

[`$ZodType`]($ZodType-1.md)

#### Inherited from

[`$ZodNumberInternals`]($ZodNumberInternals.md).[`constr`]($ZodNumberInternals.md#constr)

***

### def

> **def**: [`$ZodNumberFormatDef`]($ZodNumberFormatDef.md)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:411

Schema definition.

#### Overrides

[`$ZodNumberInternals`]($ZodNumberInternals.md).[`def`]($ZodNumberInternals.md#def)

***

### deferred

> **deferred**: [`AnyFunc`](../../util/type-aliases/AnyFunc.md)[] \| `undefined`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:47

**`Internal`**

List of deferred initializers.

#### Inherited from

[`$ZodNumberInternals`]($ZodNumberInternals.md).[`deferred`]($ZodNumberInternals.md#deferred)

***

### input

> **input**: `number`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:91

**`Internal`**

The inferred input type

#### Inherited from

[`$ZodNumberInternals`]($ZodNumberInternals.md).[`input`]($ZodNumberInternals.md#input-1)

***

### issc

> **issc**: [`$ZodIssueInvalidType`]($ZodIssueInvalidType.md)\<`unknown`\> \| [`$ZodIssueTooBig`]($ZodIssueTooBig.md)\<`"number"`\> \| [`$ZodIssueTooSmall`]($ZodIssueTooSmall.md)\<`"number"`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:69

The set of issues this check might throw.

#### Inherited from

`$ZodNumberFormatInternals`.[`issc`](#issc)

***

### ~~isst~~

> **isst**: [`$ZodIssueInvalidType`]($ZodIssueInvalidType.md)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:412

#### Deprecated

Internal API, use with caution (not deprecated)

#### Overrides

[`$ZodNumberInternals`]($ZodNumberInternals.md).[`isst`]($ZodNumberInternals.md#isst)

***

### onattach

> **onattach**: (`schema`) => `void`[]

Defined in: node\_modules/zod/v4/core/checks.d.cts:18

#### Parameters

##### schema

[`$ZodType`]($ZodType-1.md)

#### Returns

`void`

#### Inherited from

[`$ZodCheckNumberFormatInternals`]($ZodCheckNumberFormatInternals.md).[`onattach`]($ZodCheckNumberFormatInternals.md#onattach)

***

### optin?

> `optional` **optin?**: `"optional"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:58

**`Internal`**

#### Inherited from

[`$ZodNumberInternals`]($ZodNumberInternals.md).[`optin`]($ZodNumberInternals.md#optin)

***

### optout?

> `optional` **optout?**: `"optional"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:60

**`Internal`**

#### Inherited from

[`$ZodNumberInternals`]($ZodNumberInternals.md).[`optout`]($ZodNumberInternals.md#optout)

***

### output

> **output**: `number`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:89

**`Internal`**

The inferred output type

#### Inherited from

[`$ZodNumberInternals`]($ZodNumberInternals.md).[`output`]($ZodNumberInternals.md#output)

***

### parent?

> `optional` **parent?**: [`$ZodType`]($ZodType-1.md)\<`unknown`, `unknown`, [`$ZodTypeInternals`]($ZodTypeInternals-1.md)\<`unknown`, `unknown`\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:84

**`Internal`**

The parent of this schema. Only set during certain clone operations.

#### Inherited from

[`$ZodNumberInternals`]($ZodNumberInternals.md).[`parent`]($ZodNumberInternals.md#parent)

***

### ~~pattern~~

> **pattern**: `RegExp`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:392

#### Deprecated

Internal API, use with caution (not deprecated)

#### Inherited from

[`$ZodNumberInternals`]($ZodNumberInternals.md).[`pattern`]($ZodNumberInternals.md#pattern)

***

### processJSONSchema?

> `optional` **processJSONSchema?**: (`ctx`, `json`, `params`) => `void`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:80

**`Internal`**

Subject to change, not a public API.

#### Parameters

##### ctx

[`ToJSONSchemaContext`](ToJSONSchemaContext.md)

##### json

[`JSONSchema`](../namespaces/JSONSchema/type-aliases/JSONSchema-1.md)

##### params

[`ProcessParams`](ProcessParams.md)

#### Returns

`void`

#### Inherited from

[`$ZodNumberInternals`]($ZodNumberInternals.md).[`processJSONSchema`]($ZodNumberInternals.md#processjsonschema)

***

### propValues?

> `optional` **propValues?**: [`PropValues`](../../util/type-aliases/PropValues.md)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:70

**`Internal`**

A set of literal discriminators used for the fast path in discriminated unions.

#### Inherited from

[`$ZodNumberInternals`]($ZodNumberInternals.md).[`propValues`]($ZodNumberInternals.md#propvalues)

***

### toJSONSchema?

> `optional` **toJSONSchema?**: () => `unknown`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:82

An optional method used to override `toJSONSchema` logic.

#### Returns

`unknown`

#### Inherited from

[`$ZodNumberInternals`]($ZodNumberInternals.md).[`toJSONSchema`]($ZodNumberInternals.md#tojsonschema)

***

### traits

> **traits**: `Set`\<`string`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:53

**`Internal`**

Stores identifiers for the set of traits implemented by this schema.

#### Inherited from

[`$ZodNumberInternals`]($ZodNumberInternals.md).[`traits`]($ZodNumberInternals.md#traits)

***

### values?

> `optional` **values?**: [`PrimitiveSet`](../../util/type-aliases/PrimitiveSet.md)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:67

**`Internal`**

The set of literal values that will pass validation. Must be an exhaustive set. Used to determine optionality in z.record().

Defined on: enum, const, literal, null, undefined
Passthrough: optional, nullable, branded, default, catch, pipe
Todo: unions?

#### Inherited from

[`$ZodNumberInternals`]($ZodNumberInternals.md).[`values`]($ZodNumberInternals.md#values)

***

### version

> **version**: `object`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:42

The `@zod/core` version of this schema

#### major

> `readonly` **major**: `4`

#### minor

> `readonly` **minor**: `4`

#### patch

> `readonly` **patch**: `number`

#### Inherited from

[`$ZodNumberInternals`]($ZodNumberInternals.md).[`version`]($ZodNumberInternals.md#version)

## Methods

### check()

> **check**(`payload`): [`MaybeAsync`](../../util/type-aliases/MaybeAsync.md)\<`void`\>

Defined in: node\_modules/zod/v4/core/checks.d.cts:17

#### Parameters

##### payload

[`ParsePayload`](ParsePayload.md)\<`number`\>

#### Returns

[`MaybeAsync`](../../util/type-aliases/MaybeAsync.md)\<`void`\>

#### Inherited from

[`$ZodCheckNumberFormatInternals`]($ZodCheckNumberFormatInternals.md).[`check`]($ZodCheckNumberFormatInternals.md#check)

***

### parse()

> **parse**(`payload`, `ctx`): [`MaybeAsync`](../../util/type-aliases/MaybeAsync.md)\<[`ParsePayload`](ParsePayload.md)\<`unknown`\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:51

**`Internal`**

Parses input, doesn't run checks.

#### Parameters

##### payload

[`ParsePayload`](ParsePayload.md)\<`any`\>

##### ctx

[`ParseContextInternal`](ParseContextInternal.md)

#### Returns

[`MaybeAsync`](../../util/type-aliases/MaybeAsync.md)\<[`ParsePayload`](ParsePayload.md)\<`unknown`\>\>

#### Inherited from

[`$ZodNumberInternals`]($ZodNumberInternals.md).[`parse`]($ZodNumberInternals.md#parse)

***

### run()

> **run**(`payload`, `ctx`): [`MaybeAsync`](../../util/type-aliases/MaybeAsync.md)\<[`ParsePayload`](ParsePayload.md)\<`unknown`\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:49

**`Internal`**

Parses input and runs all checks (refinements).

#### Parameters

##### payload

[`ParsePayload`](ParsePayload.md)\<`any`\>

##### ctx

[`ParseContextInternal`](ParseContextInternal.md)

#### Returns

[`MaybeAsync`](../../util/type-aliases/MaybeAsync.md)\<[`ParsePayload`](ParsePayload.md)\<`unknown`\>\>

#### Inherited from

[`$ZodNumberInternals`]($ZodNumberInternals.md).[`run`]($ZodNumberInternals.md#run)
