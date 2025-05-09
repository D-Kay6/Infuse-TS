[**Infuse-TS**](../README.md)

***

[Infuse-TS](../README.md) / Dependencies

# Type Alias: Dependencies\<Item, Arguments, Current\>

> **Dependencies**\<`Item`, `Arguments`, `Current`\> = `Arguments` *extends* \[infer Argument, `...(infer Rest)`\] ? `Dependencies`\<`Item`, `Rest`, \[`...Current`, [`DependencyItem`](DependencyItem.md)\<`Argument`\>\]\> : `Current`

Defined in: [src/types/dependencies.ts:58](https://github.com/D-Kay6/Infuse-TS/blob/2b827980e37dbd9518746d6b95150b5d8563c940/src/types/dependencies.ts#L58)

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
