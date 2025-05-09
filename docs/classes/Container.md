[**Infuse-TS**](../README.md)

***

[Infuse-TS](../README.md) / Container

# Class: Container

Defined in: [src/lib/container.ts:99](https://github.com/D-Kay6/Infuse-TS/blob/2b827980e37dbd9518746d6b95150b5d8563c940/src/lib/container.ts#L99)

A container for managing components.

## Implements

- [`IContainer`](../interfaces/IContainer.md)

## Constructors

### Constructor

> **new Container**(): `Container`

Defined in: [src/lib/container.ts:124](https://github.com/D-Kay6/Infuse-TS/blob/2b827980e37dbd9518746d6b95150b5d8563c940/src/lib/container.ts#L124)

#### Returns

`Container`

## Accessors

### default

#### Get Signature

> **get** `static` **default**(): [`IContainer`](../interfaces/IContainer.md)

Defined in: [src/lib/container.ts:106](https://github.com/D-Kay6/Infuse-TS/blob/2b827980e37dbd9518746d6b95150b5d8563c940/src/lib/container.ts#L106)

Get the default container instance.

##### Remarks

The default container is a singleton, created on first access.

##### Returns

[`IContainer`](../interfaces/IContainer.md)

#### Set Signature

> **set** `static` **default**(`container`): `void`

Defined in: [src/lib/container.ts:118](https://github.com/D-Kay6/Infuse-TS/blob/2b827980e37dbd9518746d6b95150b5d8563c940/src/lib/container.ts#L118)

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

Defined in: [src/lib/container.ts:126](https://github.com/D-Kay6/Infuse-TS/blob/2b827980e37dbd9518746d6b95150b5d8563c940/src/lib/container.ts#L126)

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

[`IReferenceRegistration`](../interfaces/IReferenceRegistration.md)\<`Type`\>

The registration builder.

#### Implementation of

[`IContainer`](../interfaces/IContainer.md).[`register`](../interfaces/IContainer.md#register)

***

### registerInstance()

> **registerInstance**\<`Type`\>(`identifier`, `instance`): [`IValueRegistration`](../interfaces/IValueRegistration.md)\<`Type`\>

Defined in: [src/lib/container.ts:131](https://github.com/D-Kay6/Infuse-TS/blob/2b827980e37dbd9518746d6b95150b5d8563c940/src/lib/container.ts#L131)

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

[`IValueRegistration`](../interfaces/IValueRegistration.md)\<`Type`\>

The registration builder.

#### Remarks

Instances are always registered as singletons.

#### Implementation of

[`IContainer`](../interfaces/IContainer.md).[`registerInstance`](../interfaces/IContainer.md#registerinstance)

***

### registerComponent()

> **registerComponent**\<`Class`\>(`component`, ...`dependencies`): [`IReferenceRegistration`](../interfaces/IReferenceRegistration.md)\<[`ComponentType`](../type-aliases/ComponentType.md)\<`Class`\>\>

Defined in: [src/lib/container.ts:136](https://github.com/D-Kay6/Infuse-TS/blob/2b827980e37dbd9518746d6b95150b5d8563c940/src/lib/container.ts#L136)

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

[`IReferenceRegistration`](../interfaces/IReferenceRegistration.md)\<[`ComponentType`](../type-aliases/ComponentType.md)\<`Class`\>\>

The registration builder.

#### Implementation of

[`IContainer`](../interfaces/IContainer.md).[`registerComponent`](../interfaces/IContainer.md#registercomponent)

***

### resolve()

#### Call Signature

> **resolve**\<`Type`\>(`identifier`): `undefined` \| `Type`

Defined in: [src/lib/container.ts:141](https://github.com/D-Kay6/Infuse-TS/blob/2b827980e37dbd9518746d6b95150b5d8563c940/src/lib/container.ts#L141)

Resolve one registered item, or multiple items if the identifier is a collection.

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

The resolved instance(s) if found, otherwise undefined.

##### Implementation of

[`IContainer`](../interfaces/IContainer.md).[`resolve`](../interfaces/IContainer.md#resolve)

#### Call Signature

> **resolve**\<`Type`\>(`collection`): `undefined` \| `Type`[]

Defined in: [src/lib/container.ts:142](https://github.com/D-Kay6/Infuse-TS/blob/2b827980e37dbd9518746d6b95150b5d8563c940/src/lib/container.ts#L142)

Resolve a registered item.

##### Type Parameters

###### Type

`Type`

The type of the resolved instance.

##### Parameters

###### collection

[`Collection`](../type-aliases/Collection.md)\<`Type`\>

##### Returns

`undefined` \| `Type`[]

The resolved instance if found, otherwise undefined.

##### Implementation of

[`IContainer`](../interfaces/IContainer.md).[`resolve`](../interfaces/IContainer.md#resolve)

***

### resolveRequired()

#### Call Signature

> **resolveRequired**\<`Type`\>(`identifier`): `Type`

Defined in: [src/lib/container.ts:166](https://github.com/D-Kay6/Infuse-TS/blob/2b827980e37dbd9518746d6b95150b5d8563c940/src/lib/container.ts#L166)

Resolve one registered item, or multiple items if the identifier is a collection.

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

The resolved instance(s).

##### Throws

[NotRegisteredError](NotRegisteredError.md) If no registrations are found for the identifier.

##### Implementation of

[`IContainer`](../interfaces/IContainer.md).[`resolveRequired`](../interfaces/IContainer.md#resolverequired)

#### Call Signature

> **resolveRequired**\<`Type`\>(`identifier`): `Type`[]

Defined in: [src/lib/container.ts:167](https://github.com/D-Kay6/Infuse-TS/blob/2b827980e37dbd9518746d6b95150b5d8563c940/src/lib/container.ts#L167)

Resolve a registered item.

##### Type Parameters

###### Type

`Type`

The type of the resolved instance.

##### Parameters

###### identifier

[`Collection`](../type-aliases/Collection.md)\<`Type`\>

The identifier of the item to resolve.

##### Returns

`Type`[]

The resolved instance.

##### Throws

[NotRegisteredError](NotRegisteredError.md) If no registrations are found for the identifier.

##### Implementation of

[`IContainer`](../interfaces/IContainer.md).[`resolveRequired`](../interfaces/IContainer.md#resolverequired)
