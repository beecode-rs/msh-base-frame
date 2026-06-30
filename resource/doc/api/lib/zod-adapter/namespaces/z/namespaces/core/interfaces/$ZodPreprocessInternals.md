[**@beecode/msh-base-frame**](../../../../../../../README.md)

***

[@beecode/msh-base-frame](../../../../../../../README.md) / [lib/zod-adapter](../../../../../README.md) / [z](../../../README.md) / [core](../README.md) / $ZodPreprocessInternals

# Interface: $ZodPreprocessInternals\<B\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:1042

**`Internal`**

## Extends

- [`$ZodPipeInternals`]($ZodPipeInternals.md)\<[`$ZodTransform`]($ZodTransform.md), `B`\>

## Type Parameters

### B

`B` *extends* [`SomeType`](../type-aliases/SomeType.md) = [`$ZodType`]($ZodType-1.md)

## Properties

### bag

> **bag**: `Record`\<`string`, `unknown`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:76

**`Internal`**

A catchall object for bag metadata related to this schema. Commonly modified by checks using `onattach`.

#### Inherited from

[`$ZodPipeInternals`]($ZodPipeInternals.md).[`bag`]($ZodPipeInternals.md#bag)

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

[`$ZodPipeInternals`]($ZodPipeInternals.md).[`constr`]($ZodPipeInternals.md#constr)

***

### def

> **def**: [`$ZodPreprocessDef`]($ZodPreprocessDef.md)\<`B`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:1043

Schema definition.

#### Overrides

[`$ZodPipeInternals`]($ZodPipeInternals.md).[`def`]($ZodPipeInternals.md#def)

***

### deferred

> **deferred**: [`AnyFunc`](../../util/type-aliases/AnyFunc.md)[] \| `undefined`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:47

**`Internal`**

List of deferred initializers.

#### Inherited from

[`$ZodPipeInternals`]($ZodPipeInternals.md).[`deferred`]($ZodPipeInternals.md#deferred)

***

### input

> **input**: `unknown`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:91

**`Internal`**

The inferred input type

#### Inherited from

[`$ZodPipeInternals`]($ZodPipeInternals.md).[`input`]($ZodPipeInternals.md#input)

***

### isst

> **isst**: `never`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:1012

**`Internal`**

The set of issues this schema might throw during type checking.

#### Inherited from

[`$ZodPipeInternals`]($ZodPipeInternals.md).[`isst`]($ZodPipeInternals.md#isst)

***

### optin

> **optin**: `B`\[`"_zod"`\]\[`"optin"`\]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:1044

**`Internal`**

#### Overrides

[`$ZodPipeInternals`]($ZodPipeInternals.md).[`optin`]($ZodPipeInternals.md#optin)

***

### optout

> **optout**: `B`\[`"_zod"`\]\[`"optout"`\]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:1045

**`Internal`**

#### Overrides

[`$ZodPipeInternals`]($ZodPipeInternals.md).[`optout`]($ZodPipeInternals.md#optout)

***

### output

> **output**: [`output`](../type-aliases/output.md)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:89

**`Internal`**

The inferred output type

#### Inherited from

[`$ZodPipeInternals`]($ZodPipeInternals.md).[`output`]($ZodPipeInternals.md#output)

***

### parent?

> `optional` **parent?**: [`$ZodType`]($ZodType-1.md)\<`unknown`, `unknown`, [`$ZodTypeInternals`]($ZodTypeInternals-1.md)\<`unknown`, `unknown`\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:84

**`Internal`**

The parent of this schema. Only set during certain clone operations.

#### Inherited from

[`$ZodPipeInternals`]($ZodPipeInternals.md).[`parent`]($ZodPipeInternals.md#parent)

***

### pattern

> **pattern**: `RegExp` \| `undefined`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:72

**`Internal`**

This flag indicates that a schema validation can be represented with a regular expression. Used to determine allowable schemas in z.templateLiteral().

#### Inherited from

[`$ZodPipeInternals`]($ZodPipeInternals.md).[`pattern`]($ZodPipeInternals.md#pattern)

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

[`$ZodPipeInternals`]($ZodPipeInternals.md).[`processJSONSchema`]($ZodPipeInternals.md#processjsonschema)

***

### propValues

> **propValues**: [`PropValues`](../../util/type-aliases/PropValues.md) \| `undefined`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:1016

**`Internal`**

A set of literal discriminators used for the fast path in discriminated unions.

#### Inherited from

[`$ZodPipeInternals`]($ZodPipeInternals.md).[`propValues`]($ZodPipeInternals.md#propvalues)

***

### toJSONSchema?

> `optional` **toJSONSchema?**: () => `unknown`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:82

An optional method used to override `toJSONSchema` logic.

#### Returns

`unknown`

#### Inherited from

[`$ZodPipeInternals`]($ZodPipeInternals.md).[`toJSONSchema`]($ZodPipeInternals.md#tojsonschema)

***

### traits

> **traits**: `Set`\<`string`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:53

**`Internal`**

Stores identifiers for the set of traits implemented by this schema.

#### Inherited from

[`$ZodPipeInternals`]($ZodPipeInternals.md).[`traits`]($ZodPipeInternals.md#traits)

***

### values

> **values**: [`PrimitiveSet`](../../util/type-aliases/PrimitiveSet.md) \| `undefined`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:1013

**`Internal`**

The set of literal values that will pass validation. Must be an exhaustive set. Used to determine optionality in z.record().

Defined on: enum, const, literal, null, undefined
Passthrough: optional, nullable, branded, default, catch, pipe
Todo: unions?

#### Inherited from

[`$ZodPipeInternals`]($ZodPipeInternals.md).[`values`]($ZodPipeInternals.md#values)

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

[`$ZodPipeInternals`]($ZodPipeInternals.md).[`version`]($ZodPipeInternals.md#version)

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

[`$ZodPipeInternals`]($ZodPipeInternals.md).[`parse`]($ZodPipeInternals.md#parse)

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

[`$ZodPipeInternals`]($ZodPipeInternals.md).[`run`]($ZodPipeInternals.md#run)
