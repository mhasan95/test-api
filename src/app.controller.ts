import { Controller, Get,Post,Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';

@Controller('cats')
export class AppController {
  
  constructor(private authService: AuthService) {}

  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }

  @UseGuards(AuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return req.user;
  }
}
