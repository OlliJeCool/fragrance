import { PrismaService } from "prisma/prisma.service";
import { createFragranceDto } from "./dtos/createFragranceDto";
import { Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { Prisma } from "@prisma/client";

@Injectable()
export class FragranceService {
    constructor(private prisma: PrismaService) {}

    async create(data: createFragranceDto){
        console.log(data);
        const new_fragrance = await this.prisma.fragrance.create({data: {
            name: data.name,
            brand: {
                connect: {
                    id: data.brandId
                }
            },
            alternatives: {
                connect: data.alternativesIds.map((id) => ({id}))
            },
            tags: {
                connect: data.tagsIds.map((id) => ({name: id}))
            },
            scents: data.scents,
        }})
        if(!new_fragrance) throw new InternalServerErrorException("New fragrance could not be created.");
        return new_fragrance;
    }

    async get(data: Prisma.FragranceWhereUniqueInput){
        const result = await this.prisma.fragrance.findFirst({where: {...data}})
        if(!result) throw new NotFoundException("Fragrance does not exist.");
        return result;
    }
}