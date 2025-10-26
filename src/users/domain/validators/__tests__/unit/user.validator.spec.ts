import { userDataBuilder } from '@/users/domain/testing/helpers/user-data-builder';
import { UserValidator, UserValidatorFactory } from '../../user.validator';
let sut: UserValidator;

describe('UserValidator Unit  Tests', () => {
    beforeEach(() => {
        sut = UserValidatorFactory.create();
        jest.clearAllMocks();
    });

    describe('Name field', () => {
        it('should validate with errors for null params', () => {
            const isValid = sut.validate(null as any);

            expect(isValid).toBeFalsy();
            expect(sut.errors['name']).toStrictEqual([
                'name should not be empty',
                'name must be a string',
                'name must be shorter than or equal to 255 characters',
            ]);
        });

        it('should validate with errors for empt name params', () => {
            const isValid = sut.validate({ ...userDataBuilder({}), name: '' });

            expect(isValid).toBeFalsy();
            expect(sut.errors['name']).toStrictEqual([
                'name should not be empty',
            ]);
        });
    });
});
