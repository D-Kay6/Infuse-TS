# Infuse-TS
A fully experimental-free IoC container for TypeScript. Uses the TC39 Decorators added in TypeScript 5.0 to provide a clean and easy-to-use API.

## Install
```bash
$ npm install infuse-ts
```

## Usage
There are two main ways you can use Infuse-TS: with or without decorators.

### With Decorators
You can use decorators to register dependencies in a more concise way.
The scope is optional and defaults to `Scope.Transient`.

#### Direct

```typescript
import { Injectable, Scope } from 'infuse-ts';

@Injectable()
export class MyService {
  public doSomething() {
    console.log('Hello, World!');
  }
}

@Injectable(Scope.Request, MyService)
export class MyController {
  private readonly myService: MyService;

  constructor(myService: MyService) {
    this.myService = myService;
  }
}
```

You can also use the `@Inject` decorator to inject dependencies into a class field.

```typescript
import { Injectable, Inject, Scope } from 'infuse-ts';

@Injectable()
export class MyService {
  public doSomething() {
    console.log('Hello, World!');
  }
}

@Injectable(Scope.Transient)
export class MyController {
  @Inject(MyService)
  private readonly myService!: MyService;
}
```

#### Alias
You can register classes as a child of another class using the `@InjectableAs` decorator.
This allows you to resolve a collection of all classes that are children of a parent class.
You can define the dependency as a tuple with the parent class as the only element.

```typescript
import { Injectable, InjectableAs } from 'infuse-ts';

export class BaseService {
  public doSomething() {
    console.log('Hello, World!');
  }
}

@InjectableAs(BaseService)
export class Service1 extends BaseService {
  public doSomething() {
    console.log('Goodbye, World!');
  }
}

@InjectableAs(BaseService)
export class Service2 extends BaseService {
  public doSomething() {
    console.log('Farewell, World!');
  }
}

@Injectable([BaseService])
export class MyController {
  private readonly services: BaseService[];

  constructor(services: BaseService[]) {
    this.services = services;
  }
}
```

### Without Decorators
You will need to use the `Container` class to register and resolve dependencies.
Each one of the registration methods returns a registration object to define how the dependency should be resolved.
You must always call either of the `as*` methods to actually register the dependency.

#### Registering Components
A component is an alias for a constructable object. You can register a component using the `registerComponent` method.
The `registerComponent` method takes a component and a list of the constructor arguments.

```typescript
import { Container } from 'infuse-ts';

export class MyService {
  public doSomething() {
    console.log('Hello, World!');
  }
}

export class MyController {
  private readonly myService: MyService;
  
  constructor(myService: MyService) {
    this.myService = myService;
  }
}

Container.current.registerComponent(MyService).instancePerDependency().asSelf();
Container.current.registerComponent(MyController, MyService).instancePerRequest().asSelf();
```

#### Registering Instances
You can register an instance of a class using the `registerInstance` method.
The `registerInstance` method takes a class and an instance of that class.

```typescript
import { Container } from 'infuse-ts';

export class MyService {
  public doSomething() {
    console.log('Hello, World!');
  }
}

const myService = new MyService();
Container.current.registerInstance(MyService, myService).asSelf();
```

#### Registering Factories
You can register a factory using the `registerFactory` method.
The `registerFactory` method takes a class and a factory function that returns an instance of that class.
The first argument of the factory function is the container for resolving dependencies.

```typescript
import { Container } from 'infuse-ts';

export class MyService {
  public doSomething() {
    console.log('Hello, World!');
  }
}

Container.current.registerFactory(MyService, (container) => new MyService()).instancePerDependency().asSelf();
```

## Background
When looking for an IoC container for TypeScript, I found that pretty much all of them still rely on the experimental Decorators API.
While this is probably still fine, as there are plenty of large projects using it, I wanted to create a library that didn't rely on experimental features but still offered the ease of working with decorators.

I have been using Infuse-TS in my projects for a while now, and it has been working great. I hope you find it useful too!
