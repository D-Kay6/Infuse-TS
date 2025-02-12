import { NotRegisteredError } from '../errors/not-registered.error';
import { Scope } from '../lib/scope';
import type { Provider } from '../providers/base.provider';
import type { Identifier } from '../types/dependencies';
import { RegistrationEntry } from "./registration.entry";

export interface IRegistry {
  /**
   * Check if the registry has a registration for the given identifier.
   * @param identifier - The identifier to check for.
   */
  has<Type>(identifier: Identifier<Type>): boolean;

  /**
   * Add a registration to the registry.
   * @param identifier - The identifier to register the provider under.
   * @param scope - The scope of the registration.
   * @param provider - The provider to register.
   * @returns The registration entry.
   */
  add<Type>(identifier: Identifier<Type>, scope: Scope, provider: Provider<Type>): RegistrationEntry<Type>;

  /**
   * Get the first registration for the given identifier.
   * @param identifier - The identifier to get the registration for.
   * @returns The first registration entry.
   */
  first<Type>(identifier: Identifier<Type>): RegistrationEntry<Type>;

  /**
   * Get all registrations for the given identifier.
   * @param identifier - The identifier to get the registrations for.
   * @returns All registration entries.
   */
  all<Type>(identifier: Identifier<Type>): RegistrationEntry<Type>[];
}

export class Registry implements IRegistry {
  private readonly registrations: Map<Identifier, RegistrationEntry[]> = new Map();

  public has<Type>(identifier: Identifier<Type>): boolean {
    const registrations = this.registrations.get(identifier);
    if (!registrations) {
      return false;
    }

    return registrations.length > 0;
  }

  public add<Type>(identifier: Identifier<Type>, scope: Scope, provider: Provider<Type>): RegistrationEntry<Type> {
    if (!Object.values(Scope).includes(scope)) {
      throw new Error(`Scope ${scope} not yet supported.`);
    }

    let registrations = this.registrations.get(identifier);
    if (!registrations) {
      registrations = [];
      this.registrations.set(identifier, registrations);
    }

    const registration = new RegistrationEntry(identifier, scope, provider);
    registrations.push(registration);
    return registration;
  }

  public first<Type>(identifier: Identifier<Type>): RegistrationEntry<Type> {
    const registrations = this.registrations.get(identifier);
    if (!registrations || registrations.length === 0) {
      throw new NotRegisteredError(identifier);
    }

    return registrations[0] as RegistrationEntry<Type>;
  }

  public all<Type>(identifier: Identifier<Type>): RegistrationEntry<Type>[] {
    const registrations = this.registrations.get(identifier);
    if (!registrations || registrations.length === 0) {
      throw new NotRegisteredError(identifier);
    }

    return registrations as RegistrationEntry<Type>[];
  }
}
