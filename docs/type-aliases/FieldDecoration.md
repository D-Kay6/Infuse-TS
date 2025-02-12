[**Infuse-TS**](../README.md)

***

[Infuse-TS](../README.md) / FieldDecoration

# Type Alias: FieldDecoration()\<Value\>

> **FieldDecoration**\<`Value`\>: \<`This`\>(`target`, `context`) => (`this`, `original`) => `Value`

Defined in: [src/types/decoration.ts:29](https://github.com/D-Kay6/Infuse-TS/blob/183255f9a4ec5e9ee4dba778a499aaf2ce7f4763/src/types/decoration.ts#L29)

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
