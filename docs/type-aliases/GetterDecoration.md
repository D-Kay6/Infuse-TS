[**Infuse-TS**](../README.md)

***

[Infuse-TS](../README.md) / GetterDecoration

# Type Alias: GetterDecoration\<Getter\>

> **GetterDecoration**\<`Getter`\> = \[`Getter`\] *extends* \[`never`\] ? \<`This`, `Value`\>(`target`, `context`) => (`this`) => `Value` \| `void` : \<`This`, `Value`\>(`target`, `context`) => (`this`) => `Value` \| `void` & \<`This`\>(`target`, `context`) => (`this`) => `Getter` \| `void`

Defined in: [src/types/decoration.ts:42](https://github.com/D-Kay6/Infuse-TS/blob/62073e25b5ddbed6e970ac28f7ccfdc3169d3eec/src/types/decoration.ts#L42)

The decoration method for a getter.

## Type Parameters

### Getter

`Getter` = `unknown`

The type of the getter.

## Remarks

Only works for getters on classes.
