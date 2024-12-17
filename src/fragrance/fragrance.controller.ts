import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { createFragranceDto } from './dtos/createFragranceDto';
import { FragranceService } from './fragrance.service';

@Controller('fragrance')
export class FragranceController {
    constructor(private fragranceService: FragranceService) {}

    @Post()
    async create(@Body() createFragranceDto: createFragranceDto){
        return await this.fragranceService.create(createFragranceDto);
    }

    @Get(":id")
    async get(@Param('id') id: string){
        return await this.fragranceService.get({id});
    }
}
