import { Container } from '../lib/container';
import { isCollection, isComponent } from '../lib/utilities';
import type { FieldDecoration } from '../types/decoration';
import type { Dependency } from '../types/dependencies';

/**
 * Injects a dependency into a field.
 * @typeParam Value - The type of the field. Inferred from the decorator.
 * @param dependency - The dependency to inject.
 * @remarks Arrays are defined as `[Dependency]`.
 */
export function Inject<Value>(dependency: Dependency<Value>): FieldDecoration<Value> {
  return <This>(_target: undefined, _context: ClassFieldDecoratorContext<This, Value>) => function replacement(this: This, value: Value): Value {
    const container = Container.current;
    if (!container) {
      throw new Error('Container not found');
    }

    if (isCollection<Value>(dependency)) {
      return container.resolve(dependency) ?? value;
    }

    if (isComponent(dependency)) {
      return container.resolve(dependency) ?? value;
    }

    if (typeof dependency === 'string') {
      return container.resolve<Value>(dependency) ?? value;
    }

    return dependency(container);
  };
}
