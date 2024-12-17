import {IsNotEmpty, IsString, IsUUID} from "class-validator";

export class createFragranceDto {
    @IsNotEmpty()
    name: string

    @IsUUID()
    @IsNotEmpty()
    brandId: string;

    @IsNotEmpty()
    @IsString({each: true})
    tagsIds: string[]

    @IsNotEmpty()
    scents: string

    @IsUUID(4, {each: true})
    alternativesIds: string[]
}