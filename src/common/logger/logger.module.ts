import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { WinstonModule } from 'nest-winston';
import { consoleTransport, createDailyRotateTransport } from './logTransports';

@Module({
  imports: [
    WinstonModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const logOn = configService.get('application.log');
        const applicationName = configService.get('application.name');
        return {
          transports: [
            consoleTransport(applicationName),
            ...(logOn
              ? [
                  createDailyRotateTransport('info', 'application'),
                  createDailyRotateTransport('warn', 'error'),
                ]
              : []),
          ],
        };
      },
    }),
  ],
})
export class LogsModule {}
