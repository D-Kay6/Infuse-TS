[**Infuse-TS**](../README.md)

***

[Infuse-TS](../README.md) / RequireOptional

# Type Alias: RequireOptional\<Type, Optionals\>

> **RequireOptional**\<`Type`, `Optionals`\> = \{ \[K in keyof Type\]: Optionals\[K\] extends never ? Type\[K\] : Type\[K\] \| undefined \}

Defined in: [src/types/utility.ts:16](https://github.com/D-Kay6/Infuse-TS/blob/62073e25b5ddbed6e970ac28f7ccfdc3169d3eec/src/types/utility.ts#L16)

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
