import type { AbstractComponent, Component } from './component';

/**
 * A reference to a method.
 * @typeParam Result - The return type of the method.
 * @typeParam Args - The argument types of the method.
 */
export type MethodHandle<Result = any, Args extends any[] = any[]> = (...args: Args) => Result;

/**
 * The decoration method for a class.
 * @typeParam Class - The class type.
 */
export type ClassDecoration<Class extends AbstractComponent = Component> = (constructor: Class, context: ClassDecoratorContext<Class>) => Class;

/**
 * The decoration method for a method.
 * @typeParam Target - The target method handle.
 * @remarks Only works for methods on classes.
 */
export type MethodDecoration<Target extends MethodHandle = MethodHandle> = <This>(target: Target, context: ClassMethodDecoratorContext<This, Target>) => Target;

/**
 * The decoration method for a field.
 * @typeParam Value - The type of the field.
 * @remarks Only works for fields on classes.
 */
export type FieldDecoration<Value = unknown> = <This>(target: undefined, context: ClassFieldDecoratorContext<This, Value>) => (this: This, original: Value) => Value;

/**
 * The decoration method for a getter.
 * @typeParam Value - The type of the getter.
 * @remarks Only works for getters on classes.
 */
export type GetterDecoration<Value = unknown> = <This>(target: (this: This) => Value, context: ClassGetterDecoratorContext<This, Value>) => (this: This) => Value;

/**
 * The decoration method for a setter.
 * @typeParam Value - The type of the setter.
 * @remarks Only works for setters on classes.
 */
export type SetterDecoration<Value = unknown> = <This>(target: (this: This, value: Value) => void, context: ClassSetterDecoratorContext<This, Value>) => (this: This, value: Value) => void;

/**
 * The decoration method for an accessor.
 * @typeParam Value - The type of the accessor.
 * @remarks Only works for accessors on classes.
 */
export type AccessorDecoration<Value = unknown> = <This>(target: ClassAccessorDecoratorTarget<This, Value>, context: ClassAccessorDecoratorContext<This, Value>) => ClassAccessorDecoratorResult<This, Value>;
