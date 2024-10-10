import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  // Расширяем возможности нашего класса путем Иньекции Зависимости
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello(); // service
  }

  @Get('/:id')
  getOneUser(): string {
    return 'user';
  }

  @Post()
  // @Body()
  createUser(): string {
    return 'new user';
  }

  // appConroller.get('/', () => {
  // return this.appService.getHello();
  // })
}