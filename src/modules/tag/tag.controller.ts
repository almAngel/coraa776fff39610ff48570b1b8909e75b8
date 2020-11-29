import { TagEntity } from './tag.entity';
import { Body, Controller, Param } from "@nestjs/common";
import { Delete, Get, Post } from "@nestjs/common/decorators/http/request-mapping.decorator";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { TagService } from "./tag.service";

@ApiTags("tag")
@Controller("/tag")
export class TagController {

    constructor(
        private readonly tagService: TagService,
    ) { }

    @Get("/")
    @ApiResponse({ status: 201, description: `The ${TagController.prototype.constructor.name.split("Controller").shift()} has been successfully created` })
    @ApiResponse({ status: 400, description: 'Bad Request: Usually a validation error' })
    @ApiResponse({ status: 500, description: 'Internal server error' })
    getAll() {
  
      return this.tagService.getAll() ;
    }

    @Get("/:id")
    @ApiResponse({ status: 201, description: `The ${TagController.prototype.constructor.name.split("Controller").shift()} has been successfully created` })
    @ApiResponse({ status: 400, description: 'Bad Request: Usually a validation error' })
    @ApiResponse({ status: 500, description: 'Internal server error' })
    get(@Param("id") id: string) {
  
      return this.tagService.getById(id) ;
    }

    @Post("/")
    @ApiResponse({ status: 201, description: `The ${TagController.prototype.constructor.name.split("Controller").shift()} has been successfully created` })
    @ApiResponse({ status: 400, description: 'Bad Request: Usually a validation error' })
    @ApiResponse({ status: 500, description: 'Internal server error' })
    add(@Body() tag: TagEntity) {
  
      return this.tagService.save(tag);
    }

    @Delete("/:id")
    @ApiResponse({ status: 201, description: `The ${TagController.prototype.constructor.name.split("Controller").shift()} has been successfully created` })
    @ApiResponse({ status: 400, description: 'Bad Request: Usually a validation error' })
    @ApiResponse({ status: 500, description: 'Internal server error' })
    delete(@Param("id") id: string) {
  
      return this.tagService.delete(id);
    }
}