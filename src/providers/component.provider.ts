import type { IContainer } from '../lib/container';
import { isIdentifier } from '../lib/utilities';
import type { Component } from '../types/component';
import type { Dependencies, Dependency, Identifier } from '../types/dependencies';
import type { Provider } from './base.provider';

/**
 * Provider for a component.
 * @typeParam Type - The type of the provided value.
 * @typeParam Class - The class of the component.
 */
export class ComponentProvider<Type extends object, Class extends Component<Type>> implements Provider<Type> {
  public readonly identifier: Identifier<Type>;
  private readonly container: IContainer;
  private readonly component: Class;
  private readonly dependencies: Dependencies<Class>;

  constructor(container: IContainer, component: Class, ...dependencies: Dependencies<Class>) {
    this.identifier = component;
    this.container = container;
    this.component = component;
    this.dependencies = dependencies;
  }

  public provide(): Type {
    const args = this.dependencies.map((dependency) => {
      if ('optional' in dependency) {
        return this.resolveDependency(dependency.item, dependency.optional);
      }

      return this.resolveDependency(dependency);
    });

    return new this.component(...args);
  }

  private resolveDependency<Type>(dependency: Dependency<Type>, optional: boolean = false): Type | Type[] | undefined {
    if (Array.isArray(dependency)) {
      if (optional) {
        return this.container.resolve(dependency);
      }

      return this.container.resolveRequired(dependency);
    }

    if (isIdentifier<Type>(dependency)) {
      if (optional) {
        return this.container.resolve(dependency);
      }

      return this.container.resolveRequired(dependency);
    }

    return dependency(this.container) as Type | Type[] | undefined;
  }
}

