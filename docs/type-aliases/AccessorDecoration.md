[**Infuse-TS**](../README.md)

***

[Infuse-TS](../README.md) / AccessorDecoration

# Type Alias: AccessorDecoration\<Accessor\>

> **AccessorDecoration**\<`Accessor`\> = \[`Accessor`\] *extends* \[`never`\] ? \<`This`, `Value`\>(`target`, `context`) => `ClassAccessorDecoratorResult`\<`This`, `Value`\> \| `void` : \<`This`, `Value`\>(`target`, `context`) => `ClassAccessorDecoratorResult`\<`This`, `Value`\> \| `void` & \<`This`\>(`target`, `context`) => `ClassAccessorDecoratorResult`\<`This`, `Accessor`\> \| `void`

Defined in: [src/types/decoration.ts:62](https://github.com/D-Kay6/Infuse-TS/blob/62073e25b5ddbed6e970ac28f7ccfdc3169d3eec/src/types/decoration.ts#L62)

The decoration method for an accessor.

## Type Parameters

### Accessor

`Accessor` = `never`

The type of the accessor.

## Remarks

Only works for accessors on classes.
