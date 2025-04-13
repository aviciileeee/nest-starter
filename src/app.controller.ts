import { Cache, CACHE_MANAGER, CacheInterceptor } from '@nestjs/cache-manager';
import {
  Controller,
  Get,
  Inject,
  UseInterceptors,
  Version,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

let a: number = 1;
@Controller()
// @UseInterceptors(CacheInterceptor)
export class AppController {
  constructor(
    private readonly configService: ConfigService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}
  @Get()
  getHello(): string {
    return 'hello';
  }

  @Get()
  @Version('2')
  getHello2(): string {
    a = a + 1;
    this.cacheManager.set('token', a);
    return a + '';
  }
}
