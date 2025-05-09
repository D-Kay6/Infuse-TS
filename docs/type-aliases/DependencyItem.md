[**Infuse-TS**](../README.md)

***

[Infuse-TS](../README.md) / DependencyItem

# Type Alias: DependencyItem\<Type\>

> **DependencyItem**\<`Type`\> = \[`Type`\] *extends* \[[`Func`](Func.md)\<infer Inner\>\] ? `undefined` *extends* `Inner` ? [`LazyDependency`](LazyDependency.md)\<`Inner`\> & [`OptionalDependency`](OptionalDependency.md)\<`Inner`\> : [`LazyDependency`](LazyDependency.md)\<`Inner`\> & `object` : `undefined` *extends* `Type` ? [`OptionalDependency`](OptionalDependency.md)\<`Type`\> & `object` \| [`Factory`](Factory.md)\<`Type` \| `undefined`\> : [`Resolvable`](Resolvable.md)\<`Type`\> \| [`Factory`](Factory.md)\<`Type`\>

Defined in: [src/types/dependencies.ts:66](https://github.com/D-Kay6/Infuse-TS/blob/2b827980e37dbd9518746d6b95150b5d8563c940/src/types/dependencies.ts#L66)

A single dependency of a component.

## Type Parameters

### Type

`Type`

The type to find the dependency form for.
