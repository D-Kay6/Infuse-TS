import type { IContainer } from '../lib/container.ts';
import type { Component, ComponentArgs } from './component';

/**
 * An identifier for a component.
 * @typeParam Type - The type of the component.
 */
export type Identifier<Type = unknown> = { prototype: Type; name: string };

/**
 * An identifier for a collection of components.
 * @typeParam Type - The type of the collection.
 */
export type Collection<Type> = [Identifier<Type>];

/**
 * Represents a factory dependency.
 * @typeParam Type - The type returned by the factory.
 */
export type Factory<Type> = (container: IContainer) => Type;

/**
 * A type that can be resolved to a component.
 * @typeParam Type - The type of the resolved component.
 */
export type Resolvable<Type> = Type extends Array<infer Inner> ? Collection<Inner> : Identifier<Type>;

/**
 * A factory for lazy loading a component.
 * @typeParam Type - The type of the resolved component.
 */
export type Func<Type> = () => Type;

/**
 * Represents a dependency that can be resolved to a component.
 * @typeParam Type - The type of the resolvable item.
 */
export type Dependency<Type> = { item: Resolvable<Type> };

/**
 * Wraps an item to indicate it is optional.
 * @typeParam Type - The type of the resolvable item.
 */
export type OptionalDependency<Type> = Dependency<Type> & { optional: true };

/**
 * Wraps an item to indicate it can be lazily resolved.
 * @typeParam Type - The type of the resolvable item.
 */
export type LazyDependency<Type> = Dependency<Type> & { lazy: true };

/**
 * Recursively get the dependencies for a component.
 * @typeParam Item - The component type.
 * @typeParam Arguments - The arguments needed for construction.
 * @typeParam Current - The current dependencies.
 */
export type Dependencies<Item extends Component, Arguments extends unknown[] = ComponentArgs<Item>, Current extends unknown[] = []> = Arguments extends [infer Argument, ...infer Rest]
  ? Dependencies<Item, Rest, [...Current, DependencyItem<Argument>]>
  : Current;

/**
 * A single dependency of a component.
 * @typeParam Type - The type to find the dependency form for.
 */
export type DependencyItem<Type> = [Type] extends [Func<infer Inner>]
  ? undefined extends Inner
    ? LazyDependency<Inner> & OptionalDependency<Inner>
    : LazyDependency<Inner> & { optional?: never }
  : undefined extends Type
    ? (OptionalDependency<Type> & { lazy?: never }) | Factory<Type | undefined>
    : Resolvable<Type> | Factory<Type>;
