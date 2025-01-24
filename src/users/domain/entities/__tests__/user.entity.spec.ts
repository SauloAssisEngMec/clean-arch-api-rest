import { faker } from '@faker-js/faker';
import { UserEntity, UserProps } from '../user.entity';

describe('UserEntity', () => {
    let userProps: UserProps;
    let sut: UserEntity;

    beforeEach(() => {
        userProps = {
            name: faker.person.firstName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
        };

        sut = new UserEntity(userProps);
    });
    it('should guarantee a class instance(constructor method)', () => {
        expect(sut).toBeInstanceOf(UserEntity);
        expect(sut.props.name).toEqual(userProps.name);
        expect(sut.props.email).toEqual(userProps.email);
        expect(sut.props.password).toEqual(userProps.password);
        expect(sut.props.createdAt).toBeInstanceOf(Date);
    });
});
