import type { IContainer } from '../lib/container';

/**
 * Represents a factory function.
 * @typeParam Type - The type returned by the factory.
 */
export type Factory<Type> = (container: IContainer) => Type;
