import { _ } from '@faker-js/faker/dist/airline-D6ksJFwG';
import { Entity } from '../../entity';
import { validate as uuidvalidade } from 'uuid';

type StubProps = {
    prop1: string;
    prop2: number;
};

class StubEntity extends Entity<StubProps> {}

describe('Entity unit tests', () => {
    it('should set id and props', () => {
        const props: StubProps = {
            prop1: 'prop1',
            prop2: 1,
        };
        const Entity = new StubEntity(props);

        expect(Entity).toBeInstanceOf(StubEntity);
        expect(Entity.props).toStrictEqual(props);
        expect(Entity._id).not.toBeNull();

        expect(uuidvalidade(Entity._id)).toBeTruthy();
    });

    it('should accept valid uuid', () => {
        const props: StubProps = {
            prop1: 'prop1',
            prop2: 1,
        };
        const _id = 'f47ac10b-58cc-4372-a567-0e02b2c3d479';
        const Entity = new StubEntity(props, _id);

        expect(Entity._id).not.toBeNull();
        expect(uuidvalidade(Entity._id)).toBeTruthy();
        expect(Entity._id).toBe(_id);
    });

    it('should trasnform entity to js object', () => {
        const props: StubProps = {
            prop1: 'prop1',
            prop2: 1,
        };
        const id = 'f47ac10b-58cc-4372-a567-0e02b2c3d479';
        const Entity = new StubEntity(props, id);

        expect(Entity.toJSON()).toStrictEqual({
            id,
            ...props,
        });
    });
});
