[**Infuse-TS**](../README.md)

***

[Infuse-TS](../README.md) / ClassDecoration

# Type Alias: ClassDecoration\<Class\>

> **ClassDecoration**\<`Class`\> = \[`Class`\] *extends* \[`never`\] ? \<`Class`\>(`constructor`, `context`) => `Class` \| `void` : \<`Ctor`\>(`constructor`, `context`) => `Ctor` \| `void` & (`constructor`, `context`) => `Class` \| `void`

Defined in: [src/types/decoration.ts:14](https://github.com/D-Kay6/Infuse-TS/blob/62073e25b5ddbed6e970ac28f7ccfdc3169d3eec/src/types/decoration.ts#L14)

The decoration method for a class.

## Type Parameters

### Class

`Class` *extends* [`AbstractComponent`](AbstractComponent.md) = `never`

The class type.
