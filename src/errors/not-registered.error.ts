export class NotRegisteredError extends Error {
  constructor(name: string) {
    super(`The item "${name}" is not registered.`);
    this.name = 'NotRegisteredError';
  }
}
