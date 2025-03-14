[**Infuse-TS**](../README.md)

***

[Infuse-TS](../README.md) / IReferenceRegistration

# Interface: IReferenceRegistration\<Type\>

Defined in: [src/registration/registration.builder.ts:21](https://github.com/D-Kay6/Infuse-TS/blob/10bae258e5f565f29eb517fd3b4bbd7f4f6e62d8/src/registration/registration.builder.ts#L21)

## Extends

- [`IValueRegistration`](IValueRegistration.md)\<`Type`\>

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

#### Inherited from

[`IValueRegistration`](IValueRegistration.md).[`asSelf`](IValueRegistration.md#asself)

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

#### Inherited from

[`IValueRegistration`](IValueRegistration.md).[`as`](IValueRegistration.md#as)

***

### singleInstance()

> **singleInstance**(): `this`

Defined in: [src/registration/registration.builder.ts:25](https://github.com/D-Kay6/Infuse-TS/blob/10bae258e5f565f29eb517fd3b4bbd7f4f6e62d8/src/registration/registration.builder.ts#L25)

Register the item as a singleton.

#### Returns

`this`

***

### instancePerDependency()

> **instancePerDependency**(): `this`

Defined in: [src/registration/registration.builder.ts:31](https://github.com/D-Kay6/Infuse-TS/blob/10bae258e5f565f29eb517fd3b4bbd7f4f6e62d8/src/registration/registration.builder.ts#L31)

Register the item as a transient dependency.

#### Returns

`this`

#### Remarks

This is the default scope.

***

### instancePerRequest()

> **instancePerRequest**(): `this`

Defined in: [src/registration/registration.builder.ts:37](https://github.com/D-Kay6/Infuse-TS/blob/10bae258e5f565f29eb517fd3b4bbd7f4f6e62d8/src/registration/registration.builder.ts#L37)

Register the item as a request dependency.

#### Returns

`this`

#### Remarks

This requires a request context to be set.
