import type { Component } from './component';

/**
 * A reference to a method.
 * @typeParam Result - The return type of the method.
 * @typeParam Args - The argument types of the method.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type MethodHandle<Result = any, Args extends any[] = any[]> = (...args: Args) => Result;

/**
 * The decoration method for a class.
 * @typeParam Class - The class type.
 */
export type ClassDecoration<Class extends Component = Component> = (constructor: Class, context: ClassDecoratorContext<Class>) => Class;

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
