import type { IContainer } from '../lib/container';
import type { Factory, Identifier } from '../types/dependencies';
import type { Provider } from './base.provider';

/**
 * Provider for a factory.
 * @typeParam Type - The type of the provided value.
 */
export class FactoryProvider<Type> implements Provider<Type> {
  public readonly identifier: Identifier<Type>;
  private readonly factory: Factory<Type>;
  private readonly container: IContainer;

  constructor(identifier: Identifier<Type>, factory: Factory<Type>, container: IContainer) {
    this.identifier = identifier;
    this.factory = factory;
    this.container = container;
  }

  public provide(): Type {
    return this.factory(this.container);
  }
}
