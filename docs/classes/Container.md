[**Infuse-TS**](../README.md)

***

[Infuse-TS](../README.md) / Container

# Class: Container

Defined in: [src/lib/container.ts:83](https://github.com/D-Kay6/Infuse-TS/blob/10bae258e5f565f29eb517fd3b4bbd7f4f6e62d8/src/lib/container.ts#L83)

A container for managing components.

## Implements

- [`IContainer`](../interfaces/IContainer.md)

## Constructors

### new Container()

> **new Container**(): [`Container`](Container.md)

Defined in: [src/lib/container.ts:108](https://github.com/D-Kay6/Infuse-TS/blob/10bae258e5f565f29eb517fd3b4bbd7f4f6e62d8/src/lib/container.ts#L108)

#### Returns

[`Container`](Container.md)

## Accessors

### default

#### Get Signature

> **get** `static` **default**(): [`IContainer`](../interfaces/IContainer.md)

Defined in: [src/lib/container.ts:90](https://github.com/D-Kay6/Infuse-TS/blob/10bae258e5f565f29eb517fd3b4bbd7f4f6e62d8/src/lib/container.ts#L90)

Get the default container instance.

##### Remarks

The default container is a singleton, created on first access.

##### Returns

[`IContainer`](../interfaces/IContainer.md)

#### Set Signature

> **set** `static` **default**(`container`): `void`

Defined in: [src/lib/container.ts:102](https://github.com/D-Kay6/Infuse-TS/blob/10bae258e5f565f29eb517fd3b4bbd7f4f6e62d8/src/lib/container.ts#L102)

Override the default container instance.

##### Parameters

###### container

[`IContainer`](../interfaces/IContainer.md)

The new default container instance.

##### Returns

`void`

## Methods

### register()

> **register**\<`Type`\>(`identifier`, `factory`): [`IReferenceRegistration`](../interfaces/IReferenceRegistration.md)\<`Type`\>

Defined in: [src/lib/container.ts:110](https://github.com/D-Kay6/Infuse-TS/blob/10bae258e5f565f29eb517fd3b4bbd7f4f6e62d8/src/lib/container.ts#L110)

Register a factory method for a component.

#### Type Parameters

• **Type**

The type of the component instance returned by the factory.

#### Parameters

##### identifier

[`Identifier`](../type-aliases/Identifier.md)\<`Type`\>

The identifier to register the factory under.

##### factory

[`Factory`](../type-aliases/Factory.md)\<`Type`\>

The factory to register.

#### Returns

[`IReferenceRegistration`](../interfaces/IReferenceRegistration.md)\<`Type`\>

The registration builder.

#### Implementation of

[`IContainer`](../interfaces/IContainer.md).[`register`](../interfaces/IContainer.md#register)

***

### registerInstance()

> **registerInstance**\<`Type`\>(`identifier`, `instance`): [`IValueRegistration`](../interfaces/IValueRegistration.md)\<`Type`\>

Defined in: [src/lib/container.ts:115](https://github.com/D-Kay6/Infuse-TS/blob/10bae258e5f565f29eb517fd3b4bbd7f4f6e62d8/src/lib/container.ts#L115)

Register an instance of a component.

#### Type Parameters

• **Type**

The type of the component instance.

#### Parameters

##### identifier

[`Identifier`](../type-aliases/Identifier.md)\<`Type`\>

The identifier to register the instance under.

##### instance

`Type`

The instance to register.

#### Returns

[`IValueRegistration`](../interfaces/IValueRegistration.md)\<`Type`\>

The registration builder.

#### Remarks

Instances are always registered as singletons.

#### Implementation of

[`IContainer`](../interfaces/IContainer.md).[`registerInstance`](../interfaces/IContainer.md#registerinstance)

***

### registerComponent()

> **registerComponent**\<`Type`, `Class`\>(`component`, ...`dependencies`): [`IReferenceRegistration`](../interfaces/IReferenceRegistration.md)\<`Type`\>

Defined in: [src/lib/container.ts:120](https://github.com/D-Kay6/Infuse-TS/blob/10bae258e5f565f29eb517fd3b4bbd7f4f6e62d8/src/lib/container.ts#L120)

Register a component.

#### Type Parameters

• **Type** *extends* `object`

The type of the component instance.

• **Class** *extends* [`Component`](../type-aliases/Component.md)\<`Type`\>

The constructor of the component.

#### Parameters

##### component

`Class`

The component to register.

##### dependencies

...[`Dependencies`](../type-aliases/Dependencies.md)\<`Class`\>

The dependencies to inject into the component constructor.

#### Returns

[`IReferenceRegistration`](../interfaces/IReferenceRegistration.md)\<`Type`\>

The registration builder.

#### Implementation of

[`IContainer`](../interfaces/IContainer.md).[`registerComponent`](../interfaces/IContainer.md#registercomponent)

***

### resolve()

#### Call Signature

> **resolve**\<`Type`\>(`identifier`): `undefined` \| `Type`

Defined in: [src/lib/container.ts:125](https://github.com/D-Kay6/Infuse-TS/blob/10bae258e5f565f29eb517fd3b4bbd7f4f6e62d8/src/lib/container.ts#L125)

Resolve a registered item.

##### Type Parameters

• **Type**

The type of the resolved instance.

##### Parameters

###### identifier

[`Identifier`](../type-aliases/Identifier.md)\<`Type`\>

The identifier of the item to resolve.

##### Returns

`undefined` \| `Type`

The resolved instance if found, otherwise undefined.

##### Implementation of

[`IContainer`](../interfaces/IContainer.md).[`resolve`](../interfaces/IContainer.md#resolve)

#### Call Signature

> **resolve**\<`Type`\>(`collection`): `undefined` \| `Type`[]

Defined in: [src/lib/container.ts:126](https://github.com/D-Kay6/Infuse-TS/blob/10bae258e5f565f29eb517fd3b4bbd7f4f6e62d8/src/lib/container.ts#L126)

Resolve all registered items with the same identifier.

##### Type Parameters

• **Type**

The type of the resolved instances.

##### Parameters

###### collection

[`Collection`](../type-aliases/Collection.md)\<`Type`\>

##### Returns

`undefined` \| `Type`[]

The resolved instances if found, otherwise undefined.

##### Throws

[InvalidDataError](InvalidDataError.md) If the identifier is a tuple with more than one entry.

##### Implementation of

[`IContainer`](../interfaces/IContainer.md).[`resolve`](../interfaces/IContainer.md#resolve)

***

### resolveRequired()

#### Call Signature

> **resolveRequired**\<`Type`\>(`identifier`): `Type`

Defined in: [src/lib/container.ts:150](https://github.com/D-Kay6/Infuse-TS/blob/10bae258e5f565f29eb517fd3b4bbd7f4f6e62d8/src/lib/container.ts#L150)

Resolve a registered item.

##### Type Parameters

• **Type**

The type of the resolved instance.

##### Parameters

###### identifier

[`Identifier`](../type-aliases/Identifier.md)\<`Type`\>

The identifier of the item to resolve.

##### Returns

`Type`

The resolved instance.

##### Throws

[NotRegisteredError](NotRegisteredError.md) If no registrations are found for the identifier.

##### Implementation of

[`IContainer`](../interfaces/IContainer.md).[`resolveRequired`](../interfaces/IContainer.md#resolverequired)

#### Call Signature

> **resolveRequired**\<`Type`\>(`identifier`): `Type`[]

Defined in: [src/lib/container.ts:151](https://github.com/D-Kay6/Infuse-TS/blob/10bae258e5f565f29eb517fd3b4bbd7f4f6e62d8/src/lib/container.ts#L151)

Resolve all registered items with the same identifier.

##### Type Parameters

• **Type**

The type of the resolved instances.

##### Parameters

###### identifier

[`Collection`](../type-aliases/Collection.md)\<`Type`\>

The identifier of the items to resolve.

##### Returns

`Type`[]

The resolved instances.

##### Throws

[InvalidDataError](InvalidDataError.md) If the identifier is a tuple with more than one entry.

##### Throws

[NotRegisteredError](NotRegisteredError.md) If no registrations are found for the identifier.

##### Implementation of

[`IContainer`](../interfaces/IContainer.md).[`resolveRequired`](../interfaces/IContainer.md#resolverequired)
