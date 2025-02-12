[**Infuse-TS**](../README.md)

***

[Infuse-TS](../README.md) / IContainer

# Interface: IContainer

Defined in: [src/lib/container.ts:17](https://github.com/D-Kay6/Infuse-TS/blob/183255f9a4ec5e9ee4dba778a499aaf2ce7f4763/src/lib/container.ts#L17)

A container for managing components.

## Methods

### register()

> **register**\<`Type`\>(`identifier`, `factory`): [`IReferenceRegistration`](IReferenceRegistration.md)\<`Type`\>

Defined in: [src/lib/container.ts:25](https://github.com/D-Kay6/Infuse-TS/blob/183255f9a4ec5e9ee4dba778a499aaf2ce7f4763/src/lib/container.ts#L25)

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

[`IReferenceRegistration`](IReferenceRegistration.md)\<`Type`\>

The registration builder.

***

### registerInstance()

> **registerInstance**\<`Type`\>(`identifier`, `instance`): [`IValueRegistration`](IValueRegistration.md)\<`Type`\>

Defined in: [src/lib/container.ts:35](https://github.com/D-Kay6/Infuse-TS/blob/183255f9a4ec5e9ee4dba778a499aaf2ce7f4763/src/lib/container.ts#L35)

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

[`IValueRegistration`](IValueRegistration.md)\<`Type`\>

The registration builder.

#### Remarks

Instances are always registered as singletons.

***

### registerComponent()

> **registerComponent**\<`Type`, `Class`\>(`component`, ...`dependencies`): [`IReferenceRegistration`](IReferenceRegistration.md)\<`Type`\>

Defined in: [src/lib/container.ts:45](https://github.com/D-Kay6/Infuse-TS/blob/183255f9a4ec5e9ee4dba778a499aaf2ce7f4763/src/lib/container.ts#L45)

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

[`IReferenceRegistration`](IReferenceRegistration.md)\<`Type`\>

The registration builder.

***

### resolve()

#### Call Signature

> **resolve**\<`Type`\>(`identifier`): `undefined` \| `Type`

Defined in: [src/lib/container.ts:53](https://github.com/D-Kay6/Infuse-TS/blob/183255f9a4ec5e9ee4dba778a499aaf2ce7f4763/src/lib/container.ts#L53)

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

#### Call Signature

> **resolve**\<`Type`\>(`identifier`): `undefined` \| `Type`

Defined in: [src/lib/container.ts:62](https://github.com/D-Kay6/Infuse-TS/blob/183255f9a4ec5e9ee4dba778a499aaf2ce7f4763/src/lib/container.ts#L62)

Resolve all registered items with the same identifier.

##### Type Parameters

• **Type**

The type of the resolved instances.

##### Parameters

###### identifier

[`Collection`](../type-aliases/Collection.md)\<`Type`\>

The identifier of the items to resolve.

##### Returns

`undefined` \| `Type`

The resolved instances if found, otherwise undefined.

##### Throws

[InvalidDataError](../classes/InvalidDataError.md) If the identifier is a tuple with more than one entry.

***

### resolveRequired()

#### Call Signature

> **resolveRequired**\<`Type`\>(`identifier`): `Type`

Defined in: [src/lib/container.ts:71](https://github.com/D-Kay6/Infuse-TS/blob/183255f9a4ec5e9ee4dba778a499aaf2ce7f4763/src/lib/container.ts#L71)

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

[NotRegisteredError](../classes/NotRegisteredError.md) If no registrations are found for the identifier.

#### Call Signature

> **resolveRequired**\<`Type`\>(`identifier`): `Type`

Defined in: [src/lib/container.ts:81](https://github.com/D-Kay6/Infuse-TS/blob/183255f9a4ec5e9ee4dba778a499aaf2ce7f4763/src/lib/container.ts#L81)

Resolve all registered items with the same identifier.

##### Type Parameters

• **Type**

The type of the resolved instances.

##### Parameters

###### identifier

[`Collection`](../type-aliases/Collection.md)\<`Type`\>

The identifier of the items to resolve.

##### Returns

`Type`

The resolved instances.

##### Throws

[NotRegisteredError](../classes/NotRegisteredError.md) If no registrations are found for the identifier.

##### Throws

[InvalidDataError](../classes/InvalidDataError.md) If the identifier is a tuple with more than one entry.
