[**Infuse-TS**](../README.md)

***

[Infuse-TS](../README.md) / OptionalProperties

# Type Alias: OptionalProperties\<Type\>

> **OptionalProperties**\<`Type`\> = `{ [Key in keyof Type]-?: undefined extends Type[Key] ? Type[Key] : never }`

Defined in: [src/types/utility.ts:6](https://github.com/D-Kay6/Infuse-TS/blob/2b827980e37dbd9518746d6b95150b5d8563c940/src/types/utility.ts#L6)

Filter out properties that are not optional.

## Type Parameters

### Type

`Type`

The type to filter.

## Remarks

This is used to convert constructor parameters that are marked optional with `?` to `undefined`.
