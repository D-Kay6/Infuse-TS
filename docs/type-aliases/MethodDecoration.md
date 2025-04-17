[**Infuse-TS**](../README.md)

***

[Infuse-TS](../README.md) / MethodDecoration

# Type Alias: MethodDecoration\<Method\>

> **MethodDecoration**\<`Method`\> = \[`Method`\] *extends* \[`never`\] ? \<`This`, `Target`\>(`target`, `context`) => `Target` \| `void` : \<`This`, `Target`\>(`target`, `context`) => `Target` \| `void` & \<`This`\>(`target`, `context`) => `Method` \| `void`

Defined in: [src/types/decoration.ts:23](https://github.com/D-Kay6/Infuse-TS/blob/62073e25b5ddbed6e970ac28f7ccfdc3169d3eec/src/types/decoration.ts#L23)

The decoration method for a method.

## Type Parameters

### Method

`Method` *extends* [`MethodHandle`](MethodHandle.md) = `never`

The target method handle.

## Remarks

Only works for methods on classes.
