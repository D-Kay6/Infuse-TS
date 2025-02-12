import type { AbstractComponent } from '../types/component';
import type { Collection, Identifier } from '../types/dependencies';

const handler = {
  construct() {
    return handler;
  }
};

/**
 * Check if the item is an identifier.
 * @typeParam Type - The type of the identifier.
 * @param item - The item to check.
 * @returns `true` if the item is an identifier, `false` otherwise.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isIdentifier = <Type>(item: any): item is Identifier<Type> => {
  try {
    return !!new new Proxy(item, handler)();
  } catch (e) {
    return false;
  }
}

/**
 * Check if the item is a component.
 * @typeParam Type - The type of the component.
 * @param item - The item to check.
 * @returns `true` if the item is a component, `false` otherwise.
 * @remarks Global functions may be recognized as components. Use arrow functions instead.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isComponent = <Type extends object>(item: any): item is AbstractComponent<Type> => {
  try {
    return !!new new Proxy(item, handler)();
  } catch (e) {
    return false;
  }
};

/**
 * Check if the item is a collection.
 * @typeParam Type - The type of the collection.
 * @param item - The item to check.
 * @returns `true` if the item is a collection, `false` otherwise.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isCollection = <Type>(item: any): item is Collection<Type> => {
  return Array.isArray(item);
};
