/**
 * A component is a constructable object.
 * @typeParam Type - The type of the component.
 */
export type AbstractComponent<Type extends object = object> = abstract new (...args: any[]) => Type;

/**
 * A component is a constructable object.
 * @typeParam Type - The type of the component.
 */
export type Component<Type extends object = object> = new (...args: any[]) => Type;

/**
 * Get the type a component is constructing.
 * @typeParam Class - The component type.
 */
export type ComponentType<Class extends Component> = Class extends Component<infer Type> ? Type : never;

/**
 * Get the arguments needed for construction.
 * @typeParam Class - The component type.
 */
export type ComponentArgs<Class extends Component> = Class extends new (...args: infer Args) => unknown ? Args : never;
