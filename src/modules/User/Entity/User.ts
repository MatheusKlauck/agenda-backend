import { IEntity } from "../../../base/Entity/IEntity";

interface IUser extends IEntity {
    id: string;
    name: string;
    description: string;
    registered_at: Date;
}

export { IUser };
