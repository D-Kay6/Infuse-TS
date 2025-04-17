[**Infuse-TS**](../README.md)

***

[Infuse-TS](../README.md) / isOptional

# Function: isOptional()

> **isOptional**\<`Type`\>(`item`): `item is OptionalDependency<Type>`

Defined in: [src/lib/utilities.ts:60](https://github.com/D-Kay6/Infuse-TS/blob/62073e25b5ddbed6e970ac28f7ccfdc3169d3eec/src/lib/utilities.ts#L60)

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
