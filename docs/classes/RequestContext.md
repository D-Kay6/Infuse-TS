[**Infuse-TS**](../README.md)

***

[Infuse-TS](../README.md) / RequestContext

# Class: RequestContext

Defined in: [src/lib/context.ts:5](https://github.com/D-Kay6/Infuse-TS/blob/1387e3f339bea91025c5da407e0b7dff28feffb5/src/lib/context.ts#L5)

## Constructors

### Constructor

> **new RequestContext**(): `RequestContext`

#### Returns

`RequestContext`

## Methods

### get()

> `static` **get**\<`T`\>(`key`): `undefined` \| `T`

Defined in: [src/lib/context.ts:12](https://github.com/D-Kay6/Infuse-TS/blob/1387e3f339bea91025c5da407e0b7dff28feffb5/src/lib/context.ts#L12)

Try to get a value from the current context.

#### Type Parameters

##### T

`T`

The type of the cached item, if available.

#### Parameters

##### key

`string`

The key of the value to get.

#### Returns

`undefined` \| `T`

The value if it exists, otherwise undefined.

***

### set()

> `static` **set**\<`T`\>(`key`, `value`): `void`

Defined in: [src/lib/context.ts:23](https://github.com/D-Kay6/Infuse-TS/blob/1387e3f339bea91025c5da407e0b7dff28feffb5/src/lib/context.ts#L23)

Set a value in the current context.

#### Type Parameters

##### T

`T`

The type of the cacheable item.

#### Parameters

##### key

`string`

The key of the value to set.

##### value

`T`

The value to set.

#### Returns

`void`

#### Remarks

If there is no context, nothing will happen.

***

### run()

> `static` **run**(`fn`): `void`

Defined in: [src/lib/context.ts:32](https://github.com/D-Kay6/Infuse-TS/blob/1387e3f339bea91025c5da407e0b7dff28feffb5/src/lib/context.ts#L32)

Run a function in a new context.

#### Parameters

##### fn

() => `void`

The function to run.

#### Returns

`void`

#### Remarks

This needs to be called in order for any context related functions to work.

***

### runAsync()

> `static` **runAsync**(`fn`): `Promise`\<`void`\>

Defined in: [src/lib/context.ts:41](https://github.com/D-Kay6/Infuse-TS/blob/1387e3f339bea91025c5da407e0b7dff28feffb5/src/lib/context.ts#L41)

Run an async function in a new context.

#### Parameters

##### fn

() => `Promise`\<`void`\>

The function to run.

#### Returns

`Promise`\<`void`\>

#### Remarks

This needs to be called in order for any context related functions to work.
