[**Infuse-TS**](../README.md)

***

[Infuse-TS](../README.md) / Inject

# Function: Inject()

> **Inject**\<`Type`\>(`dependency`): [`FieldDecoration`](../type-aliases/FieldDecoration.md)\<`Type`\>

Defined in: [src/decorators/inject.decorator.ts:12](https://github.com/D-Kay6/Infuse-TS/blob/62073e25b5ddbed6e970ac28f7ccfdc3169d3eec/src/decorators/inject.decorator.ts#L12)

Injects a dependency into a field.

## Type Parameters

### Type

`Type`

## Parameters

### dependency

`NoInfer`\<[`DependencyItem`](../type-aliases/DependencyItem.md)\<`Type`\>\>

The dependency to inject.

## Returns

[`FieldDecoration`](../type-aliases/FieldDecoration.md)\<`Type`\>

## Remarks

Arrays are defined as `[Dependency]`.
