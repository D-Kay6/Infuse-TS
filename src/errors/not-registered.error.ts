import type { Identifier } from '../types/dependencies';

export class NotRegisteredError extends Error {
  constructor(identifier: Identifier) {
    super(`The item "${identifier.name}" is not registered.`);
    this.name = 'NotRegisteredError';
  }
}
