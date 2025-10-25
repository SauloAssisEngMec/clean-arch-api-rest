import { UserEntity, UserProps } from '../../user.entity';
import { userDataBuilder } from '@/users/domain/testing/helpers/user-data-builder';

describe('UserEntity', () => {
    let userProps: UserProps;
    let sut: UserEntity;

    beforeEach(() => {
        userProps = userDataBuilder({});

        sut = new UserEntity(userProps);
    });
    it('should guarantee a class instance(constructor method)', () => {
        expect(sut).toBeInstanceOf(UserEntity);
        expect(sut.props.name).toEqual(userProps.name);
        expect(sut.props.email).toEqual(userProps.email);
        expect(sut.props.password).toEqual(userProps.password);
        expect(sut.props.createdAt).toBeInstanceOf(Date);
    });
    it('getter of name field', () => {
        expect(sut.name).toBeDefined();
        expect(sut.name).toEqual(userProps.name);
        expect(typeof sut.name).toBe('string');
    });

    it('setters of name field', () => {
        sut['name'] = 'New Name';
        expect(sut.name).toEqual('New Name');
        expect(typeof sut.name).toBe('string');
    });

    it('getter of email field', () => {
        expect(sut.email).toBeDefined();
        expect(sut.email).toEqual(userProps.email);
        expect(typeof sut.email).toBe('string');
    });

    it('getter of password field', () => {
        expect(sut.password).toBeDefined();
        expect(sut.password).toEqual(userProps.password);
        expect(typeof sut.password).toBe('string');
    });

    it('setters of password field', () => {
        sut['password'] = 'NewPassword123';
        expect(sut.password).toEqual('NewPassword123');
        expect(typeof sut.password).toBe('string');
    });

    it('getter of createdAt field', () => {
        expect(sut.createdAt).toBeDefined();
        expect(sut.createdAt).toBeInstanceOf(Date);
    });
});
