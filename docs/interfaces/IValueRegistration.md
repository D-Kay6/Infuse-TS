[**Infuse-TS**](../README.md)

***

[Infuse-TS](../README.md) / IValueRegistration

# Interface: IValueRegistration\<Type\>

Defined in: [src/registration/registration.builder.ts:7](https://github.com/D-Kay6/Infuse-TS/blob/10bae258e5f565f29eb517fd3b4bbd7f4f6e62d8/src/registration/registration.builder.ts#L7)

## Extended by

- [`IReferenceRegistration`](IReferenceRegistration.md)

## Type Parameters

• **Type**

## Methods

### asSelf()

> **asSelf**(): `this`

Defined in: [src/registration/registration.builder.ts:12](https://github.com/D-Kay6/Infuse-TS/blob/10bae258e5f565f29eb517fd3b4bbd7f4f6e62d8/src/registration/registration.builder.ts#L12)

Register the item under its own name.

#### Returns

`this`

#### Remarks

This should always be called if not using an alias.

***

### as()

> **as**\<`Parent`, `Class`\>(`identifier`): `this`

Defined in: [src/registration/registration.builder.ts:18](https://github.com/D-Kay6/Infuse-TS/blob/10bae258e5f565f29eb517fd3b4bbd7f4f6e62d8/src/registration/registration.builder.ts#L18)

Register the item as an instance of a parent type.

#### Type Parameters

• **Parent** *extends* `object`

• **Class** *extends* [`Identifier`](../type-aliases/Identifier.md)\<`Parent`\> = `Type` *extends* `Parent` ? [`Identifier`](../type-aliases/Identifier.md)\<`Parent`\> : `never`

#### Parameters

##### identifier

`Class`

The parent type to register the item as.

#### Returns

`this`
