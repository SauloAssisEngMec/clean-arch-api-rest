import { randomUUID } from 'crypto';

type EntityJSON<Props> = Required<{ id: string } & Props>;

export abstract class Entity<Props = any> {
    public readonly _id: string;
    public readonly props: Props;

    constructor(props: Props, id?: string) {
        this._id = id || randomUUID();
        this.props = props;
    }

    get id() {
        return this._id;
    }

    toJSON(): EntityJSON<Props> {
        return {
            id: this._id,
            ...this.props,
        } as EntityJSON<Props>;
    }

    // public equals(entity: Entity<Props>): boolean {
    //     if (this === entity) {
    //         return true;
    //     }

    //     return this.id === entity.id;
    // }
}
