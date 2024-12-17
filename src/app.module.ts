import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FragranceModule } from './fragrance/fragrance.module';

@Module({
  imports: [FragranceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
