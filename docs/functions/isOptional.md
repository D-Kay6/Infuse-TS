[**Infuse-TS**](../README.md)

***

[Infuse-TS](../README.md) / isOptional

# Function: isOptional()

> **isOptional**\<`Type`\>(`item`): `item is OptionalDependency<Type>`

Defined in: [src/lib/utilities.ts:60](https://github.com/D-Kay6/Infuse-TS/blob/2b827980e37dbd9518746d6b95150b5d8563c940/src/lib/utilities.ts#L60)

Check if the dependency may resolve to undefined.

## Type Parameters

### Type

`Type`

The type of the dependency.

## Parameters

### item

`unknown`

The dependency to check.

## Returns

`item is OptionalDependency<Type>`

`true` if the dependency may resolve to undefined, `false` otherwise.
