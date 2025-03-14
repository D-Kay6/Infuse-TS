import { createNamespace } from 'cls-hooked';

const namespace = createNamespace('fecb0a3c-d55e-43dd-9350-69d629bd902a');

export class RequestContext {
  /**
   * Try to get a value from the current context.
   * @typeParam T - The type of the cached item, if available.
   * @param key - The key of the value to get.
   * @returns The value if it exists, otherwise undefined.
   */
  public static get<T>(key: string): T | undefined {
    return namespace.get(key);
  }

  /**
   * Set a value in the current context.
   * @remarks If there is no context, nothing will happen.
   * @typeParam T - The type of the cacheable item.
   * @param key - The key of the value to set.
   * @param value - The value to set.
   */
  public static set<T>(key: string, value: T): void {
    namespace.set(key, value);
  }

  /**
   * Run a function in a new context.
   * @remarks This needs to be called in order for any context related functions to work.
   * @param fn - The function to run.
   */
  public static run(fn: () => void): void {
    return namespace.run(fn);
  }

  /**
   * Run an async function in a new context.
   * @remarks This needs to be called in order for any context related functions to work.
   * @param fn - The function to run.
   */
  public static runAsync(fn: () => Promise<void>): Promise<void> {
    return namespace.runPromise(fn);
  }
}
