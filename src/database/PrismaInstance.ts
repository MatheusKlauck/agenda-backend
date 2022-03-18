import { PrismaClient } from "@prisma/client";

class PrismaInstance {
    private Instance: PrismaClient | null;

    getInstance(): PrismaClient {
        if (this.Instance == null) this.Instance = new PrismaClient();
        return this.Instance;
    }
}

export { PrismaInstance };
