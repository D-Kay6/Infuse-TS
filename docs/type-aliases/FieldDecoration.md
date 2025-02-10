[**Infuse-TS**](../README.md)

***

[Infuse-TS](../README.md) / FieldDecoration

# Type Alias: FieldDecoration()\<Value\>

> **FieldDecoration**\<`Value`\>: \<`This`\>(`target`, `context`) => (`this`, `original`) => `Value`

Defined in: src/types/decoration.ts:29

The decoration method for a field.

## Type Parameters

• **Value** = `unknown`

The type of the field.

## Type Parameters

• **This**

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
