[**Infuse-TS**](../README.md)

***

[Infuse-TS](../README.md) / Dependencies

# Type Alias: Dependencies\<Item, Arguments, Current\>

> **Dependencies**\<`Item`, `Arguments`, `Current`\> = `Arguments` *extends* \[infer Argument, `...(infer Rest)`\] ? `Dependencies`\<`Item`, `Rest`, \[`...Current`, [`DependencyItem`](DependencyItem.md)\<`Argument`\> \| [`Factory`](Factory.md)\<`Argument`\>\]\> : `Current`

Defined in: [src/types/dependencies.ts:40](https://github.com/D-Kay6/Infuse-TS/blob/1387e3f339bea91025c5da407e0b7dff28feffb5/src/types/dependencies.ts#L40)

Recursively get the dependencies for a component.

## Type Parameters

### Item

`Item` *extends* [`Component`](Component.md)

The component type.

### Arguments

`Arguments` *extends* `unknown`[] = [`ComponentArgs`](ComponentArgs.md)\<`Item`\>

The arguments needed for construction.

### Current

`Current` *extends* `unknown`[] = \[\]

The current dependencies.
