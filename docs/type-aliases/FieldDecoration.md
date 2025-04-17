[**Infuse-TS**](../README.md)

***

[Infuse-TS](../README.md) / FieldDecoration

# Type Alias: FieldDecoration\<Field\>

> **FieldDecoration**\<`Field`\> = \[`Field`\] *extends* \[`never`\] ? \<`This`, `Value`\>(`target`, `context`) => (`this`, `defaultValue`) => `Value` \| `void` : \<`This`, `Value`\>(`target`, `context`) => (`this`, `defaultValue`) => `Value` \| `void` & \<`This`\>(`target`, `context`) => (`this`, `defaultValue`) => `Field` \| `void`

Defined in: [src/types/decoration.ts:32](https://github.com/D-Kay6/Infuse-TS/blob/62073e25b5ddbed6e970ac28f7ccfdc3169d3eec/src/types/decoration.ts#L32)

The decoration method for a field.

## Type Parameters

### Field

`Field` = `unknown`

The type of the field.

## Remarks

Only works for fields on classes.
