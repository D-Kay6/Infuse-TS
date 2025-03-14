import { RequestContext } from '../lib/context';
import { Scope } from '../lib/scope';
import type { Provider } from '../providers/base.provider';
import type { Identifier } from '../types/dependencies';

/**
 * A single entry in the registry.
 * @typeParam Type - The type of the registration.
 */
export class RegistrationEntry<Type = unknown> {
  /** @internal */
  public scope: Scope;
  public readonly identifier: Identifier<Type>;

  private readonly removeEntry: () => void;
  private readonly provider: Provider<Type>;
  private lastInstance?: Type;
  private isDestroyed: boolean = false;

  constructor(identifier: Identifier<Type>, scope: Scope, provider: Provider<Type>, removeEntry: () => void) {
    this.identifier = identifier;
    this.scope = scope;
    this.provider = provider;
    this.removeEntry = removeEntry;
  }

  public destroy(): void {
    if (!this.isDestroyed) {
      return;
    }

    this.removeEntry();
    this.isDestroyed = true;
  }

  public create(): Type {
    if (this.scope === Scope.Request) {
      let instance = RequestContext.get<Type>(this.identifier.name);
      if (typeof instance === 'undefined') {
        instance = this.provider.provide();
        RequestContext.set(this.identifier.name, instance);
      }

      return instance;
    }

    if (this.scope === Scope.Singleton) {
      if (typeof this.lastInstance === 'undefined') {
        this.lastInstance = this.provider.provide();
      }

      return this.lastInstance;
    }

    return this.provider.provide();
  }
}
