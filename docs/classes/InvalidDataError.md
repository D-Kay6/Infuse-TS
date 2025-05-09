[**Infuse-TS**](../README.md)

***

[Infuse-TS](../README.md) / InvalidDataError

# Class: InvalidDataError

Defined in: [src/errors/invalid-data.error.ts:1](https://github.com/D-Kay6/Infuse-TS/blob/2b827980e37dbd9518746d6b95150b5d8563c940/src/errors/invalid-data.error.ts#L1)

## Extends

- `Error`

## Constructors

### Constructor

> **new InvalidDataError**(`message?`): `InvalidDataError`

Defined in: [src/errors/invalid-data.error.ts:2](https://github.com/D-Kay6/Infuse-TS/blob/2b827980e37dbd9518746d6b95150b5d8563c940/src/errors/invalid-data.error.ts#L2)

#### Parameters

##### message?

`string`

#### Returns

`InvalidDataError`

#### Overrides

`Error.constructor`

## Properties

### prepareStackTrace()?

> `static` `optional` **prepareStackTrace**: (`err`, `stackTraces`) => `any`

Defined in: node\_modules/bun-types/globals.d.ts:962

Optional override for formatting stack traces

#### Parameters

##### err

`Error`

##### stackTraces

`CallSite`[]

#### Returns

`any`

#### See

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Inherited from

`Error.prepareStackTrace`

***

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

Defined in: node\_modules/bun-types/globals.d.ts:967

The maximum number of stack frames to capture.

#### Inherited from

`Error.stackTraceLimit`

***

### cause?

> `optional` **cause**: `unknown`

Defined in: node\_modules/typescript/lib/lib.es2022.error.d.ts:26

The cause of the error.

#### Inherited from

`Error.cause`

***

### name

> **name**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1076

#### Inherited from

`Error.name`

***

### message

> **message**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1077

#### Inherited from

`Error.message`

***

### stack?

> `optional` **stack**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1078

#### Inherited from

`Error.stack`

## Methods

### isError()

> `static` **isError**(`value`): `value is Error`

Defined in: node\_modules/bun-types/globals.d.ts:950

Check if a value is an instance of Error

#### Parameters

##### value

`unknown`

The value to check

#### Returns

`value is Error`

True if the value is an instance of Error, false otherwise

#### Inherited from

`Error.isError`

***

### captureStackTrace()

#### Call Signature

> `static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Defined in: node\_modules/bun-types/globals.d.ts:955

Create .stack property on a target object

##### Parameters

###### targetObject

`object`

###### constructorOpt?

`Function`

##### Returns

`void`

##### Inherited from

`Error.captureStackTrace`

#### Call Signature

> `static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Defined in: node\_modules/@types/node/globals.d.ts:136

Create .stack property on a target object

##### Parameters

###### targetObject

`object`

###### constructorOpt?

`Function`

##### Returns

`void`

##### Inherited from

`Error.captureStackTrace`
