import type { AbstractComponent, Component, ComponentArgs } from './component';
import type { Factory } from './factory';

/**
 * An identifier for a component.
 * @typeParam Type - The type of the component.
 */
export type Identifier<Type = unknown> = (Type extends object ? AbstractComponent<Type> : never) | string;

/**
 * A collection of identifiers.
 * @typeParam Type - The type of the collection.
 */
export type Collection<Type> = Type extends Array<infer Inner> ? [Identifier<Inner>] : never;

/**
 * A dependency for a component.
 * @typeParam Type - The type of the dependency.
 */
export type Dependency<Type = unknown> = Collection<Type> | Identifier<Type> | Factory<Type>;
// export type Dependency<Type = unknown> = (Type extends unknown[] ? Collection<Type> : Identifier<Type>) | Factory<Type>;

/**
 * The dependencies of a component.
 * @typeParam Item - The component type.
 * @typeParam Arguments - The arguments needed for construction.
 * @typeParam Current - The current dependencies.
 */
export type Dependencies<Item extends Component, Arguments extends unknown[] = ComponentArgs<Item>, Current extends unknown[] = []> =
  Arguments extends [infer Argument, ...infer Rest] ? Dependencies<Item, Rest, [...Current, Dependency<Argument>]> : Current;
