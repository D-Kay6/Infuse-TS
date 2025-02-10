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
import type { Collection, Dependencies, Identifier } from '../types/dependencies';
import type { Factory } from '../types/factory';
import { isComponent } from './utilities';

/**
 * A container for managing components.
 */
export interface IContainer {
  /**
   * Register a factory method for a value.
   * @typeParam Type - The type of the value returned by the factory.
   * @param identifier - The name to register the factory under.
   * @param factory - The factory to register.
   * @returns The registration builder.
   */
  register<Type>(identifier: string, factory: Factory<Type>): IReferenceRegistration<Type>;

  /**
   * Register a factory method for a component.
   * @typeParam Type - The type of the component instance returned by the factory.
   * @param component - The component to register the factory under.
   * @param factory - The factory to register.
   * @returns The registration builder.
   */
  register<Type extends object>(component: Component<Type>, factory: Factory<Type>): IReferenceRegistration<Type>;

  /**
   * Register an instance of a value.
   * @typeParam Type - The type of the instance.
   * @param identifier - The name to register the instance under.
   * @param instance - The instance to register.
   * @returns The registration builder.
   * @remarks Instances are always registered as singletons.
   */
  registerInstance<Type>(identifier: string, instance: Type): IValueRegistration<Type>;

  /**
   * Register an instance of a component.
   * @typeParam Type - The type of the component instance.
   * @param component - The component to register the instance under.
   * @param instance - The instance to register.
   * @returns The registration builder.
   * @remarks Instances are always registered as singletons.
   */
  registerInstance<Type extends object>(component: Component<Type>, instance: Type): IValueRegistration<Type>;

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
   * @param identifier - The name or component of the item to resolve.
   * @returns The resolved instance if found, otherwise undefined.
   */
  resolve<Type>(identifier: Identifier<Type>): Type | undefined;

  /**
   * Resolve all registered items with the same identifier.
   * @typeParam Type - The type of the resolved instances.
   * @param identifier - The name or component of the items to resolve.
   * @returns The resolved instances if found, otherwise undefined.
   * @throws {@link InvalidDataError} If the identifier is a tuple with more than one entry.
   */
  resolve<Type>(identifier: Collection<Type>): Type | undefined;

  /**
   * Resolve a registered item.
   * @typeParam Type - The type of the resolved instance.
   * @param identifier - The name or component of the item to resolve.
   * @returns The resolved instance.
   * @throws {@link NotRegisteredError} If no registrations are found for the identifier.
   */
  resolveRequired<Type>(identifier: Identifier<Type>): Type;

  /**
   * Resolve all registered items with the same identifier.
   * @typeParam Type - The type of the resolved instances.
   * @param identifier - The name or component of the items to resolve.
   * @returns The resolved instances.
   * @throws {@link NotRegisteredError} If no registrations are found for the identifier.
   * @throws {@link InvalidDataError} If the identifier is a tuple with more than one entry.
   */
  resolveRequired<Type>(identifier: Collection<Type>): Type;
}

export class Container implements IContainer {
  private static instance: IContainer | undefined;

  public static get current(): IContainer {
    if (!Container.instance) {
      Container.instance = new Container();
    }

    return Container.instance;
  }

  private readonly registry: IRegistry = new Registry();

  private constructor() {}

  public register<Type>(identifier: string, factory: Factory<Type>): IReferenceRegistration<Type>;
  public register<Type extends object>(component: Component<Type>, factory: Factory<Type>): IReferenceRegistration<Type>;
  public register<Type>(component: Identifier<Type>, factory: Factory<Type>): IReferenceRegistration<Type> {
    const identifier = typeof component === 'string' ? component : component.name;
    const provider = new FactoryProvider(identifier, factory, this);
    return new RegistrationBuilder(identifier, this.registry, provider);
  }

  public registerInstance<Type>(identifier: string, instance: Type): IValueRegistration<Type>;
  public registerInstance<Type extends object>(component: Component<Type>, instance: Type): IValueRegistration<Type>;
  public registerInstance<Type>(component: Identifier<Type>, instance: Type): IValueRegistration<Type> {
    const identifier = typeof component === 'string' ? component : component.name;
    const provider = new ValueProvider(identifier, instance);
    return new RegistrationBuilder(identifier, this.registry, provider);
  }

  public registerComponent<Type extends object, Class extends Component<Type>>(component: Class, ...dependencies: Dependencies<Class>): IReferenceRegistration<Type> {
    const provider = new ComponentProvider(this, component, ...dependencies);
    return new RegistrationBuilder(component.name, this.registry, provider);
  }

  public resolve<Type>(identifier: Identifier<Type>): Type | undefined;
  public resolve<Type>(collection: Collection<Type>): Type | undefined;
  public resolve<Type>(identifier: Identifier<Type> | Collection<Type>): Type | undefined {
    try {
      if (Array.isArray(identifier)) {
        return this.resolveRequired(identifier);
      }

      return this.resolveRequired(identifier);
    } catch (error: unknown) {
      if (error instanceof NotRegisteredError) {
        return undefined;
      }

      throw error;
    }
  }

  public resolveRequired<Type>(identifier: Identifier<Type>): Type;
  public resolveRequired<Type>(identifier: Collection<Type>): Type;
  public resolveRequired<Type>(identifier: Identifier<Type> | Collection<Type>): Type {
    let name: string;
    if (Array.isArray(identifier)) {
      if (identifier.length !== 1) {
        throw new InvalidDataError('Tuple dependencies may only have a single entry.');
      }

      const subIdentifier = identifier[0];
      name = isComponent(subIdentifier) ? subIdentifier.name : subIdentifier;
      if (!this.registry.has(name)) {
        throw new NotRegisteredError(name);
      }

      const registrations = this.registry.all(name);
      return registrations.map(entry => entry.create()) as Type;
    }

    name = isComponent(identifier) ? identifier.name : identifier;
    if (!this.registry.has(name)) {
      throw new NotRegisteredError(name);
    }

    const registration = this.registry.first<Type>(name);
    return registration.create();
  }
}
