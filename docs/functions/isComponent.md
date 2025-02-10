[**Infuse-TS**](../README.md)

***

[Infuse-TS](../README.md) / isComponent

# Function: isComponent()

> **isComponent**\<`Type`\>(`item`): `item is AbstractComponent<Type>`

Defined in: src/lib/utilities.ts:18

Check if the item is a component.

## Type Parameters

• **Type** *extends* `object`

The type of the component.

## Parameters

### item

`any`

The item to check.

## Returns

`item is AbstractComponent<Type>`

`true` if the item is a component, `false` otherwise.

## Remarks

Global functions may be recognized as components. Use arrow functions instead.
