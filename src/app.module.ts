import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { LogsModule } from './common/logger/logger.module';
import configuration from './configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    LogsModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
