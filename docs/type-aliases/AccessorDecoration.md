[**Infuse-TS**](../README.md)

***

[Infuse-TS](../README.md) / AccessorDecoration

# Type Alias: AccessorDecoration()\<Value\>

> **AccessorDecoration**\<`Value`\> = \<`This`\>(`target`, `context`) => `ClassAccessorDecoratorResult`\<`This`, `Value`\>

Defined in: [src/types/decoration.ts:49](https://github.com/D-Kay6/Infuse-TS/blob/1387e3f339bea91025c5da407e0b7dff28feffb5/src/types/decoration.ts#L49)

The decoration method for an accessor.

## Type Parameters

### Value

`Value` = `unknown`

The type of the accessor.

## Type Parameters

### This

`This`

## Parameters

### target

`ClassAccessorDecoratorTarget`\<`This`, `Value`\>

### context

`ClassAccessorDecoratorContext`\<`This`, `Value`\>

## Returns

`ClassAccessorDecoratorResult`\<`This`, `Value`\>

## Remarks

Only works for accessors on classes.
