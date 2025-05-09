import type { IContainer } from '../lib/container';
import type { Factory } from '../types/dependencies';
import type { Provider } from './base.provider';

/**
 * Provider for a factory.
 * @typeParam Type - The type of the provided value.
 */
export class FactoryProvider<Type> implements Provider<Type> {
  private readonly container: IContainer;
  private readonly factory: Factory<Type>;

  constructor(container: IContainer, factory: Factory<Type>) {
    this.container = container;
    this.factory = factory;
  }

  public provide(): Type {
    return this.factory(this.container);
  }
}
