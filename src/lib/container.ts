import { InvalidDataError } from '../errors/invalid-data.error';
import { NotRegisteredError } from '../errors/not-registered.error';
import { ComponentProvider } from '../providers/component.provider';
import { FactoryProvider } from '../providers/factory.provider';
import { ValueProvider } from '../providers/value.provider';
import { RegistrationBuilder } from '../registration/registration.builder';
import type { IReferenceRegistration, IValueRegistration} from '../registration/registration.builder';
import { Registry } from '../registration/registration.registry';
import type { IRegistry } from '../registration/registration.registry';
import type { Component } from '../types/component';
import type { Collection, Dependencies, Factory, Identifier } from '../types/dependencies';

/**
 * A container for managing components.
 */
export interface IContainer {
  /**
   * Register a factory method for a component.
   * @typeParam Type - The type of the component instance returned by the factory.
   * @param identifier - The identifier to register the factory under.
   * @param factory - The factory to register.
   * @returns The registration builder.
   */
  register<Type>(identifier: Identifier<Type>, factory: Factory<Type>): IReferenceRegistration<Type>;

  /**
   * Register an instance of a component.
   * @typeParam Type - The type of the component instance.
   * @param identifier - The identifier to register the instance under.
   * @param instance - The instance to register.
   * @returns The registration builder.
   * @remarks Instances are always registered as singletons.
   */
  registerInstance<Type>(identifier: Identifier<Type>, instance: Type): IValueRegistration<Type>;

  /**
   * Register a component.
   * @typeParam Type - The type of the component instance.
   * @typeParam Class - The constructor of the component.
   * @param component - The component to register.
   * @param dependencies - The dependencies to inject into the component constructor.
   * @returns The registration builder.
   */
  registerComponent<Type extends object, Class extends Component<Type>>(component: Class, ...dependencies: Dependencies<Class>): IReferenceRegistration<Type>;

  /**
   * Resolve a registered item.
   * @typeParam Type - The type of the resolved instance.
   * @param identifier - The identifier of the item to resolve.
   * @returns The resolved instance if found, otherwise undefined.
   */
  resolve<Type>(identifier: Identifier<Type>): Type | undefined;

  /**
   * Resolve all registered items with the same identifier.
   * @typeParam Type - The type of the resolved instances.
   * @param identifier - The identifier of the items to resolve.
   * @returns The resolved instances if found, otherwise undefined.
   * @throws {@link InvalidDataError} If the identifier is a tuple with more than one entry.
   */
  resolve<Type>(identifier: Collection<Type>): Type[] | undefined;

  /**
   * Resolve a registered item.
   * @typeParam Type - The type of the resolved instance.
   * @param identifier - The identifier of the item to resolve.
   * @returns The resolved instance.
   * @throws {@link NotRegisteredError} If no registrations are found for the identifier.
   */
  resolveRequired<Type>(identifier: Identifier<Type>): Type;

  /**
   * Resolve all registered items with the same identifier.
   * @typeParam Type - The type of the resolved instances.
   * @param identifier - The identifier of the items to resolve.
   * @returns The resolved instances.
   * @throws {@link InvalidDataError} If the identifier is a tuple with more than one entry.
   * @throws {@link NotRegisteredError} If no registrations are found for the identifier.
   */
  resolveRequired<Type>(identifier: Collection<Type>): Type[];
}

export class Container implements IContainer {
  private static instance: IContainer | undefined;

  /**
   * Get the default container instance.
   * @remarks The default container is a singleton, created on first access.
   */
  public static get default(): IContainer {
    if (!Container.instance) {
      Container.instance = new Container();
    }

    return Container.instance;
  }

  /**
   * Override the default container instance.
   * @param container - The new default container instance.
   */
  public static set default(container: IContainer) {
    Container.instance = container;
  }

  private readonly registry: IRegistry = new Registry();

  public constructor() {}

  public register<Type>(identifier: Identifier<Type>, factory: Factory<Type>): IReferenceRegistration<Type> {
    const provider = new FactoryProvider(identifier, factory, this);
    return new RegistrationBuilder(identifier, this.registry, provider);
  }

  public registerInstance<Type>(identifier: Identifier<Type>, instance: Type): IValueRegistration<Type> {
    const provider = new ValueProvider(identifier, instance);
    return new RegistrationBuilder(identifier, this.registry, provider);
  }

  public registerComponent<Type extends object, Class extends Component<Type>>(component: Class, ...dependencies: Dependencies<Class>): IReferenceRegistration<Type> {
    const provider = new ComponentProvider(this, component, ...dependencies);
    return new RegistrationBuilder(component, this.registry, provider);
  }

  public resolve<Type>(identifier: Identifier<Type>): Type | undefined;
  public resolve<Type>(collection: Collection<Type>): Type[] | undefined;
  public resolve<Type>(identifier: Identifier<Type> | Collection<Type>): Type | Type[] | undefined {
    if (Array.isArray(identifier)) {
      if (identifier.length !== 1) {
        throw new InvalidDataError('Collection dependencies may only have a single entry.');
      }

      const subIdentifier = identifier[0];
      if (!this.registry.has(subIdentifier)) {
        return undefined;
      }

      const registrations = this.registry.all(subIdentifier);
      return registrations.map(entry => entry.create());
    }

    if (!this.registry.has(identifier)) {
      return undefined;
    }

    const registration = this.registry.first(identifier);
    return registration.create();
  }

  public resolveRequired<Type>(identifier: Identifier<Type>): Type;
  public resolveRequired<Type>(identifier: Collection<Type>): Type[];
  public resolveRequired<Type>(identifier: Identifier<Type> | Collection<Type>): Type | Type[] {
    if (Array.isArray(identifier)) {
      if (identifier.length !== 1) {
        throw new InvalidDataError('Collection dependencies may only have a single entry.');
      }

      const subIdentifier = identifier[0];
      if (!this.registry.has(subIdentifier)) {
        throw new NotRegisteredError(subIdentifier);
      }

      const registrations = this.registry.all(subIdentifier);
      return registrations.map(entry => entry.create());
    }

    if (!this.registry.has(identifier)) {
      throw new NotRegisteredError(identifier);
    }

    const registration = this.registry.first<Type>(identifier);
    return registration.create();
  }
}
