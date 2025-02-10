[**Infuse-TS**](../README.md)

***

[Infuse-TS](../README.md) / Container

# Class: Container

Defined in: src/lib/container.ts:104

A container for managing components.

## Implements

- [`IContainer`](../interfaces/IContainer.md)

## Accessors

### current

#### Get Signature

> **get** `static` **current**(): [`IContainer`](../interfaces/IContainer.md)

Defined in: src/lib/container.ts:107

##### Returns

[`IContainer`](../interfaces/IContainer.md)

## Methods

### register()

#### Call Signature

> **register**\<`Type`\>(`identifier`, `factory`): [`IReferenceRegistration`](../interfaces/IReferenceRegistration.md)\<`Type`\>

Defined in: src/lib/container.ts:119

Register a factory method for a value.

##### Type Parameters

• **Type**

The type of the value returned by the factory.

##### Parameters

###### identifier

`string`

The name to register the factory under.

###### factory

[`Factory`](../type-aliases/Factory.md)\<`Type`\>

The factory to register.

##### Returns

[`IReferenceRegistration`](../interfaces/IReferenceRegistration.md)\<`Type`\>

The registration builder.

##### Implementation of

[`IContainer`](../interfaces/IContainer.md).[`register`](../interfaces/IContainer.md#register)

#### Call Signature

> **register**\<`Type`\>(`component`, `factory`): [`IReferenceRegistration`](../interfaces/IReferenceRegistration.md)\<`Type`\>

Defined in: src/lib/container.ts:120

Register a factory method for a component.

##### Type Parameters

• **Type** *extends* `object`

The type of the component instance returned by the factory.

##### Parameters

###### component

[`Component`](../type-aliases/Component.md)\<`Type`\>

The component to register the factory under.

###### factory

[`Factory`](../type-aliases/Factory.md)\<`Type`\>

The factory to register.

##### Returns

[`IReferenceRegistration`](../interfaces/IReferenceRegistration.md)\<`Type`\>

The registration builder.

##### Implementation of

[`IContainer`](../interfaces/IContainer.md).[`register`](../interfaces/IContainer.md#register)

***

### registerInstance()

#### Call Signature

> **registerInstance**\<`Type`\>(`identifier`, `instance`): [`IValueRegistration`](../interfaces/IValueRegistration.md)\<`Type`\>

Defined in: src/lib/container.ts:127

Register an instance of a value.

##### Type Parameters

• **Type**

The type of the instance.

##### Parameters

###### identifier

`string`

The name to register the instance under.

###### instance

`Type`

The instance to register.

##### Returns

[`IValueRegistration`](../interfaces/IValueRegistration.md)\<`Type`\>

The registration builder.

##### Remarks

Instances are always registered as singletons.

##### Implementation of

[`IContainer`](../interfaces/IContainer.md).[`registerInstance`](../interfaces/IContainer.md#registerinstance)

#### Call Signature

> **registerInstance**\<`Type`\>(`component`, `instance`): [`IValueRegistration`](../interfaces/IValueRegistration.md)\<`Type`\>

Defined in: src/lib/container.ts:128

Register an instance of a component.

##### Type Parameters

• **Type** *extends* `object`

The type of the component instance.

##### Parameters

###### component

[`Component`](../type-aliases/Component.md)\<`Type`\>

The component to register the instance under.

###### instance

`Type`

The instance to register.

##### Returns

[`IValueRegistration`](../interfaces/IValueRegistration.md)\<`Type`\>

The registration builder.

##### Remarks

Instances are always registered as singletons.

##### Implementation of

[`IContainer`](../interfaces/IContainer.md).[`registerInstance`](../interfaces/IContainer.md#registerinstance)

***

### registerComponent()

> **registerComponent**\<`Type`, `Class`\>(`component`, ...`dependencies`): [`IReferenceRegistration`](../interfaces/IReferenceRegistration.md)\<`Type`\>

Defined in: src/lib/container.ts:135

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

Defined in: src/lib/container.ts:140

Resolve a registered item.

##### Type Parameters

• **Type**

The type of the resolved instance.

##### Parameters

###### identifier

[`Identifier`](../type-aliases/Identifier.md)\<`Type`\>

The name or component of the item to resolve.

##### Returns

`undefined` \| `Type`

The resolved instance if found, otherwise undefined.

##### Implementation of

[`IContainer`](../interfaces/IContainer.md).[`resolve`](../interfaces/IContainer.md#resolve)

#### Call Signature

> **resolve**\<`Type`\>(`collection`): `undefined` \| `Type`

Defined in: src/lib/container.ts:141

Resolve all registered items with the same identifier.

##### Type Parameters

• **Type**

The type of the resolved instances.

##### Parameters

###### collection

[`Collection`](../type-aliases/Collection.md)\<`Type`\>

##### Returns

`undefined` \| `Type`

The resolved instances if found, otherwise undefined.

##### Throws

[InvalidDataError](InvalidDataError.md) If the identifier is a tuple with more than one entry.

##### Implementation of

[`IContainer`](../interfaces/IContainer.md).[`resolve`](../interfaces/IContainer.md#resolve)

***

### resolveRequired()

#### Call Signature

> **resolveRequired**\<`Type`\>(`identifier`): `Type`

Defined in: src/lib/container.ts:158

Resolve a registered item.

##### Type Parameters

• **Type**

The type of the resolved instance.

##### Parameters

###### identifier

[`Identifier`](../type-aliases/Identifier.md)\<`Type`\>

The name or component of the item to resolve.

##### Returns

`Type`

The resolved instance.

##### Throws

[NotRegisteredError](NotRegisteredError.md) If no registrations are found for the identifier.

##### Implementation of

[`IContainer`](../interfaces/IContainer.md).[`resolveRequired`](../interfaces/IContainer.md#resolverequired)

#### Call Signature

> **resolveRequired**\<`Type`\>(`identifier`): `Type`

Defined in: src/lib/container.ts:159

Resolve all registered items with the same identifier.

##### Type Parameters

• **Type**

The type of the resolved instances.

##### Parameters

###### identifier

[`Collection`](../type-aliases/Collection.md)\<`Type`\>

The name or component of the items to resolve.

##### Returns

`Type`

The resolved instances.

##### Throws

[NotRegisteredError](NotRegisteredError.md) If no registrations are found for the identifier.

##### Throws

[InvalidDataError](InvalidDataError.md) If the identifier is a tuple with more than one entry.

##### Implementation of

[`IContainer`](../interfaces/IContainer.md).[`resolveRequired`](../interfaces/IContainer.md#resolverequired)
