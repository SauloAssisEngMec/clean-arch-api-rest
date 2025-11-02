import { userDataBuilder } from '@/users/domain/testing/helpers/user-data-builder';
import { UserEntity } from '../../user.entity';

describe('UserEntity Integration Test', () => {
    describe('should guarantee a class instance(constructor method)', () => {
        it('Shoudl throw ValidationError when try to create a user with invalid props', () => {
            let invalidProps = { ...userDataBuilder({}), name: null };
            expect(() => new UserEntity(invalidProps)).toThrowError(
                'Entity validation error',
            );

            invalidProps = { ...userDataBuilder({}), email: 'invalid-email' };

            expect(() => new UserEntity(invalidProps)).toThrowError(
                'Entity validation error',
            );
        });
    });
});
