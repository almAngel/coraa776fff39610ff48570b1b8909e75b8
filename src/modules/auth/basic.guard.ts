
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Injectable()
export class BasicGuard implements CanActivate {
  constructor(
    private authService: AuthService
  ) { }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    if(!request.headers.authorization) return false;
    const decoded = Buffer.from(String(request.headers.authorization).split(" ")[1], 'base64').toString('ascii').split(":");

    const validationResponse: any = await this.authService.validateUser(decoded[0], decoded[1]);

    return validationResponse;
  }
}