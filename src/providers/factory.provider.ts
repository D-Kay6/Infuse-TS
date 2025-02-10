import type { Container } from '../lib/container';
import type { Factory } from '../types/factory';
import type { Provider } from './base.provider';

/**
 * Provider for a factory.
 * @typeParam Type - The type of the provided value.
 */
export class FactoryProvider<Type> implements Provider<Type> {
  public readonly name: string;
  private readonly factory: Factory<Type>;
  private readonly container: Container;

  constructor(name: string, factory: Factory<Type>, container: Container) {
    this.name = 'func:' + name;
    this.factory = factory;
    this.container = container;
  }

  public provide(): Type {
    return this.factory(this.container);
  }
}
