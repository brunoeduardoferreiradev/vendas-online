import { Injectable, Inject } from '@nestjs/common';
import { CityEntity } from './entities/city.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Cache } from 'cache-manager';
import { CACHE_MANAGER } from '@nestjs/cache-manager';

import { Repository } from 'typeorm';

@Injectable()
export class CityService {
  constructor(
    @InjectRepository(CityEntity)
    private readonly cityRepository: Repository<CityEntity>,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  async getAllCitiesByStateId(stateId: number): Promise<CityEntity[]> {
    // Verifica se a pesquisa que esta sendo feita no momento esta em cache
    const citiesCache: CityEntity[] = await this.cacheManager.get(
      `state_${stateId}`,
    );

    // Se encontrou a pesquisa ele retorna ela do cache
    if (citiesCache) {
      return citiesCache;
    }

    // Se não encontrou faz a pesquisa no banco de dados
    const cities = await this.cityRepository.find({
      where: {
        stateId,
      },
    });

    // Armazena no chache
    await this.cacheManager.set(`state_${stateId}`, cities);

    // retorna para visualização
    return cities;
  }
}
