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
 * Shorthand for the different types of dependencies.
 * @typeParam Type - The type referenced by the dependency.
 */
export type Dependency<Type = unknown> = Collection<Type> | Identifier<Type> | Factory<Type>;

/**
 * Wraps an item to indicate it is optional.
 * @typeParam Item - The type of the item.
 */
export type Optionally<Item> = { optional: true; item: Item };

/**
 * Recursively get the dependencies for a component.
 * @typeParam Item - The component type.
 * @typeParam Arguments - The arguments needed for construction.
 * @typeParam Current - The current dependencies.
 */
export type Dependencies<Item extends Component, Arguments extends unknown[] = ComponentArgs<Item>, Current extends unknown[] = []> = Arguments extends [infer Argument, ...infer Rest]
  ? Dependencies<Item, Rest, [...Current, DependencyItem<Argument> | Factory<Argument>]>
  : Current;

/**
 * A single dependency of a component.
 * @typeParam Type - The type of the dependency item.
 */
export type DependencyItem<Type> = undefined extends Type ? Optionally<DependencyType<NonNullable<Type>>> : DependencyType<Type>;

/**
 * Differentiates between a collection and a component dependency.
 * @typeParam Type - The type to find the dependency for.
 */
export type DependencyType<Type> = Type extends Array<infer Inner> ? Collection<Inner> : Identifier<Type>;
