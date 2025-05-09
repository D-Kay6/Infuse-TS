/**
 * Contract for a provider.
 * @typeParam Type - The type of the provided value.
 */
export interface Provider<Type = unknown> {
  /**
   * Attempt to provide the value.
   * @returns The provided value.
   * @throws {@link InvalidOperationError} if the value cannot be provided.
   */
  provide(): Type;
}
