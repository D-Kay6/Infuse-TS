import { Scope } from '../lib/scope';
import type { Provider } from '../providers/base.provider';
import type { Identifier } from '../types/dependencies';
import type { RegistrationEntry } from './registration.entry';
import type { IRegistry } from './registration.registry';

export interface IValueRegistration<Type> {
  /**
   * Register the item under its own name.
   * @remarks This should always be called if not using an alias.
   */
  asSelf(): this;

  /**
   * Register the item as an instance of a parent type.
   * @param identifier - The parent type to register the item as.
   */
  as<Parent extends object, Class extends Identifier<Parent> = Type extends Parent ? Identifier<Parent> : never>(identifier: Class): this;
}

export interface IReferenceRegistration<Type> extends IValueRegistration<Type> {
  /**
   * Register the item as a singleton.
   */
  singleInstance(): this;

  /**
   * Register the item as a transient dependency.
   * @remarks This is the default scope.
   */
  instancePerDependency(): this;

  /**
   * Register the item as a request dependency.
   * @remarks This requires a request context to be set.
   */
  instancePerRequest(): this;
}

export class RegistrationBuilder<Type> implements IReferenceRegistration<Type> {
  private readonly identifier: Identifier<Type>;
  private readonly registry: IRegistry;
  private readonly provider: Provider;
  private readonly aliases: Identifier[] = []
  private readonly registrations: RegistrationEntry[] = [];

  private scope: Scope = Scope.Transient;

  constructor(identifier: Identifier<Type>, registry: IRegistry, provider: Provider<Type>) {
    this.identifier = identifier;
    this.registry = registry;
    this.provider = provider;
  }

  public asSelf(): this {
    return this.as(this.identifier as Identifier<object>);
  }

  public as<Parent extends object, Class extends Identifier<Parent> = Type extends Parent ? Identifier<Parent> : never>(identifier: Class): this {
    if (this.aliases.includes(identifier)) {
      return this;
    }

    const entry = this.registry.add(identifier, this.scope, this.provider);
    this.aliases.push(identifier);
    this.registrations.push(entry);
    return this;
  }

  public singleInstance(): this {
    if (this.scope === Scope.Singleton) {
      return this;
    }

    this.scope = Scope.Singleton;
    for (const registration of this.registrations) {
      registration.scope = this.scope;
    }

    return this;
  }

  public instancePerDependency(): this {
    if (this.scope === Scope.Transient) {
      return this;
    }

    this.scope = Scope.Transient;
    for (const registration of this.registrations) {
      registration.scope = this.scope;
    }

    return this;
  }

  public instancePerRequest(): this {
    if (this.scope === Scope.Request) {
      return this;
    }

    this.scope = Scope.Request;
    for (const registration of this.registrations) {
      registration.scope = this.scope;
    }

    return this;
  }
}
