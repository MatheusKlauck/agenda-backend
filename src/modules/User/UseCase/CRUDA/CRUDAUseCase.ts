import { PrismaClient } from "@prisma/client";

import { ICRUD } from "../../../../base/UseCases/ICRUD";
import { IUser } from "../../Entity/User";

export default class CRUDUseCase implements ICRUD {
    repository: PrismaClient;
    constructor(repository: PrismaClient) {
        this.repository = repository;
    }
    async create(entity: IUser): Promise<IUser> {
        const result = await this.repository.user.create({
            data: entity,
        });
        return result;
    }

    async read(): Promise<IUser[]> {
        return this.repository.user.findMany();
    }

    async update(entity: IUser): Promise<IUser> {
        return this.repository.user.update({
            where: {
                id: entity.id,
            },
            data: entity,
        });
    }

    async delete(entity: IUser): Promise<IUser> {
        return this.repository.user.delete({ where: { id: entity.id } });
    }
    authenticate(entity: IUser): Promise<void> {
        throw new Error("Method not implemented.");
    }
}
