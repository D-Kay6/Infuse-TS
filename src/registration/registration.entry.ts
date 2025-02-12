import { RequestContext } from '../lib/context';
import { Scope } from '../lib/scope';
import type { Provider } from '../providers/base.provider';
import type { Identifier } from '../types/dependencies';

export class RegistrationEntry<Type = unknown> {
  /** @internal */
  public scope: Scope;
  public readonly identifier: Identifier<Type>;

  private readonly provider: Provider<Type>;
  private lastInstance?: Type;

  constructor(identifier: Identifier<Type>, scope: Scope, provider: Provider<Type>) {
    this.identifier = identifier;
    this.scope = scope;
    this.provider = provider;
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
