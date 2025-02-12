[**Infuse-TS**](../README.md)

***

[Infuse-TS](../README.md) / MethodDecoration

# Type Alias: MethodDecoration()\<Target\>

> **MethodDecoration**\<`Target`\>: \<`This`\>(`target`, `context`) => `Target`

Defined in: [src/types/decoration.ts:22](https://github.com/D-Kay6/Infuse-TS/blob/183255f9a4ec5e9ee4dba778a499aaf2ce7f4763/src/types/decoration.ts#L22)

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
