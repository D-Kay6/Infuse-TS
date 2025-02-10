[**Infuse-TS**](../README.md)

***

[Infuse-TS](../README.md) / MethodDecoration

# Type Alias: MethodDecoration()\<Target\>

> **MethodDecoration**\<`Target`\>: \<`This`\>(`target`, `context`) => `Target`

Defined in: [src/types/decoration.ts:22](https://github.com/D-Kay6/Infuse-TS/blob/a8c30be6111883959cfa2434b18c1b26f87c6a92/src/types/decoration.ts#L22)

The decoration method for a method.

## Type Parameters

• **Target** *extends* [`MethodHandle`](MethodHandle.md) = [`MethodHandle`](MethodHandle.md)

The target method handle.

## Type Parameters

• **This**

## Parameters

### target

`Target`

### context

`ClassMethodDecoratorContext`\<`This`, `Target`\>

## Returns

`Target`

## Remarks

Only works for methods on classes.
