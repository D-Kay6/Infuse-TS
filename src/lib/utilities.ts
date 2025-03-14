/* eslint-disable @typescript-eslint/no-explicit-any */
import type { AbstractComponent } from '../types/component';
import type { Collection, Identifier } from '../types/dependencies';

const handler = {
  construct() {
    return handler;
  }
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
export const isIdentifier = <Type>(item: any): item is Identifier<Type> => {
  try {
    return !!new new Proxy(item, handler)();
  } catch (e) {
    return false;
  }
}

/**
 * Check if the item is a collection.
 * @typeParam Type - The type of the collection.
 * @param item - The item to check.
 * @returns `true` if the item is a collection, `false` otherwise.
 */
export const isCollection = <Type>(item: any): item is Collection<Type> => {
  return Array.isArray(item);
};
