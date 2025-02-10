[**Infuse-TS**](../README.md)

***

[Infuse-TS](../README.md) / Dependencies

# Type Alias: Dependencies\<Item, Arguments, Current\>

> **Dependencies**\<`Item`, `Arguments`, `Current`\>: `Arguments` *extends* \[infer Argument, `...(infer Rest)`\] ? [`Dependencies`](Dependencies.md)\<`Item`, `Rest`, \[`...Current`, [`Dependency`](Dependency.md)\<`Argument`\>\]\> : `Current`

Defined in: [src/types/dependencies.ts:29](https://github.com/D-Kay6/Infuse-TS/blob/a8c30be6111883959cfa2434b18c1b26f87c6a92/src/types/dependencies.ts#L29)

The dependencies of a component.

## Type Parameters

• **Item** *extends* [`Component`](Component.md)

The component type.

• **Arguments** *extends* `unknown`[] = [`ComponentArgs`](ComponentArgs.md)\<`Item`\>

The arguments needed for construction.

• **Current** *extends* `unknown`[] = \[\]

The current dependencies.
