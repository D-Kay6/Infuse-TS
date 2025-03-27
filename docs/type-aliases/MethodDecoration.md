[**Infuse-TS**](../README.md)

***

[Infuse-TS](../README.md) / MethodDecoration

# Type Alias: MethodDecoration()\<Target\>

> **MethodDecoration**\<`Target`\> = \<`This`\>(`target`, `context`) => `Target`

Defined in: [src/types/decoration.ts:21](https://github.com/D-Kay6/Infuse-TS/blob/1387e3f339bea91025c5da407e0b7dff28feffb5/src/types/decoration.ts#L21)

The decoration method for a method.

## Type Parameters

### Target

`Target` *extends* [`MethodHandle`](MethodHandle.md) = [`MethodHandle`](MethodHandle.md)

The target method handle.

## Type Parameters

### This

`This`

## Parameters

### target

`Target`

### context

`ClassMethodDecoratorContext`\<`This`, `Target`\>

## Returns

`Target`

## Remarks

Only works for methods on classes.
