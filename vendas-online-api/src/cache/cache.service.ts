import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class CacheService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  async getCache<T>(
    key: string,
    functionRequest: () => Promise<T>,
  ): Promise<T> {
    // Verifica se a pesquisa que esta sendo feita no momento esta em cache
    const allData: T = await this.cacheManager.get(key);

    // Se encontrou a pesquisa ele retorna ela do cache
    if (allData) {
      return allData;
    }

    // Se não encontrou faz a pesquisa no banco de dados
    const cities: T = await functionRequest();

    // Armazena no chache
    await this.cacheManager.set(key, cities);

    // retorna para visualização
    return cities;
  }
}
