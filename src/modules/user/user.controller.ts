import { Body, Controller, Get, Optional, Post } from "@nestjs/common";
import { ApiHeader, ApiResponse, ApiTags } from "@nestjs/swagger";
import { handleResponse } from "src/utils/response.handler";
import { User } from "./user.dto";
import { UserService } from "./user.service";

@ApiTags("user")
@Controller("/user")
export class UserController {

  constructor(
    private readonly userService: UserService,
  ) { }

  @Post("/")
  @ApiResponse({ status: 201, description: `The ${UserController.prototype.constructor.name.split("Controller").shift()} has been successfully created.` })
  @ApiResponse({ status: 400, description: 'Bad Request: Usually a validation error' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  add(@Body() user: User) {

    return handleResponse(
      this.userService.addUser(user)
    );

  }

}
