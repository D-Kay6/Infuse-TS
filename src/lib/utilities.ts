/* eslint-disable @typescript-eslint/no-unsafe-call */
import type { AbstractComponent } from '../types/component';
import type { Collection, Dependency, Factory, Identifier, LazyDependency, OptionalDependency } from '../types/dependencies';

const handler = {
  construct() {
    return handler;
  },
};

/**
 * Check if the item is a component.
 * @typeParam Type - The type of the component.
 * @param item - The item to check.
 * @returns `true` if the item is a component, `false` otherwise.
 * @remarks Global functions may be recognized as components. Use arrow functions instead.
 */
export const isComponent = <Type extends object>(item: any): item is AbstractComponent<Type> => {
  try {
    return !!new new Proxy(item, handler)();
  } catch (e) {
    return false;
  }
};

/**
 * Check if the item is an identifier.
 * @typeParam Type - The type of the identifier.
 * @param item - The item to check.
 * @returns `true` if the item is an identifier, `false` otherwise.
 */
export const isIdentifier = <Type>(item: unknown): item is Identifier<Type> => {
  return isComponent(item);
};

export const isFactory = <Type>(item: unknown): item is Factory<Type> => {
  return typeof item === 'function' && !isIdentifier<Type>(item);
};

/**
 * Check if the dependency is a collection.
 * @typeParam Type - The type of the dependency.
 * @param item - The dependency to check.
 * @returns `true` if the dependency is a collection, `false` otherwise.w
 */
export const isCollection = <Type>(item: unknown): item is Collection<Type> => {
  return Array.isArray(item);
};

export const isDependency = <Type>(item: unknown): item is Dependency<Type> => {
  return typeof item === 'object' && item !== null && 'item' in item && (isIdentifier(item.item) || isCollection(item.item));
};

/**
 * Check if the dependency may resolve to undefined.
 * @typeParam Type - The type of the dependency.
 * @param item - The dependency to check.
 * @returns `true` if the dependency may resolve to undefined, `false` otherwise.
 */
export const isOptional = <Type>(item: unknown): item is OptionalDependency<Type> => {
  return isDependency(item) && 'optional' in item && item.optional === true;
};

/**
 * Check if the dependency is to be lazily resolved.
 * @typeParam Type - The type of the dependency.
 * @param item - The dependency to check.
 * @returns `true` if the dependency is to be lazily resolved, `false` otherwise.
 */
export const isLazy = <Type>(item: unknown): item is LazyDependency<Type> => {
  return isDependency(item) && 'lazy' in item && item.lazy === true;
};
