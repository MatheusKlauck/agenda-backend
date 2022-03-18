import { PrismaInstance } from "../../../../database/PrismaInstance";

class CRUDAController {
    PrismaInstance: PrismaInstance;
    constructor(prismaInstance: PrismaInstance) {
        this.PrismaInstance = prismaInstance;
    }
}