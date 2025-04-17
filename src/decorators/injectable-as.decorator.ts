import { Container } from '../lib/container';
import { Scope } from '../lib/scope';
import type { AbstractComponent, Component } from '../types/component';
import type { ClassDecoration } from '../types/decoration';
import type { Dependencies } from '../types/dependencies';

/**
 * Marks a class as injectable.
 * @typeParam Parent - The type of the parent class.
 * @typeParam Type - The type of the class. Inferred from the decorator.
 * @typeParam Class - The constructor of the class. Inferred from the decorator.
 * @param parent - The parent class to register the class as.
 * @param dependencies - The dependencies to inject into the class.
 */
export function InjectableAs<Parent extends object, Type extends Parent, Class extends Component<Type>>(parent: AbstractComponent<Parent>, ...dependencies: Dependencies<Class>): ClassDecoration<Class>;

/**
 * Marks a class as injectable.
 * @typeParam Parent - The type of the parent class.
 * @typeParam Type - The type of the class. Inferred from the decorator.
 * @typeParam Class - The constructor of the class. Inferred from the decorator.
 * @param parent - The parent class to register the class as.
 * @param scope - The scope of the class.
 * @param dependencies - The dependencies to inject into the class.
 */
export function InjectableAs<Parent extends object, Type extends Parent, Class extends Component<Type>>(parent: AbstractComponent<Parent>, scope: Scope, ...dependencies: Dependencies<Class>): ClassDecoration<Class>;

export function InjectableAs<Parent extends object, Type extends Parent, Class extends Component<Type>>(parent: AbstractComponent<Parent>, ...args: unknown[]): ClassDecoration<Class> {
  const scope = typeof args[0] === 'number' ? (args.shift() as Scope) : Scope.Transient;
  const dependencies = args as Dependencies<Class>;
  return ((constructor: Class): void => {
    const container = Container.default;
    const registration = container.registerComponent(constructor, ...dependencies);
    registration.as(parent);
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
  }) as ClassDecoration<Class>;
}
