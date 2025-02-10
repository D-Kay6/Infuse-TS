/**
 * The scope of a registration entry.
 */
export enum Scope {
  /**
   * A new instance is created each time the registration is resolved.
   */
  Transient,

  /**
   * A single instance is created for each request.
   * @remarks
   * This scope only works when using the {@link RequestContext} middleware.
   * If the middleware is not used, the scope will default to {@link Transient}.
   */
  Request,

  /**
   * A single instance is created for the lifetime of the application.
   */
  Singleton,
}
