import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('prefixo')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('teste')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('teste1')
  getHello1(): string {
    return 'Hello World diferente';
  }
}

// http://localhost:3000

//produto - produto, estoque, catalogo