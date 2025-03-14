[**Infuse-TS**](../README.md)

***

[Infuse-TS](../README.md) / Dependencies

# Type Alias: Dependencies\<Item, Arguments, Current\>

> **Dependencies**\<`Item`, `Arguments`, `Current`\>: `Arguments` *extends* \[infer Argument, `...(infer Rest)`\] ? [`Dependencies`](Dependencies.md)\<`Item`, `Rest`, \[`...Current`, [`DependencyItem`](DependencyItem.md)\<`Argument`\> \| [`Factory`](Factory.md)\<`Argument`\>\]\> : `Current`

Defined in: [src/types/dependencies.ts:40](https://github.com/D-Kay6/Infuse-TS/blob/10bae258e5f565f29eb517fd3b4bbd7f4f6e62d8/src/types/dependencies.ts#L40)

Recursively get the dependencies for a component.

## Type Parameters

• **Item** *extends* [`Component`](Component.md)

The component type.

• **Arguments** *extends* `unknown`[] = [`ComponentArgs`](ComponentArgs.md)\<`Item`\>

The arguments needed for construction.

• **Current** *extends* `unknown`[] = \[\]

The current dependencies.
