import type { Container } from '../lib/container';
import { isIdentifier } from '../lib/utilities';
import type { Component } from '../types/component';
import type { Collection, Dependencies, Identifier } from '../types/dependencies';
import type { Factory } from '../types/factory';
import type { Provider } from './base.provider';

/**
 * Provider for a component.
 * @typeParam Type - The type of the provided value.
 * @typeParam Class - The class of the component.
 */
export class ComponentProvider<Type extends object, Class extends Component<Type>> implements Provider<Type> {
  public readonly identifier: Identifier<Type>;
  private readonly container: Container;
  private readonly component: Class;
  private readonly dependencies: Dependencies<Class>;

  constructor(container: Container, component: Class, ...dependencies: Dependencies<Class>) {
    this.identifier = component;
    this.container = container;
    this.component = component;
    this.dependencies = dependencies;
  }

  private resolveDependency<Type>(dependency: Collection<Type> | Identifier<Type> | Factory<Type>): Type | undefined {
    if (Array.isArray(dependency)) {
      return this.container.resolve<Type>(dependency);
    }

    if (isIdentifier<Type>(dependency)) {
      return this.container.resolve<Type>(dependency);
    }

    return dependency(this.container) as Type;
  }

  public provide(): Type {
    const args = this.dependencies.map((dependency) => {
      return this.resolveDependency(dependency);
    });

    return new this.component(...args);
  }
}

