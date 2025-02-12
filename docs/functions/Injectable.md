[**Infuse-TS**](../README.md)

***

[Infuse-TS](../README.md) / Injectable

# Function: Injectable()

## Call Signature

> **Injectable**\<`Class`\>(...`dependencies`): [`ClassDecoration`](../type-aliases/ClassDecoration.md)\<`Class`\>

Defined in: [src/decorators/injectable.decorator.ts:12](https://github.com/D-Kay6/Infuse-TS/blob/183255f9a4ec5e9ee4dba778a499aaf2ce7f4763/src/decorators/injectable.decorator.ts#L12)

Marks a class as injectable.

### Type Parameters

• **Class** *extends* [`Component`](../type-aliases/Component.md)

The constructor of the class. Inferred from the decorator.

### Parameters

#### dependencies

...[`Dependencies`](../type-aliases/Dependencies.md)\<`Class`\>

The dependencies to inject into the class.

### Returns

[`ClassDecoration`](../type-aliases/ClassDecoration.md)\<`Class`\>

## Call Signature

> **Injectable**\<`Class`\>(`scope`, ...`dependencies`): [`ClassDecoration`](../type-aliases/ClassDecoration.md)\<`Class`\>

Defined in: [src/decorators/injectable.decorator.ts:20](https://github.com/D-Kay6/Infuse-TS/blob/183255f9a4ec5e9ee4dba778a499aaf2ce7f4763/src/decorators/injectable.decorator.ts#L20)

Marks a class as injectable.

### Type Parameters

• **Class** *extends* [`Component`](../type-aliases/Component.md)

The constructor of the class. Inferred from the decorator.

### Parameters

#### scope

[`Scope`](../enumerations/Scope.md)

The scope of the class.

#### dependencies

...[`Dependencies`](../type-aliases/Dependencies.md)\<`Class`\>

The dependencies to inject into the class.

### Returns

[`ClassDecoration`](../type-aliases/ClassDecoration.md)\<`Class`\>
