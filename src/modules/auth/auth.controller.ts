import { Pass } from './pass.dto';
import { Body, Controller, Get, Optional, Param, Post } from "@nestjs/common";
import { ApiHeader, ApiParam, ApiResponse, ApiTags } from "@nestjs/swagger";
import { isUUID, IsUUID } from "class-validator";
import { handleResponse } from "src/utils/response.handler";
import { v4 } from "uuid";
import { AuthService } from "./auth.service";


@ApiTags("auth")
@Controller("/auth")
export class AuthController {

  constructor(
    private readonly authService: AuthService,
  ) { }

  @Post("/password")
  @ApiResponse({ status: 200, description: `The ${AuthController.prototype.constructor.name.split("Controller").shift()} has been successfully retrieved` })
  @ApiResponse({ status: 400, description: 'Bad Request: Usually a validation error' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  validatePass(@Body() comparison: Pass) {

    return this.authService.validatePassword(comparison.password, comparison.hash);
  }

}
