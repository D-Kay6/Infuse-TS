[**Infuse-TS**](../README.md)

***

[Infuse-TS](../README.md) / Inject

# Function: Inject()

> **Inject**\<`Value`\>(`dependency`): [`FieldDecoration`](../type-aliases/FieldDecoration.md)\<`Value`\>

Defined in: src/decorators/inject.decorator.ts:12

Injects a dependency into a field.

## Type Parameters

• **Value**

The type of the field. Inferred from the decorator.

## Parameters

### dependency

[`Dependency`](../type-aliases/Dependency.md)\<`Value`\>

The dependency to inject.

## Returns

[`FieldDecoration`](../type-aliases/FieldDecoration.md)\<`Value`\>

## Remarks

Arrays are defined as `[Dependency]`.
