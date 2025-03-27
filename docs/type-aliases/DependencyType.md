[**Infuse-TS**](../README.md)

***

[Infuse-TS](../README.md) / DependencyType

# Type Alias: DependencyType\<Type\>

> **DependencyType**\<`Type`\> = `Type` *extends* infer Inner[] ? [`Collection`](Collection.md)\<`Inner`\> : [`Identifier`](Identifier.md)\<`Type`\>

Defined in: [src/types/dependencies.ts:54](https://github.com/D-Kay6/Infuse-TS/blob/1387e3f339bea91025c5da407e0b7dff28feffb5/src/types/dependencies.ts#L54)

Differentiates between a collection and a component dependency.

## Type Parameters

### Type

`Type`

The type to find the dependency for.
