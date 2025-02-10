[**Infuse-TS**](../README.md)

***

[Infuse-TS](../README.md) / Scope

# Enumeration: Scope

Defined in: [src/lib/scope.ts:4](https://github.com/D-Kay6/Infuse-TS/blob/a8c30be6111883959cfa2434b18c1b26f87c6a92/src/lib/scope.ts#L4)

The scope of a registration entry.

## Enumeration Members

### Transient

> **Transient**: `0`

Defined in: [src/lib/scope.ts:8](https://github.com/D-Kay6/Infuse-TS/blob/a8c30be6111883959cfa2434b18c1b26f87c6a92/src/lib/scope.ts#L8)

A new instance is created each time the registration is resolved.

***

### Request

> **Request**: `1`

Defined in: [src/lib/scope.ts:16](https://github.com/D-Kay6/Infuse-TS/blob/a8c30be6111883959cfa2434b18c1b26f87c6a92/src/lib/scope.ts#L16)

A single instance is created for each request.

#### Remarks

This scope only works when using the [RequestContext](../classes/RequestContext.md) middleware.
If the middleware is not used, the scope will default to [Transient](Scope.md#transient).

***

### Singleton

> **Singleton**: `2`

Defined in: [src/lib/scope.ts:21](https://github.com/D-Kay6/Infuse-TS/blob/a8c30be6111883959cfa2434b18c1b26f87c6a92/src/lib/scope.ts#L21)

A single instance is created for the lifetime of the application.
