[**Infuse-TS**](../README.md)

***

[Infuse-TS](../README.md) / Resolvable

# Type Alias: Resolvable\<Type\>

> **Resolvable**\<`Type`\> = `Type` *extends* infer Inner[] ? [`Collection`](Collection.md)\<`Inner`\> : [`Identifier`](Identifier.md)\<`Type`\>

Defined in: [src/types/dependencies.ts:26](https://github.com/D-Kay6/Infuse-TS/blob/62073e25b5ddbed6e970ac28f7ccfdc3169d3eec/src/types/dependencies.ts#L26)

A type that can be resolved to a component.

## Type Parameters

### Type

`Type`

The type of the resolved component.
