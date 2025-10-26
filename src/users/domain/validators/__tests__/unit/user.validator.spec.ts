import { userDataBuilder } from '@/users/domain/testing/helpers/user-data-builder';
import {
    UserRules,
    UserValidator,
    UserValidatorFactory,
} from '../../user.validator';
let sut: UserValidator;

describe('UserValidator Unit  Tests', () => {
    beforeEach(() => {
        sut = UserValidatorFactory.create();
        jest.clearAllMocks();
    });

    describe('Name field', () => {
        it('success case', () => {
            const props = {
                ...userDataBuilder({}),
                name: 'saulo',
            };
            const isValid = sut.validate(props);

            expect(isValid).toBeTruthy();
            expect(sut.validatedData).toStrictEqual(new UserRules(props));
        });
        it('should validate with errors for null params', () => {
            const isValid = sut.validate(null as any);

            expect(isValid).toBeFalsy();
            expect(sut.errors['name']).toStrictEqual([
                'name should not be empty',
                'name must be a string',
                'name must be shorter than or equal to 255 characters',
            ]);
        });

        it('should validate with errors for empty name params', () => {
            const isValid = sut.validate({ ...userDataBuilder({}), name: '' });

            expect(isValid).toBeFalsy();
            expect(sut.errors['name']).toStrictEqual([
                'name should not be empty',
            ]);
        });

        it('should validate with errors for number name params', () => {
            const isValid = sut.validate({
                ...userDataBuilder({}),
                name: 10 as any,
            });

            expect(isValid).toBeFalsy();
            expect(sut.errors['name']).toStrictEqual([
                'name must be a string',
                'name must be shorter than or equal to 255 characters',
            ]);
        });

        it('should validate with errors for number name params', () => {
            const isValid = sut.validate({
                ...userDataBuilder({}),
                name: 'saulo'.repeat(100),
            });

            expect(isValid).toBeFalsy();
            expect(sut.errors['name']).toStrictEqual([
                'name must be shorter than or equal to 255 characters',
            ]);
        });
    });
});
