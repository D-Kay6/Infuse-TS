[**Infuse-TS**](../README.md)

***

[Infuse-TS](../README.md) / ComponentArgs

# Type Alias: ComponentArgs\<Class, Params\>

> **ComponentArgs**\<`Class`, `Params`\> = [`RequireOptional`](RequireOptional.md)\<`Required`\<`Params`\>, [`OptionalProperties`](OptionalProperties.md)\<`Params`\>\>

Defined in: [src/types/component.ts:25](https://github.com/D-Kay6/Infuse-TS/blob/62073e25b5ddbed6e970ac28f7ccfdc3169d3eec/src/types/component.ts#L25)

Get the arguments needed for construction.

## Type Parameters

### Class

`Class` *extends* [`Component`](Component.md)

The component type.

### Params

`Params` = `ConstructorParameters`\<`Class`\>
