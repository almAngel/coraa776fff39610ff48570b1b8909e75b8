import { Body, Controller, Get, Header, Param, Post, Query } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
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

  @Get("/email/:email")
  @ApiResponse({ status: 200, description: `The ${UserController.prototype.constructor.name.split("Controller").shift()} has been successfully retrieved` })
  @ApiResponse({ status: 400, description: 'Bad Request: Usually a validation error' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  getByEmail(@Param("email") email: string) {

    return this.userService.findByEmail(email);
  }

  @Get("/username/:username")
  @ApiResponse({ status: 200, description: `The ${UserController.prototype.constructor.name.split("Controller").shift()} has been successfully retrieved` })
  @ApiResponse({ status: 400, description: 'Bad Request: Usually a validation error' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  getByUsername(@Param("username") username: string) {

    return this.userService.findByUsername(username);
  }

}
