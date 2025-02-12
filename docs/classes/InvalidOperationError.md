[**Infuse-TS**](../README.md)

***

[Infuse-TS](../README.md) / InvalidOperationError

# Class: InvalidOperationError

Defined in: [src/errors/invalid-operation.error.ts:1](https://github.com/D-Kay6/Infuse-TS/blob/183255f9a4ec5e9ee4dba778a499aaf2ce7f4763/src/errors/invalid-operation.error.ts#L1)

## Extends

- `Error`

## Constructors

### new InvalidOperationError()

> **new InvalidOperationError**(`message`?): [`InvalidOperationError`](InvalidOperationError.md)

Defined in: [src/errors/invalid-operation.error.ts:2](https://github.com/D-Kay6/Infuse-TS/blob/183255f9a4ec5e9ee4dba778a499aaf2ce7f4763/src/errors/invalid-operation.error.ts#L2)

#### Parameters

##### message?

`string`

#### Returns

[`InvalidOperationError`](InvalidOperationError.md)

#### Overrides

`Error.constructor`

## Properties

### prepareStackTrace()?

> `static` `optional` **prepareStackTrace**: (`err`, `stackTraces`) => `any`

Defined in: node\_modules/@types/node/globals.d.ts:143

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

Defined in: node\_modules/@types/node/globals.d.ts:145

#### Inherited from

`Error.stackTraceLimit`

***

### cause?

> `optional` **cause**: `unknown`

Defined in: node\_modules/typescript/lib/lib.es2022.error.d.ts:24

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

### captureStackTrace()

> `static` **captureStackTrace**(`targetObject`, `constructorOpt`?): `void`

Defined in: node\_modules/@types/node/globals.d.ts:136

Create .stack property on a target object

#### Parameters

##### targetObject

`object`

##### constructorOpt?

`Function`

#### Returns

`void`

#### Inherited from

`Error.captureStackTrace`
