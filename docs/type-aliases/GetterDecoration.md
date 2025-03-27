[**Infuse-TS**](../README.md)

***

[Infuse-TS](../README.md) / GetterDecoration

# Type Alias: GetterDecoration()\<Value\>

> **GetterDecoration**\<`Value`\> = \<`This`\>(`target`, `context`) => (`this`) => `Value`

Defined in: [src/types/decoration.ts:35](https://github.com/D-Kay6/Infuse-TS/blob/1387e3f339bea91025c5da407e0b7dff28feffb5/src/types/decoration.ts#L35)

The decoration method for a getter.

## Type Parameters

### Value

`Value` = `unknown`

The type of the getter.

## Type Parameters

### This

`This`

## Parameters

### target

(`this`) => `Value`

### context

`ClassGetterDecoratorContext`\<`This`, `Value`\>

## Returns

`Function`

### Parameters

#### this

`This`

### Returns

`Value`

## Remarks

Only works for getters on classes.
