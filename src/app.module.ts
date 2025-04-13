import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { LogsModule } from './common/logger/logger.module';
import configuration from './configuration';
import { CacheModule } from '@nestjs/cache-manager';
import { Keyv } from 'keyv';
import KeyvRedis from '@keyv/redis';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    CacheModule.registerAsync({
      useFactory: async () => {
        return {
          stores: [
            new Keyv({
              store: new KeyvRedis('redis://default:1234@127.0.0.1:6379'),
            }),
          ],
        };
      },
    }),
    LogsModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
