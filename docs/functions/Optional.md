[**Infuse-TS**](../README.md)

***

[Infuse-TS](../README.md) / Optional

# Function: Optional()

## Call Signature

> **Optional**\<`Type`\>(`identifier`): [`Optionally`](../type-aliases/Optionally.md)\<[`Identifier`](../type-aliases/Identifier.md)\<`Type`\>\>

Defined in: [src/lib/tokens.ts:9](https://github.com/D-Kay6/Infuse-TS/blob/10bae258e5f565f29eb517fd3b4bbd7f4f6e62d8/src/lib/tokens.ts#L9)

A wrapper for a dependency that may be optional.

### Type Parameters

• **Type**

The type of the dependency.

### Parameters

#### identifier

[`Identifier`](../type-aliases/Identifier.md)\<`Type`\>

The identifier of the dependency.

### Returns

[`Optionally`](../type-aliases/Optionally.md)\<[`Identifier`](../type-aliases/Identifier.md)\<`Type`\>\>

An object with the dependency and optional flag.

## Call Signature

> **Optional**\<`Type`\>(`collection`): [`Optionally`](../type-aliases/Optionally.md)\<[`Collection`](../type-aliases/Collection.md)\<`Type`\>\>

Defined in: [src/lib/tokens.ts:16](https://github.com/D-Kay6/Infuse-TS/blob/10bae258e5f565f29eb517fd3b4bbd7f4f6e62d8/src/lib/tokens.ts#L16)

A wrapper for a dependency that may be optional.

### Type Parameters

• **Type**

The type of the dependency.

### Parameters

#### collection

[`Collection`](../type-aliases/Collection.md)\<`Type`\>

The collection identifier of the dependency.

### Returns

[`Optionally`](../type-aliases/Optionally.md)\<[`Collection`](../type-aliases/Collection.md)\<`Type`\>\>

An object with the dependency and optional flag.
