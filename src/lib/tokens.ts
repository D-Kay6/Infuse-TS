import type { Collection, Dependency, Identifier, LazyDependency, OptionalDependency, Resolvable } from '../types/dependencies.ts';
import { isDependency } from './utilities.ts';

export function Optional<Type, Dependency extends { item: Collection<Type> }>(dependency: Dependency): Dependency & OptionalDependency<Type[]>;
export function Optional<Type, Dependency extends { item: Identifier<Type> }>(dependency: Dependency): Dependency & OptionalDependency<Type>;
export function Optional<Type>(dependency: Collection<Type>): OptionalDependency<Type[]>;
export function Optional<Type>(dependency: Identifier<Type>): OptionalDependency<Type>;
export function Optional<Type>(dependency: Resolvable<Type> | Dependency<Type>): OptionalDependency<Type> {
  return isDependency(dependency)
    ? {
        ...dependency,
        optional: true,
      }
    : {
        item: dependency,
        optional: true,
      };
}

export function Lazy<Type, Dependency extends { item: Collection<Type> }>(dependency: Dependency): Dependency & LazyDependency<Type[]>;
export function Lazy<Type, Dependency extends { item: Identifier<Type> }>(dependency: Dependency): Dependency & LazyDependency<Type>;
export function Lazy<Type>(dependency: Collection<Type>): LazyDependency<Type[]>;
export function Lazy<Type>(dependency: Identifier<Type>): LazyDependency<Type>;
export function Lazy<Type>(dependency: Resolvable<Type> | Dependency<Type>): LazyDependency<Type> {
  return isDependency(dependency)
    ? {
        ...dependency,
        lazy: true,
      }
    : {
        item: dependency,
        lazy: true,
      };
}
