[**Infuse-TS**](../README.md)

***

[Infuse-TS](../README.md) / Inject

# Function: Inject()

> **Inject**\<`Type`\>(`dependency`): [`FieldDecoration`](../type-aliases/FieldDecoration.md)\<`Type`\>

Defined in: [src/decorators/inject.decorator.ts:12](https://github.com/D-Kay6/Infuse-TS/blob/1387e3f339bea91025c5da407e0b7dff28feffb5/src/decorators/inject.decorator.ts#L12)

Injects a dependency into a field.

## Type Parameters

### Type

`Type`

## Parameters

### dependency

The dependency to inject.

[`DependencyItem`](../type-aliases/DependencyItem.md)\<`Type`\> | [`Factory`](../type-aliases/Factory.md)\<`Type`\>

## Returns

[`FieldDecoration`](../type-aliases/FieldDecoration.md)\<`Type`\>

## Remarks

Arrays are defined as `[Dependency]`.
