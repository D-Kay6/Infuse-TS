[**Infuse-TS**](../README.md)

***

[Infuse-TS](../README.md) / InjectableAs

# Function: InjectableAs()

## Call Signature

> **InjectableAs**\<`Parent`, `Type`, `Class`\>(`parent`, ...`dependencies`): [`ClassDecoration`](../type-aliases/ClassDecoration.md)\<`Class`\>

Defined in: [src/decorators/injectable-as.decorator.ts:15](https://github.com/D-Kay6/Infuse-TS/blob/a8c30be6111883959cfa2434b18c1b26f87c6a92/src/decorators/injectable-as.decorator.ts#L15)

Marks a class as injectable.

### Type Parameters

• **Parent** *extends* `object`

The type of the parent class.

• **Type** *extends* `object`

The type of the class. Inferred from the decorator.

• **Class** *extends* [`Component`](../type-aliases/Component.md)\<`Type`\>

The constructor of the class. Inferred from the decorator.

### Parameters

#### parent

[`AbstractComponent`](../type-aliases/AbstractComponent.md)\<`Parent`\>

The parent class to register the class as.

#### dependencies

...[`Dependencies`](../type-aliases/Dependencies.md)\<`Class`\>

The dependencies to inject into the class.

### Returns

[`ClassDecoration`](../type-aliases/ClassDecoration.md)\<`Class`\>

## Call Signature

> **InjectableAs**\<`Parent`, `Type`, `Class`\>(`parent`, `scope`, ...`dependencies`): [`ClassDecoration`](../type-aliases/ClassDecoration.md)\<`Class`\>

Defined in: [src/decorators/injectable-as.decorator.ts:26](https://github.com/D-Kay6/Infuse-TS/blob/a8c30be6111883959cfa2434b18c1b26f87c6a92/src/decorators/injectable-as.decorator.ts#L26)

Marks a class as injectable.

### Type Parameters

• **Parent** *extends* `object`

The type of the parent class.

• **Type** *extends* `object`

The type of the class. Inferred from the decorator.

• **Class** *extends* [`Component`](../type-aliases/Component.md)\<`Type`\>

The constructor of the class. Inferred from the decorator.

### Parameters

#### parent

[`AbstractComponent`](../type-aliases/AbstractComponent.md)\<`Parent`\>

The parent class to register the class as.

#### scope

[`Scope`](../enumerations/Scope.md)

The scope of the class.

#### dependencies

...[`Dependencies`](../type-aliases/Dependencies.md)\<`Class`\>

The dependencies to inject into the class.

### Returns

[`ClassDecoration`](../type-aliases/ClassDecoration.md)\<`Class`\>
