import { Controller, Get,Post,Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    console.log('create');
    return this.authService.login(req.user);
  }
}
