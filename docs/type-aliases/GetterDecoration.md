[**Infuse-TS**](../README.md)

***

[Infuse-TS](../README.md) / GetterDecoration

# Type Alias: GetterDecoration\<Getter\>

> **GetterDecoration**\<`Getter`\> = \[`Getter`\] *extends* \[`never`\] ? \<`This`, `Value`\>(`target`, `context`) => (`this`) => `Value` \| `void` : \<`This`, `Value`\>(`target`, `context`) => (`this`) => `Value` \| `void` & \<`This`\>(`target`, `context`) => (`this`) => `Getter` \| `void`

Defined in: [src/types/decoration.ts:42](https://github.com/D-Kay6/Infuse-TS/blob/2b827980e37dbd9518746d6b95150b5d8563c940/src/types/decoration.ts#L42)

The decoration method for a getter.

## Type Parameters

### Getter

`Getter` = `never`

The type of the getter.

## Remarks

Only works for getters on classes.
