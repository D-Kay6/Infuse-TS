[**Infuse-TS**](../README.md)

***

[Infuse-TS](../README.md) / Dependencies

# Type Alias: Dependencies\<Item, Arguments, Current\>

> **Dependencies**\<`Item`, `Arguments`, `Current`\>: `Arguments` *extends* \[infer Argument, `...(infer Rest)`\] ? [`Dependencies`](Dependencies.md)\<`Item`, `Rest`, \[`...Current`, [`Dependency`](Dependency.md)\<`Argument`\>\]\> : `Current`

Defined in: [src/types/dependencies.ts:28](https://github.com/D-Kay6/Infuse-TS/blob/183255f9a4ec5e9ee4dba778a499aaf2ce7f4763/src/types/dependencies.ts#L28)

The dependencies of a component.

## Type Parameters

• **Item** *extends* [`Component`](Component.md)

The component type.

• **Arguments** *extends* `unknown`[] = [`ComponentArgs`](ComponentArgs.md)\<`Item`\>

The arguments needed for construction.

• **Current** *extends* `unknown`[] = \[\]

The current dependencies.
