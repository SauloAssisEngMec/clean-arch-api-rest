import { ClassValidatorFields } from '../../class-validator-fields';
import * as classValidatorLib from 'class-validator';

class StubClassValidatorFileds extends ClassValidatorFields<{
    fields: string;
}> {}

describe('ClassValidatorFields Unit Tests', () => {
    it('should initliaze errors and validateData variable with null', () => {
        const sut = new StubClassValidatorFileds();

        expect(sut.errors).toBeNull();
        expect(sut.validatedData).toBeNull();
    });

    it('should validate with errors', () => {
        const spyValidateSync = jest.spyOn(classValidatorLib, 'validateSync');

        spyValidateSync.mockReturnValueOnce([
            {
                property: 'field',
                constraints: { isRequired: 'test mock error' },
            },
        ] as any);

        const sut = new StubClassValidatorFileds();

        expect(sut.validate(null)).toBeFalsy();
        expect(spyValidateSync).toHaveBeenCalledTimes(1);
        expect(sut.validatedData).toBeNull();
        expect(sut.errors).toStrictEqual({ field: ['test mock error'] });
    });
});
