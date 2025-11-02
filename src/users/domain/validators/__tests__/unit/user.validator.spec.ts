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

    describe('Email field', () => {
        it('Inavlidation cases for email field', () => {
            let isValidEmail = sut.validate(null as any);

            expect(isValidEmail).toBeFalsy();
            expect(sut.errors['email']).toStrictEqual([
                'email should not be empty',
                'email must be an email',
                'email must be a string',
                'email must be shorter than or equal to 255 characters',
            ]);

            isValidEmail = sut.validate({ ...userDataBuilder({}), email: '' });
            expect(sut.errors['email']).toStrictEqual([
                'email should not be empty',
                'email must be an email',
            ]);

            isValidEmail = sut.validate({
                ...userDataBuilder({}),
                email: 'invalid-email',
            });
            expect(sut.errors['email']).toStrictEqual([
                'email must be an email',
            ]);

            isValidEmail = sut.validate({
                ...userDataBuilder({}),
                email: 123 as any,
            });
            expect(sut.errors['email']).toStrictEqual([
                'email must be an email',
                'email must be a string',
                'email must be shorter than or equal to 255 characters',
            ]);
        });
    });

    describe('Password field', () => {
        it('Invalidation cases for password field', () => {
            let isValidPassword = sut.validate(null as any);

            expect(isValidPassword).toBeFalsy();
            expect(sut.errors['password']).toStrictEqual([
                'password should not be empty',
                'password must be a string',
                'password must be shorter than or equal to 50 characters',
            ]);

            isValidPassword = sut.validate({
                ...userDataBuilder({}),
                password: '',
            });
            expect(sut.errors['password']).toStrictEqual([
                'password should not be empty',
            ]);

            isValidPassword = sut.validate({
                ...userDataBuilder({}),
                password: '123'.repeat(20),
            });
            expect(sut.errors['password']).toStrictEqual([
                'password must be shorter than or equal to 50 characters',
            ]);
        });
    });
});
