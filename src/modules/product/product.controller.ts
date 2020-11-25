import { ProductTag } from './../product-tag/product-tag.dto';
import { TagUUID } from './../tag/taguuid.dto';
import { TagEntity } from './../tag/tag.entity';
import { Body, Controller, Delete, Get, Optional, Param, Post, Put } from "@nestjs/common";
import { ApiBody, ApiHeader, ApiResponse, ApiTags } from "@nestjs/swagger";
import { isUUID, IsUUID } from "class-validator";
import { handleResponse } from "src/utils/response.handler";
import { v4 } from "uuid";
import { Product } from "./product.dto";
import { ProductEntity } from "./product.entity";
import { ProductService } from "./product.service";
import { Tag } from '../tag/tag.dto';

@ApiTags("product")
@Controller("/product")
export class ProductController {

  constructor(
    private readonly productService: ProductService,
  ) { }

  @Get("/")
  @ApiResponse({ status: 200, description: `The ${ProductController.prototype.constructor.name.split("Controller").shift()} has been successfully retrieved` })
  @ApiResponse({ status: 400, description: 'Bad Request: Usually a validation error' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  getAll() {

    return this.productService.loadAll();
  }

  @Get("/:id")
  @ApiResponse({ status: 200, description: `The ${ProductController.prototype.constructor.name.split("Controller").shift()} has been successfully retrieved` })
  @ApiResponse({ status: 400, description: 'Bad Request: Usually a validation error' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  getOne(@Param("id") id: string) {

    return this.productService.load(id);
  }

  @Post("/")
  @ApiResponse({ status: 201, description: `The ${ProductController.prototype.constructor.name.split("Controller").shift()} has been successfully created` })
  @ApiResponse({ status: 400, description: 'Bad Request: Usually a validation error' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  add(@Body() product: ProductEntity) {

    return this.productService.save(product);
  }

  @Put("/:id/tags")
  @ApiResponse({ status: 200, description: `The ${ProductController.prototype.constructor.name.split("Controller").shift()} has been successfully updated` })
  @ApiResponse({ status: 400, description: 'Bad Request: Usually a validation error' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  addTags(@Param("id") id: string, @Body() productTag: ProductTag) {

    return this.productService.addTags(id, productTag.tags);
  }

  @Put("/:id")
  @ApiResponse({ status: 200, description: `The ${ProductController.prototype.constructor.name.split("Controller").shift()} has been successfully updated` })
  @ApiResponse({ status: 400, description: 'Bad Request: Usually a validation error' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  update(@Param("id") id: string, @Body() product: ProductEntity) {

    product.uuid = id;

    return this.productService.update(product);
  }

  @Delete("/:id")
  @ApiResponse({ status: 200, description: `The ${ProductController.prototype.constructor.name.split("Controller").shift()} has been successfully deleted` })
  @ApiResponse({ status: 400, description: 'Bad Request: Usually a validation error' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  delete(@Param("id") id: string) {

    return this.productService.delete(id);
  }

}
