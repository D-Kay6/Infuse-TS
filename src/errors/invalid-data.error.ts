export class InvalidDataError extends Error {
  constructor(message?: string) {
    super(message ?? 'The provided data was invalid.');
    this.name = 'InvalidDataError';
  }
}
