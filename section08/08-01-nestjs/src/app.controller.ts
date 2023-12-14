import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/') // 엔드포인트
  getHello(): string {
    const qqq = 3;
    console.log(qqq);

    return this.appService.getHello();
  }
}
