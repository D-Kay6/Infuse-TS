[**Infuse-TS**](../README.md)

***

[Infuse-TS](../README.md) / SetterDecoration

# Type Alias: SetterDecoration()\<Value\>

> **SetterDecoration**\<`Value`\> = \<`This`\>(`target`, `context`) => (`this`, `value`) => `void`

Defined in: [src/types/decoration.ts:42](https://github.com/D-Kay6/Infuse-TS/blob/1387e3f339bea91025c5da407e0b7dff28feffb5/src/types/decoration.ts#L42)

The decoration method for a setter.

## Type Parameters

### Value

`Value` = `unknown`

The type of the setter.

## Type Parameters

### This

`This`

## Parameters

### target

(`this`, `value`) => `void`

### context

`ClassSetterDecoratorContext`\<`This`, `Value`\>

## Returns

`Function`

### Parameters

#### this

`This`

#### value

`Value`

### Returns

`void`

## Remarks

Only works for setters on classes.
