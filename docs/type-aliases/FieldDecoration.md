[**Infuse-TS**](../README.md)

***

[Infuse-TS](../README.md) / FieldDecoration

# Type Alias: FieldDecoration()\<Value\>

> **FieldDecoration**\<`Value`\> = \<`This`\>(`target`, `context`) => (`this`, `original`) => `Value`

Defined in: [src/types/decoration.ts:28](https://github.com/D-Kay6/Infuse-TS/blob/1387e3f339bea91025c5da407e0b7dff28feffb5/src/types/decoration.ts#L28)

The decoration method for a field.

## Type Parameters

### Value

`Value` = `unknown`

The type of the field.

## Type Parameters

### This

`This`

## Parameters

### target

`undefined`

### context

`ClassFieldDecoratorContext`\<`This`, `Value`\>

## Returns

`Function`

### Parameters

#### this

`This`

#### original

`Value`

### Returns

`Value`

## Remarks

Only works for fields on classes.
