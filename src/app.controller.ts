import { Controller, Get, Version } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(private readonly configService: ConfigService) {}

  @Get()
  getHello(): string {
    return 'hello';
  }

  @Get()
  @Version('2')
  getHello2(): string {
    return 'hello2';
  }
}
