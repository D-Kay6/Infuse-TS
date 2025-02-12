import type { Container } from '../lib/container';
import type { Identifier } from '../types/dependencies';
import type { Factory } from '../types/factory';
import type { Provider } from './base.provider';

/**
 * Provider for a factory.
 * @typeParam Type - The type of the provided value.
 */
export class FactoryProvider<Type> implements Provider<Type> {
  public readonly identifier: Identifier<Type>;
  private readonly factory: Factory<Type>;
  private readonly container: Container;

  constructor(identifier: Identifier<Type>, factory: Factory<Type>, container: Container) {
    this.identifier = identifier;
    this.factory = factory;
    this.container = container;
  }

  public provide(): Type {
    return this.factory(this.container);
  }
}
