import type { AbstractComponent, Component } from './component';

/**
 * A reference to a method.
 * @typeParam Result - The return type of the method.
 * @typeParam Args - The argument types of the method.
 */
export type MethodHandle<Result = any, Args extends unknown[] = any[]> = (...args: Args) => Result;

/**
 * The decoration method for a class.
 * @typeParam Class - The class type.
 */
export type ClassDecoration<Class extends AbstractComponent = never> = [Class] extends [never]
  ? <Class extends AbstractComponent = Component>(constructor: Class, context: ClassDecoratorContext<Class>) => Class | void
  : (<Ctor extends Class>(constructor: Ctor, context: ClassDecoratorContext<Ctor>) => Ctor | void) & ((constructor: Class, context: ClassDecoratorContext<Class>) => Class | void);

/**
 * The decoration method for a method.
 * @typeParam Method - The target method handle.
 * @remarks Only works for methods on classes.
 */
export type MethodDecoration<Method extends MethodHandle = never> = [Method] extends [never]
  ? <This, Target extends MethodHandle>(target: Target, context: ClassMethodDecoratorContext<This, Target>) => Target | void
  : (<This, Target extends Method>(target: Target, context: ClassMethodDecoratorContext<This, Target>) => Target | void) & (<This>(target: Method, context: ClassMethodDecoratorContext<This, Method>) => Method | void);

/**
 * The decoration method for a field.
 * @typeParam Field - The type of the field.
 * @remarks Only works for fields on classes.
 */
export type FieldDecoration<Field = never> = [Field] extends [never]
  ? <This, Value>(target: undefined, context: ClassFieldDecoratorContext<This, Value>) => ((this: This, defaultValue: Value) => Value) | void
  : (<This, Value extends Field>(target: undefined, context: ClassFieldDecoratorContext<This, Value>) => ((this: This, defaultValue: Value) => Value) | void) &
      (<This>(target: undefined, context: ClassFieldDecoratorContext<This, Field>) => ((this: This, defaultValue: Field) => Field) | void);

/**
 * The decoration method for a getter.
 * @typeParam Getter - The type of the getter.
 * @remarks Only works for getters on classes.
 */
export type GetterDecoration<Getter = never> = [Getter] extends [never]
  ? <This, Value>(target: (this: This) => Value, context: ClassGetterDecoratorContext<This, Value>) => ((this: This) => Value) | void
  : (<This, Value extends Getter>(target: (this: This) => Value, context: ClassGetterDecoratorContext<This, Value>) => ((this: This) => Value) | void) &
      (<This>(target: (this: This) => Getter, context: ClassGetterDecoratorContext<This, Getter>) => ((this: This) => Getter) | void);

/**
 * The decoration method for a setter.
 * @typeParam Setter - The type of the setter.
 * @remarks Only works for setters on classes.
 */
export type SetterDecoration<Setter = never> = [Setter] extends [never]
  ? <This, Value>(target: (this: This, value: Value) => void, context: ClassSetterDecoratorContext<This, Value>) => ((this: This, value: Value) => void) | void
  : (<This, Value extends Setter>(target: (this: This, value: Value) => void, context: ClassSetterDecoratorContext<This, Value>) => ((this: This, value: Value) => void) | void) &
      (<This>(target: (this: This, value: Setter) => void, context: ClassSetterDecoratorContext<This, Setter>) => ((this: This, value: Setter) => void) | void);

/**
 * The decoration method for an accessor.
 * @typeParam Accessor - The type of the accessor.
 * @remarks Only works for accessors on classes.
 */
export type AccessorDecoration<Accessor = never> = [Accessor] extends [never]
  ? <This, Value>(target: ClassAccessorDecoratorTarget<This, Value>, context: ClassAccessorDecoratorContext<This, Value>) => ClassAccessorDecoratorResult<This, Value> | void
  : (<This, Value extends Accessor>(target: ClassAccessorDecoratorTarget<This, Value>, context: ClassAccessorDecoratorContext<This, Value>) => ClassAccessorDecoratorResult<This, Value> | void) &
      (<This>(target: ClassAccessorDecoratorTarget<This, Accessor>, context: ClassAccessorDecoratorContext<This, Accessor>) => ClassAccessorDecoratorResult<This, Accessor> | void);
