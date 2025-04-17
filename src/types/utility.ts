/**
 * Filter out properties that are not optional.
 * @typeParam Type - The type to filter.
 * @remarks This is used to convert constructor parameters that are marked optional with `?` to `undefined`.
 */
export type OptionalProperties<Type> = {
  [Key in keyof Type]-?: undefined extends Type[Key] ? Type[Key] : never;
};

/**
 * Filter out properties that are optional.
 * @typeParam Type - The type to filter. This should not contain elements with `?`.
 * @typeParam Optionals - All properties that are optional. This should be a subset of `Type`.
 * @remarks Combined with `OptionalProperties`, this will allow `?` constructor parameters to be inferred as `undefined`.
 */
export type RequireOptional<Type, Optionals extends Type> = {
  [K in keyof Type]: Optionals[K] extends never ? Type[K] : Type[K] | undefined;
};
