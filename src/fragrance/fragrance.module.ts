import { Module } from '@nestjs/common';
import { FragranceService } from './fragrance.service';
import { FragranceController } from './fragrance.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  providers: [FragranceService, PrismaService],
  controllers: [FragranceController]
})
export class FragranceModule {}
