import { IEntity } from "../Entity/IEntity";

interface ICRUD {
    create(entity: IEntity): Promise<IEntity>;
    read(): Promise<IEntity[]>;
    update(entity: IEntity): Promise<IEntity>;
    delete(entity: IEntity): Promise<IEntity>;
}

export { ICRUD };
