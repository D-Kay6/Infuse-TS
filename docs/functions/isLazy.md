[**Infuse-TS**](../README.md)

***

[Infuse-TS](../README.md) / isLazy

# Function: isLazy()

> **isLazy**\<`Type`\>(`item`): `item is LazyDependency<Type>`

Defined in: [src/lib/utilities.ts:70](https://github.com/D-Kay6/Infuse-TS/blob/2b827980e37dbd9518746d6b95150b5d8563c940/src/lib/utilities.ts#L70)

Check if the dependency is to be lazily resolved.

## Type Parameters

### Type

`Type`

The type of the dependency.

## Parameters

### item

`unknown`

The dependency to check.

## Returns

`item is LazyDependency<Type>`

`true` if the dependency is to be lazily resolved, `false` otherwise.
