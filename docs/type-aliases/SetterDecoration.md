[**Infuse-TS**](../README.md)

***

[Infuse-TS](../README.md) / SetterDecoration

# Type Alias: SetterDecoration\<Setter\>

> **SetterDecoration**\<`Setter`\> = \[`Setter`\] *extends* \[`never`\] ? \<`This`, `Value`\>(`target`, `context`) => (`this`, `value`) => `void` \| `void` : \<`This`, `Value`\>(`target`, `context`) => (`this`, `value`) => `void` \| `void` & \<`This`\>(`target`, `context`) => (`this`, `value`) => `void` \| `void`

Defined in: [src/types/decoration.ts:52](https://github.com/D-Kay6/Infuse-TS/blob/62073e25b5ddbed6e970ac28f7ccfdc3169d3eec/src/types/decoration.ts#L52)

The decoration method for a setter.

## Type Parameters

### Setter

`Setter` = `never`

The type of the setter.

## Remarks

Only works for setters on classes.
