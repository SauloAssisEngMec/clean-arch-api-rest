import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';
import { ClassValidatorFields } from '../../class-validator-fields';

class StubRules {
    @MaxLength(255)
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNumber()
    @IsNotEmpty()
    price: number;

    constructor(data: any) {
        Object.assign(this, data);
    }
}
class StubClassValidatorFileds extends ClassValidatorFields<StubRules> {
    validate(data: any): boolean {
        return super.validate(new StubRules(data));
    }
}

describe('ClassValidatorFields Integration Tests', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it('should validate with errors', () => {
        const validator = new StubClassValidatorFileds();

        expect(validator.validate(null)).toBeFalsy();
        expect(validator.errors).toStrictEqual({
            name: [
                'name should not be empty',
                'name must be a string',
                'name must be shorter than or equal to 255 characters',
            ],
            price: [
                'price should not be empty',
                'price must be a number conforming to the specified constraints',
            ],
        });
    });

    it('should validate with corrects value', () => {
        const validator = new StubClassValidatorFileds();

        expect(
            validator.validate({ name: 'saulo assis', price: 28 }),
        ).toBeTruthy();
        expect(validator.errors).toStrictEqual(null);
        expect(validator.validatedData).toStrictEqual({
            name: 'saulo assis',
            price: 28,
        });
    });
});
