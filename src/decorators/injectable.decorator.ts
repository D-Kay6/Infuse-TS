import { Container } from '../lib/container';
import { Scope } from '../lib/scope';
import type { Component } from '../types/component';
import type { ClassDecoration } from '../types/decoration';
import type { Dependencies } from '../types/dependencies';

/**
 * Marks a class as injectable.
 * @typeParam Class - The constructor of the class. Inferred from the decorator.
 * @param dependencies - The dependencies to inject into the class.
 */
export function Injectable<Class extends Component>(...dependencies: Dependencies<Class>): ClassDecoration<Class>;

/**
 * Marks a class as injectable.
 * @typeParam Class - The constructor of the class. Inferred from the decorator.
 * @param scope - The scope of the class.
 * @param dependencies - The dependencies to inject into the class.
 */
export function Injectable<Class extends Component>(scope: Scope, ...dependencies: Dependencies<Class>): ClassDecoration<Class>;

export function Injectable<Class extends Component>(...args: unknown[]): ClassDecoration<Class> {
  const scope = typeof args[0] === 'number' ? args.shift() as Scope : Scope.Transient;
  const dependencies = args as Dependencies<Class>;
  return (constructor: Class, _context: ClassDecoratorContext<Class>) => {
    const container = Container.current;
    if (!container) {
      throw new Error('Container not found');
    }

    const registration = container.registerComponent(constructor, ...dependencies);
    registration.asSelf();
    switch (scope) {
      case Scope.Transient:
        registration.instancePerDependency();
        break;
      case Scope.Request:
        registration.instancePerRequest();
        break;
      case Scope.Singleton:
        registration.singleInstance();
        break;
    }

    return constructor;
  };
}
