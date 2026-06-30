[**@beecode/msh-base-frame**](../../../../../../../README.md)

***

[@beecode/msh-base-frame](../../../../../../../README.md) / [lib/zod-adapter](../../../../../README.md) / [z](../../../README.md) / [core](../README.md) / $ZodObjectInternals

# Interface: $ZodObjectInternals\<Shape, Config\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:624

## Extends

- [`_$ZodTypeInternals`]($ZodTypeInternals.md)

## Type Parameters

### Shape

`Shape` *extends* [`$ZodShape`](../type-aliases/$ZodShape.md) = [`$ZodShape`](../type-aliases/$ZodShape.md)

### Config

`Config` *extends* [`$ZodObjectConfig`](../type-aliases/$ZodObjectConfig.md) = [`$ZodObjectConfig`](../type-aliases/$ZodObjectConfig.md)

## Properties

### bag

> **bag**: `Record`\<`string`, `unknown`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:76

**`Internal`**

A catchall object for bag metadata related to this schema. Commonly modified by checks using `onattach`.

#### Inherited from

[`_$ZodTypeInternals`]($ZodTypeInternals.md).[`bag`]($ZodTypeInternals.md#bag)

***

### config

> **config**: `Config`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:628

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

[`_$ZodTypeInternals`]($ZodTypeInternals.md).[`constr`]($ZodTypeInternals.md#constr)

***

### def

> **def**: [`$ZodObjectDef`]($ZodObjectDef.md)\<`Shape`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:627

Schema definition.

#### Overrides

[`_$ZodTypeInternals`]($ZodTypeInternals.md).[`def`]($ZodTypeInternals.md#def)

***

### deferred

> **deferred**: [`AnyFunc`](../../util/type-aliases/AnyFunc.md)[] \| `undefined`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:47

**`Internal`**

List of deferred initializers.

#### Inherited from

[`_$ZodTypeInternals`]($ZodTypeInternals.md).[`deferred`]($ZodTypeInternals.md#deferred)

***

### input

> **input**: [`$InferObjectInput`](../type-aliases/$InferObjectInput.md)\<`Shape`, `Config`\[`"in"`\]\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:632

***

### isst

> **isst**: [`$ZodIssueUnrecognizedKeys`]($ZodIssueUnrecognizedKeys.md) \| [`$ZodIssueInvalidType`]($ZodIssueInvalidType.md)\<`unknown`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:629

**`Internal`**

The set of issues this schema might throw during type checking.

#### Overrides

[`_$ZodTypeInternals`]($ZodTypeInternals.md).[`isst`]($ZodTypeInternals.md#isst)

***

### optin?

> `optional` **optin?**: `"optional"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:633

**`Internal`**

#### Overrides

[`_$ZodTypeInternals`]($ZodTypeInternals.md).[`optin`]($ZodTypeInternals.md#optin)

***

### optout?

> `optional` **optout?**: `"optional"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:634

**`Internal`**

#### Overrides

[`_$ZodTypeInternals`]($ZodTypeInternals.md).[`optout`]($ZodTypeInternals.md#optout)

***

### output

> **output**: [`$InferObjectOutput`](../type-aliases/$InferObjectOutput.md)\<`Shape`, `Config`\[`"out"`\]\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:631

***

### parent?

> `optional` **parent?**: [`$ZodType`]($ZodType-1.md)\<`unknown`, `unknown`, [`$ZodTypeInternals`]($ZodTypeInternals-1.md)\<`unknown`, `unknown`\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:84

**`Internal`**

The parent of this schema. Only set during certain clone operations.

#### Inherited from

[`_$ZodTypeInternals`]($ZodTypeInternals.md).[`parent`]($ZodTypeInternals.md#parent)

***

### pattern

> **pattern**: `RegExp` \| `undefined`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:72

**`Internal`**

This flag indicates that a schema validation can be represented with a regular expression. Used to determine allowable schemas in z.templateLiteral().

#### Inherited from

[`_$ZodTypeInternals`]($ZodTypeInternals.md).[`pattern`]($ZodTypeInternals.md#pattern)

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

[`_$ZodTypeInternals`]($ZodTypeInternals.md).[`processJSONSchema`]($ZodTypeInternals.md#processjsonschema)

***

### propValues

> **propValues**: [`PropValues`](../../util/type-aliases/PropValues.md)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:630

**`Internal`**

A set of literal discriminators used for the fast path in discriminated unions.

#### Overrides

[`_$ZodTypeInternals`]($ZodTypeInternals.md).[`propValues`]($ZodTypeInternals.md#propvalues)

***

### toJSONSchema?

> `optional` **toJSONSchema?**: () => `unknown`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:82

An optional method used to override `toJSONSchema` logic.

#### Returns

`unknown`

#### Inherited from

[`_$ZodTypeInternals`]($ZodTypeInternals.md).[`toJSONSchema`]($ZodTypeInternals.md#tojsonschema)

***

### traits

> **traits**: `Set`\<`string`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:53

**`Internal`**

Stores identifiers for the set of traits implemented by this schema.

#### Inherited from

[`_$ZodTypeInternals`]($ZodTypeInternals.md).[`traits`]($ZodTypeInternals.md#traits)

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

[`_$ZodTypeInternals`]($ZodTypeInternals.md).[`values`]($ZodTypeInternals.md#values)

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

[`_$ZodTypeInternals`]($ZodTypeInternals.md).[`version`]($ZodTypeInternals.md#version)

## Methods

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

[`_$ZodTypeInternals`]($ZodTypeInternals.md).[`parse`]($ZodTypeInternals.md#parse)

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

[`_$ZodTypeInternals`]($ZodTypeInternals.md).[`run`]($ZodTypeInternals.md#run)
