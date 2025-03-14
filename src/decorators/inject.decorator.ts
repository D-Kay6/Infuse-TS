import { Container } from '../lib/container';
import { isCollection, isIdentifier } from '../lib/utilities';
import type { FieldDecoration } from '../types/decoration';
import type { DependencyItem, DependencyType, Factory } from '../types/dependencies';

/**
 * Injects a dependency into a field.
 * @typeParam Value - The type of the field. Inferred from the decorator.
 * @param dependency - The dependency to inject.
 * @remarks Arrays are defined as `[Dependency]`.
 */
export function Inject<Type>(dependency: DependencyItem<Type> | Factory<Type>): FieldDecoration<Type> {
  const optional = 'optional' in dependency ? dependency.optional : false;
  const dependencyItem = 'optional' in dependency ? dependency.item : dependency as DependencyType<Type> | Factory<Type>;
  return <This>(_target: undefined, _context: ClassFieldDecoratorContext<This, Type>) => {
    return function replacement(this: This, defaultValue: Type): Type {
      if (isCollection(dependencyItem)) {
        if (optional || typeof defaultValue !== 'undefined') {
          return Container.default.resolve(dependencyItem) as Type ?? defaultValue;
        }

        return Container.default.resolveRequired(dependencyItem) as Type;
      }

      if (isIdentifier<Type>(dependencyItem)) {
        if (optional || typeof defaultValue !== 'undefined') {
          return Container.default.resolve(dependencyItem) ?? defaultValue;
        }

        return Container.default.resolveRequired(dependencyItem);
      }

      return dependencyItem(Container.default) ?? defaultValue;
    };
  }
}
