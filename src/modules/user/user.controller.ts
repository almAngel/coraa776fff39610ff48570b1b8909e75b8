import { Body, Controller, Get, Optional, Param, Post } from "@nestjs/common";
import { ApiHeader, ApiResponse, ApiTags } from "@nestjs/swagger";
import { isUUID, IsUUID } from "class-validator";
import { handleResponse } from "src/utils/response.handler";
import { v4 } from "uuid";
import { User } from "./user.dto";
import { UserService } from "./user.service";

@ApiTags("user")
@Controller("/user")
export class UserController {

  constructor(
    private readonly userService: UserService,
  ) { }

  @Post("/")
  @ApiResponse({ status: 201, description: `The ${UserController.prototype.constructor.name.split("Controller").shift()} has been successfully created` })
  @ApiResponse({ status: 400, description: 'Bad Request: Usually a validation error' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  add(@Body() user: User) {

    return this.userService.save(user);
  }

  @Get("/:id")
  @ApiResponse({ status: 200, description: `The ${UserController.prototype.constructor.name.split("Controller").shift()} has been successfully retrieved` })
  @ApiResponse({ status: 400, description: 'Bad Request: Usually a validation error' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  getOne(@Param("id") id: string) {

    return this.userService.load(id);
  }

}
