[**Infuse-TS**](../README.md)

***

[Infuse-TS](../README.md) / IContainer

# Interface: IContainer

Defined in: [src/lib/container.ts:16](https://github.com/D-Kay6/Infuse-TS/blob/2b827980e37dbd9518746d6b95150b5d8563c940/src/lib/container.ts#L16)

A container for managing components.

## Methods

### register()

> **register**\<`Type`\>(`identifier`, `factory`): [`IReferenceRegistration`](IReferenceRegistration.md)\<`Type`\>

Defined in: [src/lib/container.ts:24](https://github.com/D-Kay6/Infuse-TS/blob/2b827980e37dbd9518746d6b95150b5d8563c940/src/lib/container.ts#L24)

Register a factory method for a component.

#### Type Parameters

##### Type

`Type`

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

Defined in: [src/lib/container.ts:34](https://github.com/D-Kay6/Infuse-TS/blob/2b827980e37dbd9518746d6b95150b5d8563c940/src/lib/container.ts#L34)

Register an instance of a component.

#### Type Parameters

##### Type

`Type`

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

> **registerComponent**\<`Class`\>(`component`, ...`dependencies`): [`IReferenceRegistration`](IReferenceRegistration.md)\<[`ComponentType`](../type-aliases/ComponentType.md)\<`Class`\>\>

Defined in: [src/lib/container.ts:43](https://github.com/D-Kay6/Infuse-TS/blob/2b827980e37dbd9518746d6b95150b5d8563c940/src/lib/container.ts#L43)

Register a component.

#### Type Parameters

##### Class

`Class` *extends* [`Component`](../type-aliases/Component.md)

The constructor of the component.

#### Parameters

##### component

`Class`

The component to register.

##### dependencies

...[`Dependencies`](../type-aliases/Dependencies.md)\<`Class`\>

The dependencies to inject into the component constructor.

#### Returns

[`IReferenceRegistration`](IReferenceRegistration.md)\<[`ComponentType`](../type-aliases/ComponentType.md)\<`Class`\>\>

The registration builder.

***

### resolve()

#### Call Signature

> **resolve**\<`Type`\>(`identifier`): `undefined` \| `Type`

Defined in: [src/lib/container.ts:51](https://github.com/D-Kay6/Infuse-TS/blob/2b827980e37dbd9518746d6b95150b5d8563c940/src/lib/container.ts#L51)

Resolve one registered item, or multiple items if the identifier is a collection.

##### Type Parameters

###### Type

`Type`

The type of the resolved instance.

##### Parameters

###### identifier

[`Resolvable`](../type-aliases/Resolvable.md)\<`Type`\>

The identifier of the item to resolve.

##### Returns

`undefined` \| `Type`

The resolved instance(s) if found, otherwise undefined.

#### Call Signature

> **resolve**\<`Type`\>(`identifier`): `undefined` \| `Type`

Defined in: [src/lib/container.ts:59](https://github.com/D-Kay6/Infuse-TS/blob/2b827980e37dbd9518746d6b95150b5d8563c940/src/lib/container.ts#L59)

Resolve a registered item.

##### Type Parameters

###### Type

`Type`

The type of the resolved instance.

##### Parameters

###### identifier

[`Identifier`](../type-aliases/Identifier.md)\<`Type`\>

The identifier of the item to resolve.

##### Returns

`undefined` \| `Type`

The resolved instance if found, otherwise undefined.

#### Call Signature

> **resolve**\<`Type`\>(`identifier`): `undefined` \| `Type`[]

Defined in: [src/lib/container.ts:68](https://github.com/D-Kay6/Infuse-TS/blob/2b827980e37dbd9518746d6b95150b5d8563c940/src/lib/container.ts#L68)

Resolve all registered items with the same identifier.

##### Type Parameters

###### Type

`Type`

The type of the resolved instances.

##### Parameters

###### identifier

[`Collection`](../type-aliases/Collection.md)\<`Type`\>

The identifier of the items to resolve.

##### Returns

`undefined` \| `Type`[]

The resolved instances if found, otherwise undefined.

##### Throws

[InvalidDataError](../classes/InvalidDataError.md) If the identifier is a tuple with more than one entry.

***

### resolveRequired()

#### Call Signature

> **resolveRequired**\<`Type`\>(`identifier`): `Type`

Defined in: [src/lib/container.ts:77](https://github.com/D-Kay6/Infuse-TS/blob/2b827980e37dbd9518746d6b95150b5d8563c940/src/lib/container.ts#L77)

Resolve one registered item, or multiple items if the identifier is a collection.

##### Type Parameters

###### Type

`Type`

The type of the resolved instance.

##### Parameters

###### identifier

[`Resolvable`](../type-aliases/Resolvable.md)\<`Type`\>

The identifier of the item to resolve.

##### Returns

`Type`

The resolved instance(s).

##### Throws

[NotRegisteredError](../classes/NotRegisteredError.md) If no registrations are found for the identifier.

#### Call Signature

> **resolveRequired**\<`Type`\>(`identifier`): `Type`

Defined in: [src/lib/container.ts:86](https://github.com/D-Kay6/Infuse-TS/blob/2b827980e37dbd9518746d6b95150b5d8563c940/src/lib/container.ts#L86)

Resolve a registered item.

##### Type Parameters

###### Type

`Type`

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

> **resolveRequired**\<`Type`\>(`identifier`): `Type`[]

Defined in: [src/lib/container.ts:96](https://github.com/D-Kay6/Infuse-TS/blob/2b827980e37dbd9518746d6b95150b5d8563c940/src/lib/container.ts#L96)

Resolve all registered items with the same identifier.

##### Type Parameters

###### Type

`Type`

The type of the resolved instances.

##### Parameters

###### identifier

[`Collection`](../type-aliases/Collection.md)\<`Type`\>

The identifier of the items to resolve.

##### Returns

`Type`[]

The resolved instances.

##### Throws

[InvalidDataError](../classes/InvalidDataError.md) If the identifier is a tuple with more than one entry.

##### Throws

[NotRegisteredError](../classes/NotRegisteredError.md) If no registrations are found for the identifier.
