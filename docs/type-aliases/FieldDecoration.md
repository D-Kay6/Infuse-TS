[**Infuse-TS**](../README.md)

***

[Infuse-TS](../README.md) / FieldDecoration

# Type Alias: FieldDecoration\<Field\>

> **FieldDecoration**\<`Field`\> = \[`Field`\] *extends* \[`never`\] ? \<`This`, `Value`\>(`target`, `context`) => (`this`, `defaultValue`) => `Value` \| `void` : \<`This`, `Value`\>(`target`, `context`) => (`this`, `defaultValue`) => `Value` \| `void` & \<`This`\>(`target`, `context`) => (`this`, `defaultValue`) => `Field` \| `void`

Defined in: [src/types/decoration.ts:32](https://github.com/D-Kay6/Infuse-TS/blob/2b827980e37dbd9518746d6b95150b5d8563c940/src/types/decoration.ts#L32)

The decoration method for a field.

## Type Parameters

### Field

`Field` = `never`

The type of the field.

## Remarks

Only works for fields on classes.
