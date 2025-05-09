[**Infuse-TS**](../README.md)

***

[Infuse-TS](../README.md) / SetterDecoration

# Type Alias: SetterDecoration\<Setter\>

> **SetterDecoration**\<`Setter`\> = \[`Setter`\] *extends* \[`never`\] ? \<`This`, `Value`\>(`target`, `context`) => (`this`, `value`) => `void` \| `void` : \<`This`, `Value`\>(`target`, `context`) => (`this`, `value`) => `void` \| `void` & \<`This`\>(`target`, `context`) => (`this`, `value`) => `void` \| `void`

Defined in: [src/types/decoration.ts:52](https://github.com/D-Kay6/Infuse-TS/blob/2b827980e37dbd9518746d6b95150b5d8563c940/src/types/decoration.ts#L52)

The decoration method for a setter.

## Type Parameters

### Setter

`Setter` = `never`

The type of the setter.

## Remarks

Only works for setters on classes.
