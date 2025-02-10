export class NotSupportedError extends Error {
  constructor(name: string) {
    super(`The item "${name}" is not supported.`);
    this.name = 'NotSupportedError';
  }
}
