[**Infuse-TS**](../README.md)

***

[Infuse-TS](../README.md) / IValueRegistration

# Interface: IValueRegistration\<Type\>

Defined in: src/registration/registration.builder.ts:8

## Extended by

- [`IReferenceRegistration`](IReferenceRegistration.md)

## Type Parameters

• **Type**

## Methods

### asSelf()

> **asSelf**(): `this`

Defined in: src/registration/registration.builder.ts:13

Register the item under its own name.

#### Returns

`this`

#### Remarks

This should always be called if not using an alias.

***

### as()

#### Call Signature

> **as**(`name`): `this`

Defined in: src/registration/registration.builder.ts:19

Register the item under a different name.

##### Parameters

###### name

`string`

The name to register the item under.

##### Returns

`this`

#### Call Signature

> **as**\<`Parent`, `Class`\>(`component`): `this`

Defined in: src/registration/registration.builder.ts:25

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
