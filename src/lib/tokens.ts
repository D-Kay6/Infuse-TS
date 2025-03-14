import type { Collection, Dependency, Identifier, Optionally } from '../types/dependencies.ts';

/**
 * A wrapper for a dependency that may be optional.
 * @typeParam Type - The type of the dependency.
 * @param identifier - The identifier of the dependency.
 * @returns An object with the dependency and optional flag.
 */
export function Optional<Type>(identifier: Identifier<Type>): Optionally<Identifier<Type>>;
/**
 * A wrapper for a dependency that may be optional.
 * @typeParam Type - The type of the dependency.
 * @param collection - The collection identifier of the dependency.
 * @returns An object with the dependency and optional flag.
 */
export function Optional<Type>(collection: Collection<Type>): Optionally<Collection<Type>>;
export function Optional<Type>(dependency: Dependency<Type>): Optionally<Dependency<Type>> {
  return {
    item: dependency,
    optional: true,
  };
}
