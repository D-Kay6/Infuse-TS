[**Infuse-TS**](../README.md)

***

[Infuse-TS](../README.md) / FieldDecoration

# Type Alias: FieldDecoration()\<Value\>

> **FieldDecoration**\<`Value`\>: \<`This`\>(`target`, `context`) => (`this`, `original`) => `Value`

Defined in: [src/types/decoration.ts:29](https://github.com/D-Kay6/Infuse-TS/blob/10bae258e5f565f29eb517fd3b4bbd7f4f6e62d8/src/types/decoration.ts#L29)

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
