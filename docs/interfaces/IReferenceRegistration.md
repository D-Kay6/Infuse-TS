[**Infuse-TS**](../README.md)

***

[Infuse-TS](../README.md) / IReferenceRegistration

# Interface: IReferenceRegistration\<Type\>

Defined in: [src/registration/registration.builder.ts:28](https://github.com/D-Kay6/Infuse-TS/blob/a8c30be6111883959cfa2434b18c1b26f87c6a92/src/registration/registration.builder.ts#L28)

## Extends

- [`IValueRegistration`](IValueRegistration.md)\<`Type`\>

## Type Parameters

• **Type**

## Methods

### asSelf()

> **asSelf**(): `this`

Defined in: [src/registration/registration.builder.ts:13](https://github.com/D-Kay6/Infuse-TS/blob/a8c30be6111883959cfa2434b18c1b26f87c6a92/src/registration/registration.builder.ts#L13)

Register the item under its own name.

#### Returns

`this`

#### Remarks

This should always be called if not using an alias.

#### Inherited from

[`IValueRegistration`](IValueRegistration.md).[`asSelf`](IValueRegistration.md#asself)

***

### as()

#### Call Signature

> **as**(`name`): `this`

Defined in: [src/registration/registration.builder.ts:19](https://github.com/D-Kay6/Infuse-TS/blob/a8c30be6111883959cfa2434b18c1b26f87c6a92/src/registration/registration.builder.ts#L19)

Register the item under a different name.

##### Parameters

###### name

`string`

The name to register the item under.

##### Returns

`this`

##### Inherited from

[`IValueRegistration`](IValueRegistration.md).[`as`](IValueRegistration.md#as)

#### Call Signature

> **as**\<`Parent`, `Class`\>(`component`): `this`

Defined in: [src/registration/registration.builder.ts:25](https://github.com/D-Kay6/Infuse-TS/blob/a8c30be6111883959cfa2434b18c1b26f87c6a92/src/registration/registration.builder.ts#L25)

Register the item as its parent type.

##### Type Parameters

• **Parent** *extends* `object`

• **Class** = `Type` *extends* `Parent` ? [`AbstractComponent`](../type-aliases/AbstractComponent.md)\<`Parent`\> : `never`

##### Parameters

###### component

`Class`

The parent type to register the item as.

##### Returns

`this`

##### Inherited from

[`IValueRegistration`](IValueRegistration.md).[`as`](IValueRegistration.md#as)

***

### singleInstance()

> **singleInstance**(): `this`

Defined in: [src/registration/registration.builder.ts:32](https://github.com/D-Kay6/Infuse-TS/blob/a8c30be6111883959cfa2434b18c1b26f87c6a92/src/registration/registration.builder.ts#L32)

Register the item as a singleton.

#### Returns

`this`

***

### instancePerDependency()

> **instancePerDependency**(): `this`

Defined in: [src/registration/registration.builder.ts:38](https://github.com/D-Kay6/Infuse-TS/blob/a8c30be6111883959cfa2434b18c1b26f87c6a92/src/registration/registration.builder.ts#L38)

Register the item as a transient dependency.

#### Returns

`this`

#### Remarks

This is the default scope.

***

### instancePerRequest()

> **instancePerRequest**(): `this`

Defined in: [src/registration/registration.builder.ts:44](https://github.com/D-Kay6/Infuse-TS/blob/a8c30be6111883959cfa2434b18c1b26f87c6a92/src/registration/registration.builder.ts#L44)

Register the item as a request dependency.

#### Returns

`this`

#### Remarks

This requires a request context to be set.
