import { Module } from '@nestjs/common';
import { CityController } from './city.controller';
import { CityService } from './city.service';
import { CityEntity } from './entities/city.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [
    CacheModule.register({
      ttl: 9000000000, // Tempo em que os dados ficaram em cache esta em milisegundos
    }),
    TypeOrmModule.forFeature([CityEntity]),
  ],
  controllers: [CityController],
  providers: [CityService],
})
export class CityModule {}
