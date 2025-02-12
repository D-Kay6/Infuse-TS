import type { Identifier } from '../types/dependencies';
import type { Provider } from './base.provider';

/**
 * Provider for a static value.
 * @typeParam Type - The type of the provided value.
 */
export class ValueProvider<Type> implements Provider<Type> {
  public readonly identifier: Identifier<Type>;
  private readonly value: Type;

  constructor(identifier: Identifier<Type>, value: Type) {
    this.identifier = identifier;
    this.value = value;
  }

  public provide(): Type {
    return this.value;
  }
}
