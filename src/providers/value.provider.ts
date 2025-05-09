import type { Provider } from './base.provider';

/**
 * Provider for a static value.
 * @typeParam Type - The type of the provided value.
 */
export class ValueProvider<Type> implements Provider<Type> {
  private readonly value: Type;

  constructor(value: Type) {
    this.value = value;
  }

  public provide(): Type {
    return this.value;
  }
}
