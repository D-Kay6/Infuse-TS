[**Infuse-TS**](../README.md)

***

[Infuse-TS](../README.md) / ComponentArgs

# Type Alias: ComponentArgs\<Class, Params\>

> **ComponentArgs**\<`Class`, `Params`\> = [`RequireOptional`](RequireOptional.md)\<`Required`\<`Params`\>, [`OptionalProperties`](OptionalProperties.md)\<`Params`\>\>

Defined in: [src/types/component.ts:25](https://github.com/D-Kay6/Infuse-TS/blob/2b827980e37dbd9518746d6b95150b5d8563c940/src/types/component.ts#L25)

Get the arguments needed for construction.

## Type Parameters

### Class

`Class` *extends* [`Component`](Component.md)

The component type.

### Params

`Params` = `ConstructorParameters`\<`Class`\>
