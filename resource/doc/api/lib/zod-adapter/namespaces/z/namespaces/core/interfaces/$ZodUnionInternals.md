[**@beecode/msh-base-frame**](../../../../../../../README.md)

***

[@beecode/msh-base-frame](../../../../../../../README.md) / [lib/zod-adapter](../../../../../README.md) / [z](../../../README.md) / [core](../README.md) / $ZodUnionInternals

# Interface: $ZodUnionInternals\<T\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:652

## Extends

- [`_$ZodTypeInternals`]($ZodTypeInternals.md)

## Extended by

- [`$ZodXorInternals`]($ZodXorInternals.md)
- [`$ZodDiscriminatedUnionInternals`]($ZodDiscriminatedUnionInternals.md)

## Type Parameters

### T

`T` *extends* readonly [`SomeType`](../type-aliases/SomeType.md)[] = readonly [`$ZodType`]($ZodType-1.md)[]

## Properties

### bag

> **bag**: `Record`\<`string`, `unknown`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:76

**`Internal`**

A catchall object for bag metadata related to this schema. Commonly modified by checks using `onattach`.

#### Inherited from

[`_$ZodTypeInternals`]($ZodTypeInternals.md).[`bag`]($ZodTypeInternals.md#bag)

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

> **def**: [`$ZodUnionDef`]($ZodUnionDef.md)\<`T`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:653

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

> **input**: [`$InferUnionInput`](../type-aliases/$InferUnionInput.md)\<`T`\[`number`\]\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:658

***

### isst

> **isst**: [`$ZodIssueInvalidUnion`](../type-aliases/$ZodIssueInvalidUnion.md)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:654

**`Internal`**

The set of issues this schema might throw during type checking.

#### Overrides

[`_$ZodTypeInternals`]($ZodTypeInternals.md).[`isst`]($ZodTypeInternals.md#isst)

***

### optin

> **optin**: `IsOptionalIn`\<`T`\[`number`\]\> *extends* `false` ? `"optional"` \| `undefined` : `"optional"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:659

**`Internal`**

#### Overrides

[`_$ZodTypeInternals`]($ZodTypeInternals.md).[`optin`]($ZodTypeInternals.md#optin)

***

### optout

> **optout**: `IsOptionalOut`\<`T`\[`number`\]\> *extends* `false` ? `"optional"` \| `undefined` : `"optional"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:660

**`Internal`**

#### Overrides

[`_$ZodTypeInternals`]($ZodTypeInternals.md).[`optout`]($ZodTypeInternals.md#optout)

***

### output

> **output**: [`$InferUnionOutput`](../type-aliases/$InferUnionOutput.md)\<`T`\[`number`\]\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:657

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

> **pattern**: `T`\[`number`\]\[`"_zod"`\]\[`"pattern"`\]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:655

**`Internal`**

This flag indicates that a schema validation can be represented with a regular expression. Used to determine allowable schemas in z.templateLiteral().

#### Overrides

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

### propValues?

> `optional` **propValues?**: [`PropValues`](../../util/type-aliases/PropValues.md)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:70

**`Internal`**

A set of literal discriminators used for the fast path in discriminated unions.

#### Inherited from

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

### values

> **values**: `T`\[`number`\]\[`"_zod"`\]\[`"values"`\]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:656

**`Internal`**

The set of literal values that will pass validation. Must be an exhaustive set. Used to determine optionality in z.record().

Defined on: enum, const, literal, null, undefined
Passthrough: optional, nullable, branded, default, catch, pipe
Todo: unions?

#### Overrides

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
