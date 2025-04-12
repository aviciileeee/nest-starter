// Copyright (c) 2025 Aviciileeee<lx_ashin@aliyun.com>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as DailyRotateFile from 'winston-daily-rotate-file';
import * as winston from 'winston';
import { utilities } from 'nest-winston';
import { ConsoleTransportInstance } from 'winston/lib/winston/transports';

export function consoleTransport(
  applicationName: string = 'nest-starter',
): ConsoleTransportInstance {
  return new winston.transports.Console({
    level: 'info',
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.ms(),
      utilities.format.nestLike(applicationName),
    ),
  });
}

export function createDailyRotateTransport(level: string, fileName: string) {
  return new DailyRotateFile({
    level,
    dirname: 'logs',
    filename: `${fileName}_%DATE%.log`,
    datePattern: 'YYYY-MM-DD-HH',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d',
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.simple(),
    ),
  });
}
