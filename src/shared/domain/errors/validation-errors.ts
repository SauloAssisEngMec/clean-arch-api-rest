import { FieldsErrors } from '../validators/validator-fields.interface';

export class ValidationError extends Error {}

export class EntityValdiationError extends Error {
    constructor(public error: FieldsErrors) {
        super('Entity validation error');
        this.name = 'EntityValdiationError';
    }
}
