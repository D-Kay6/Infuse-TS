[**Infuse-TS**](../README.md)

***

[Infuse-TS](../README.md) / RequireOptional

# Type Alias: RequireOptional\<Type, Optionals\>

> **RequireOptional**\<`Type`, `Optionals`\> = \{ \[K in keyof Type\]: Optionals\[K\] extends never ? Type\[K\] : Type\[K\] \| undefined \}

Defined in: [src/types/utility.ts:16](https://github.com/D-Kay6/Infuse-TS/blob/2b827980e37dbd9518746d6b95150b5d8563c940/src/types/utility.ts#L16)

Filter out properties that are optional.

## Type Parameters

### Type

`Type`

The type to filter. This should not contain elements with `?`.

### Optionals

`Optionals` *extends* `Type`

All properties that are optional. This should be a subset of `Type`.

## Remarks

Combined with `OptionalProperties`, this will allow `?` constructor parameters to be inferred as `undefined`.
