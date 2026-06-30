[**@beecode/msh-base-frame**](../../../../../../../README.md)

***

[@beecode/msh-base-frame](../../../../../../../README.md) / [lib/zod-adapter](../../../../../README.md) / [z](../../../README.md) / [core](../README.md) / $ZodExactOptionalInternals

# Interface: $ZodExactOptionalInternals\<T\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:878

**`Internal`**

## Extends

- [`$ZodOptionalInternals`]($ZodOptionalInternals.md)\<`T`\>

## Type Parameters

### T

`T` *extends* [`SomeType`](../type-aliases/SomeType.md) = [`$ZodType`]($ZodType-1.md)

## Properties

### bag

> **bag**: `Record`\<`string`, `unknown`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:76

**`Internal`**

A catchall object for bag metadata related to this schema. Commonly modified by checks using `onattach`.

#### Inherited from

[`$ZodOptionalInternals`]($ZodOptionalInternals.md).[`bag`]($ZodOptionalInternals.md#bag)

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

[`$ZodOptionalInternals`]($ZodOptionalInternals.md).[`constr`]($ZodOptionalInternals.md#constr)

***

### def

> **def**: [`$ZodExactOptionalDef`]($ZodExactOptionalDef.md)\<`T`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:879

Schema definition.

#### Overrides

[`$ZodOptionalInternals`]($ZodOptionalInternals.md).[`def`]($ZodOptionalInternals.md#def)

***

### deferred

> **deferred**: [`AnyFunc`](../../util/type-aliases/AnyFunc.md)[] \| `undefined`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:47

**`Internal`**

List of deferred initializers.

#### Inherited from

[`$ZodOptionalInternals`]($ZodOptionalInternals.md).[`deferred`]($ZodOptionalInternals.md#deferred)

***

### input

> **input**: [`input`](../type-aliases/input.md)\<`T`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:881

**`Internal`**

The inferred input type

#### Overrides

[`$ZodOptionalInternals`]($ZodOptionalInternals.md).[`input`]($ZodOptionalInternals.md#input)

***

### isst

> **isst**: `never`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:868

**`Internal`**

The set of issues this schema might throw during type checking.

#### Inherited from

[`$ZodOptionalInternals`]($ZodOptionalInternals.md).[`isst`]($ZodOptionalInternals.md#isst)

***

### optin

> **optin**: `"optional"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:866

**`Internal`**

#### Inherited from

[`$ZodOptionalInternals`]($ZodOptionalInternals.md).[`optin`]($ZodOptionalInternals.md#optin)

***

### optout

> **optout**: `"optional"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:867

**`Internal`**

#### Inherited from

[`$ZodOptionalInternals`]($ZodOptionalInternals.md).[`optout`]($ZodOptionalInternals.md#optout)

***

### output

> **output**: [`output`](../type-aliases/output.md)\<`T`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:880

**`Internal`**

The inferred output type

#### Overrides

[`$ZodOptionalInternals`]($ZodOptionalInternals.md).[`output`]($ZodOptionalInternals.md#output)

***

### parent?

> `optional` **parent?**: [`$ZodType`]($ZodType-1.md)\<`unknown`, `unknown`, [`$ZodTypeInternals`]($ZodTypeInternals-1.md)\<`unknown`, `unknown`\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:84

**`Internal`**

The parent of this schema. Only set during certain clone operations.

#### Inherited from

[`$ZodOptionalInternals`]($ZodOptionalInternals.md).[`parent`]($ZodOptionalInternals.md#parent)

***

### pattern

> **pattern**: `T`\[`"_zod"`\]\[`"pattern"`\]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:870

**`Internal`**

This flag indicates that a schema validation can be represented with a regular expression. Used to determine allowable schemas in z.templateLiteral().

#### Inherited from

[`$ZodOptionalInternals`]($ZodOptionalInternals.md).[`pattern`]($ZodOptionalInternals.md#pattern)

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

[`$ZodOptionalInternals`]($ZodOptionalInternals.md).[`processJSONSchema`]($ZodOptionalInternals.md#processjsonschema)

***

### propValues?

> `optional` **propValues?**: [`PropValues`](../../util/type-aliases/PropValues.md)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:70

**`Internal`**

A set of literal discriminators used for the fast path in discriminated unions.

#### Inherited from

[`$ZodOptionalInternals`]($ZodOptionalInternals.md).[`propValues`]($ZodOptionalInternals.md#propvalues)

***

### toJSONSchema?

> `optional` **toJSONSchema?**: () => `unknown`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:82

An optional method used to override `toJSONSchema` logic.

#### Returns

`unknown`

#### Inherited from

[`$ZodOptionalInternals`]($ZodOptionalInternals.md).[`toJSONSchema`]($ZodOptionalInternals.md#tojsonschema)

***

### traits

> **traits**: `Set`\<`string`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:53

**`Internal`**

Stores identifiers for the set of traits implemented by this schema.

#### Inherited from

[`$ZodOptionalInternals`]($ZodOptionalInternals.md).[`traits`]($ZodOptionalInternals.md#traits)

***

### values

> **values**: `T`\[`"_zod"`\]\[`"values"`\]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:869

**`Internal`**

The set of literal values that will pass validation. Must be an exhaustive set. Used to determine optionality in z.record().

Defined on: enum, const, literal, null, undefined
Passthrough: optional, nullable, branded, default, catch, pipe
Todo: unions?

#### Inherited from

[`$ZodOptionalInternals`]($ZodOptionalInternals.md).[`values`]($ZodOptionalInternals.md#values)

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

[`$ZodOptionalInternals`]($ZodOptionalInternals.md).[`version`]($ZodOptionalInternals.md#version)

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

[`$ZodOptionalInternals`]($ZodOptionalInternals.md).[`parse`]($ZodOptionalInternals.md#parse)

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

[`$ZodOptionalInternals`]($ZodOptionalInternals.md).[`run`]($ZodOptionalInternals.md#run)
