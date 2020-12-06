import { TagEntity } from './../tag/tag.entity';
import { BasicGuard } from './../auth/basic.guard';
import { ProductTag } from './../product-tag/product-tag.dto';
import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { ApiBasicAuth, ApiBearerAuth, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ProductEntity } from "./product.entity";
import { ProductService } from "./product.service";
import { AuthGuard } from '@nestjs/passport';
import { Tag } from '../tag/tag.dto';

@ApiBasicAuth()
@ApiTags("product")
@Controller("/product")
export class ProductController {

  constructor(
    private readonly productService: ProductService,
  ) { }

  @Get("/all")
  @UseGuards(BasicGuard)
  @ApiResponse({ status: 200, description: `The ${ProductController.prototype.constructor.name.split("Controller").shift()} has been successfully retrieved` })
  @ApiResponse({ status: 400, description: 'Bad Request: Usually a validation error' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  getAll() {

    return this.productService.loadAll();
  }

  @Post("/tag")
  @UseGuards(BasicGuard)
  @ApiResponse({ status: 200, description: `The ${ProductController.prototype.constructor.name.split("Controller").shift()} has been successfully retrieved` })
  @ApiResponse({ status: 400, description: 'Bad Request: Usually a validation error' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  getByTags(@Body() tags: TagEntity[]) {

    return this.productService.loadByTags(tags);
  }

  @Get("/:id")
  @UseGuards(BasicGuard)
  @ApiResponse({ status: 200, description: `The ${ProductController.prototype.constructor.name.split("Controller").shift()} has been successfully retrieved` })
  @ApiResponse({ status: 400, description: 'Bad Request: Usually a validation error' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  getOne(@Param("id") id: string) {

    return this.productService.load(id);
  }

  @Post("/")
  @UseGuards(BasicGuard)
  @ApiResponse({ status: 201, description: `The ${ProductController.prototype.constructor.name.split("Controller").shift()} has been successfully created` })
  @ApiResponse({ status: 400, description: 'Bad Request: Usually a validation error' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  add(@Body() product: ProductEntity) {

    return this.productService.save(product);
  }

  @Put("/:id/tags")
  @UseGuards(BasicGuard)
  @ApiResponse({ status: 200, description: `The ${ProductController.prototype.constructor.name.split("Controller").shift()} has been successfully updated` })
  @ApiResponse({ status: 400, description: 'Bad Request: Usually a validation error' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  addTags(@Param("id") id: string, @Body() tags: TagEntity[]) {

    return this.productService.addTags(id, tags);
  }

  @Put("/:id")
  @UseGuards(BasicGuard)
  @ApiResponse({ status: 200, description: `The ${ProductController.prototype.constructor.name.split("Controller").shift()} has been successfully updated` })
  @ApiResponse({ status: 400, description: 'Bad Request: Usually a validation error' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  update(@Param("id") id: string, @Body() product: ProductEntity) {

    product.uuid = id;

    return this.productService.update(product);
  }

  @Delete("/:id")
  @UseGuards(BasicGuard)
  @ApiResponse({ status: 200, description: `The ${ProductController.prototype.constructor.name.split("Controller").shift()} has been successfully deleted` })
  @ApiResponse({ status: 400, description: 'Bad Request: Usually a validation error' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  delete(@Param("id") id: string) {

    return this.productService.delete(id);
  }

}
