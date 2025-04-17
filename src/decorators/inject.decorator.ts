import { Container } from '../lib/container';
import { isFactory, isIdentifier, isLazy, isOptional } from '../lib/utilities';
import type { FieldDecoration } from '../types/decoration';
import type { Dependency, DependencyItem, Func } from '../types/dependencies';

/**
 * Injects a dependency into a field.
 * @typeParam Value - The type of the field. Inferred from the decorator.
 * @param dependency - The dependency to inject.
 * @remarks Arrays are defined as `[Dependency]`.
 */
export function Inject<Type>(dependency: NoInfer<DependencyItem<Type>>): FieldDecoration<Type> {
  type Target = Type extends Func<infer Inner> ? Inner : Type;
  return (() =>
    function replacement(): Type | Func<Target | undefined> | undefined {
      if (Array.isArray(dependency)) {
        return Container.default.resolveRequired(dependency) as Type;
      }

      if (isIdentifier<Type>(dependency)) {
        return Container.default.resolveRequired(dependency);
      }

      if (isFactory(dependency)) {
        return dependency(Container.default);
      }

      if (isLazy(dependency)) {
        const lazyDependency = dependency as Dependency<Target>;
        if (isOptional(lazyDependency)) {
          return () => Container.default.resolve<Target>(lazyDependency.item);
        } else {
          return () => Container.default.resolveRequired(lazyDependency.item);
        }
      }

      if (isOptional(dependency)) {
        return Container.default.resolve<Type>(dependency.item);
      } else {
        return Container.default.resolveRequired(dependency.item);
      }
    }) as FieldDecoration<Type>;
}
