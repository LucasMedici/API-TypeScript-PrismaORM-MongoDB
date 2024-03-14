import prismaClient from "../prisma/indexPrisma";

export class ListClienteService {
    async execute() {

        const clientes = prismaClient.cliente.findMany()

        return clientes

    }
}