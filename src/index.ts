export { Inject } from './decorators/inject.decorator';
export { Injectable } from './decorators/injectable.decorator';
export { InjectableAs } from './decorators/injectable-as.decorator';

export { InvalidDataError } from './errors/invalid-data.error';
export { InvalidOperationError } from './errors/invalid-operation.error';
export { NotRegisteredError } from './errors/not-registered.error';
export { NotSupportedError } from './errors/not-supported.error';

export { Container } from './lib/container';
export type { IContainer } from './lib/container';
export { RequestContext } from './lib/context';
export { Scope } from './lib/scope';
export { Optional } from './lib/tokens';
export { isCollection, isComponent, isIdentifier } from './lib/utilities';

export type { IReferenceRegistration, IValueRegistration } from './registration/registration.builder';

export type { AbstractComponent, Component, ComponentArgs, ComponentType } from './types/component';
export type { AccessorDecoration, ClassDecoration, FieldDecoration, GetterDecoration, MethodDecoration, MethodHandle, SetterDecoration } from './types/decoration';
export type { Collection, Dependencies, Dependency, DependencyItem, DependencyType, Factory, Identifier, Optionally } from './types/dependencies';
