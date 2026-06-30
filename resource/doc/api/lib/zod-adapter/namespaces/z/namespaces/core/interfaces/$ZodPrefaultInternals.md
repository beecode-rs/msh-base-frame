[**@beecode/msh-base-frame**](../../../../../../../README.md)

***

[@beecode/msh-base-frame](../../../../../../../README.md) / [lib/zod-adapter](../../../../../README.md) / [z](../../../README.md) / [core](../README.md) / $ZodPrefaultInternals

# Interface: $ZodPrefaultInternals\<T\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:926

**`Internal`**

## Extends

- [`$ZodTypeInternals`]($ZodTypeInternals-1.md)\<[`NoUndefined`](../../util/type-aliases/NoUndefined.md)\<[`output`](../type-aliases/output.md)\<`T`\>\>, [`input`](../type-aliases/input.md)\<`T`\> \| `undefined`\>

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

[`$ZodTypeInternals`]($ZodTypeInternals-1.md).[`bag`]($ZodTypeInternals-1.md#bag)

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

[`$ZodTypeInternals`]($ZodTypeInternals-1.md).[`constr`]($ZodTypeInternals-1.md#constr)

***

### def

> **def**: [`$ZodPrefaultDef`]($ZodPrefaultDef.md)\<`T`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:927

Schema definition.

#### Overrides

[`$ZodTypeInternals`]($ZodTypeInternals-1.md).[`def`]($ZodTypeInternals-1.md#def)

***

### deferred

> **deferred**: [`AnyFunc`](../../util/type-aliases/AnyFunc.md)[] \| `undefined`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:47

**`Internal`**

List of deferred initializers.

#### Inherited from

[`$ZodTypeInternals`]($ZodTypeInternals-1.md).[`deferred`]($ZodTypeInternals-1.md#deferred)

***

### input

> **input**: [`input`](../type-aliases/input.md)\<`T`\> \| `undefined`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:91

**`Internal`**

The inferred input type

#### Inherited from

[`$ZodTypeInternals`]($ZodTypeInternals-1.md).[`input`]($ZodTypeInternals-1.md#input)

***

### isst

> **isst**: `never`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:930

**`Internal`**

The set of issues this schema might throw during type checking.

#### Overrides

[`$ZodTypeInternals`]($ZodTypeInternals-1.md).[`isst`]($ZodTypeInternals-1.md#isst)

***

### optin

> **optin**: `"optional"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:928

**`Internal`**

#### Overrides

[`$ZodTypeInternals`]($ZodTypeInternals-1.md).[`optin`]($ZodTypeInternals-1.md#optin)

***

### optout?

> `optional` **optout?**: `"optional"`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:929

**`Internal`**

#### Overrides

[`$ZodTypeInternals`]($ZodTypeInternals-1.md).[`optout`]($ZodTypeInternals-1.md#optout)

***

### output

> **output**: [`NoUndefined`](../../util/type-aliases/NoUndefined.md)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:89

**`Internal`**

The inferred output type

#### Inherited from

[`$ZodTypeInternals`]($ZodTypeInternals-1.md).[`output`]($ZodTypeInternals-1.md#output)

***

### parent?

> `optional` **parent?**: [`$ZodType`]($ZodType-1.md)\<`unknown`, `unknown`, [`$ZodTypeInternals`]($ZodTypeInternals-1.md)\<`unknown`, `unknown`\>\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:84

**`Internal`**

The parent of this schema. Only set during certain clone operations.

#### Inherited from

[`$ZodTypeInternals`]($ZodTypeInternals-1.md).[`parent`]($ZodTypeInternals-1.md#parent)

***

### pattern

> **pattern**: `RegExp` \| `undefined`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:72

**`Internal`**

This flag indicates that a schema validation can be represented with a regular expression. Used to determine allowable schemas in z.templateLiteral().

#### Inherited from

[`$ZodTypeInternals`]($ZodTypeInternals-1.md).[`pattern`]($ZodTypeInternals-1.md#pattern)

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

[`$ZodTypeInternals`]($ZodTypeInternals-1.md).[`processJSONSchema`]($ZodTypeInternals-1.md#processjsonschema)

***

### propValues?

> `optional` **propValues?**: [`PropValues`](../../util/type-aliases/PropValues.md)

Defined in: node\_modules/zod/v4/core/schemas.d.cts:70

**`Internal`**

A set of literal discriminators used for the fast path in discriminated unions.

#### Inherited from

[`$ZodTypeInternals`]($ZodTypeInternals-1.md).[`propValues`]($ZodTypeInternals-1.md#propvalues)

***

### toJSONSchema?

> `optional` **toJSONSchema?**: () => `unknown`

Defined in: node\_modules/zod/v4/core/schemas.d.cts:82

An optional method used to override `toJSONSchema` logic.

#### Returns

`unknown`

#### Inherited from

[`$ZodTypeInternals`]($ZodTypeInternals-1.md).[`toJSONSchema`]($ZodTypeInternals-1.md#tojsonschema)

***

### traits

> **traits**: `Set`\<`string`\>

Defined in: node\_modules/zod/v4/core/schemas.d.cts:53

**`Internal`**

Stores identifiers for the set of traits implemented by this schema.

#### Inherited from

[`$ZodTypeInternals`]($ZodTypeInternals-1.md).[`traits`]($ZodTypeInternals-1.md#traits)

***

### values

> **values**: `T`\[`"_zod"`\]\[`"values"`\]

Defined in: node\_modules/zod/v4/core/schemas.d.cts:931

**`Internal`**

The set of literal values that will pass validation. Must be an exhaustive set. Used to determine optionality in z.record().

Defined on: enum, const, literal, null, undefined
Passthrough: optional, nullable, branded, default, catch, pipe
Todo: unions?

#### Overrides

[`$ZodTypeInternals`]($ZodTypeInternals-1.md).[`values`]($ZodTypeInternals-1.md#values)

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

[`$ZodTypeInternals`]($ZodTypeInternals-1.md).[`version`]($ZodTypeInternals-1.md#version)

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

[`$ZodTypeInternals`]($ZodTypeInternals-1.md).[`parse`]($ZodTypeInternals-1.md#parse)

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

[`$ZodTypeInternals`]($ZodTypeInternals-1.md).[`run`]($ZodTypeInternals-1.md#run)
