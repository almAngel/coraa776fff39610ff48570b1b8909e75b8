import { Body, Controller, Get, Optional, Param, Post } from "@nestjs/common";
import { ApiHeader, ApiResponse, ApiTags } from "@nestjs/swagger";
import { isUUID, IsUUID } from "class-validator";
import { handleResponse } from "src/utils/response.handler";
import { v4 } from "uuid";
import { Product } from "./product.dto";
import { ProductService } from "./product.service";

@ApiTags("product")
@Controller("/product")
export class ProductController {

  constructor(
    private readonly productService: ProductService,
  ) { }

  @Post("/")
  @ApiResponse({ status: 201, description: `The ${ProductController.prototype.constructor.name.split("Controller").shift()} has been successfully created` })
  @ApiResponse({ status: 400, description: 'Bad Request: Usually a validation error' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  add(@Body() user: Product) {

    //return this.userService.save(user);
  }

  @Get("/:id")
  @ApiResponse({ status: 200, description: `The ${ProductController.prototype.constructor.name.split("Controller").shift()} has been successfully retrieved` })
  @ApiResponse({ status: 400, description: 'Bad Request: Usually a validation error' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  getOne(@Param("id") id: string) {

    //return this.userService.load(id);
  }

}
