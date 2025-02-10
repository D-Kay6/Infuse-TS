export class InvalidOperationError extends Error {
  constructor(message?: string) {
    super(message ?? 'The action is not valid in the current context.');
    this.name = 'InvalidOperationError';
  }
}
