import type { Provider } from './base.provider';

/**
 * Provider for a static value.
 * @typeParam Type - The type of the provided value.
 */
export class ValueProvider<Type> implements Provider<Type> {
  public readonly name: string;
  private readonly value: Type;

  constructor(name: string, value: Type) {
    this.name = 'val:' + name;
    this.value = value;
  }

  public provide(): Type {
    return this.value;
  }
}
