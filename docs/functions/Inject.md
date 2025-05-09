[**Infuse-TS**](../README.md)

***

[Infuse-TS](../README.md) / Inject

# Function: Inject()

> **Inject**\<`Type`\>(`dependency`): [`FieldDecoration`](../type-aliases/FieldDecoration.md)\<`Type`\>

Defined in: [src/decorators/inject.decorator.ts:12](https://github.com/D-Kay6/Infuse-TS/blob/2b827980e37dbd9518746d6b95150b5d8563c940/src/decorators/inject.decorator.ts#L12)

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
