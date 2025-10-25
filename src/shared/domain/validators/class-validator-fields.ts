import { validateSync } from 'class-validator';
import {
    FieldsErrors,
    ValidatorsFieldsInterface,
} from './validator-fields.interface';

export abstract class ClassValidatorFields<PropsVlidated>
    implements ValidatorsFieldsInterface<PropsVlidated>
{
    errors: FieldsErrors = null;
    validatedData: PropsVlidated = null;

    validate(data: any): boolean {
        const errors = validateSync(data);
        if (errors.length) {
            this.errors = {};
            for (const error of errors) {
                const field = error.property;
                this.errors[field] = Object.values(error.constraints);
            }
        } else {
            this.validatedData = data;
        }

        return !errors.length;
    }
}
