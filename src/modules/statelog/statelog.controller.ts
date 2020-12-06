import { Body, Controller, Get, Param, Post, UseGuards } from "@nestjs/common";
import { ApiBasicAuth, ApiResponse, ApiTags } from "@nestjs/swagger";
import { BasicGuard } from "../auth/basic.guard";
import { StateLogEntity } from "./statelog.entity";
import { StateLogService } from "./statelog.service";

@ApiBasicAuth()
@ApiTags("statelog")
@Controller("/statelog")
export class StateLogController {

    constructor(
        private readonly stateLogService: StateLogService
    ) { }

    @Get("/:id")
    @UseGuards(BasicGuard)
    @ApiResponse({ status: 200, description: `The ${StateLogController.prototype.constructor.name.split("Controller").shift()} has been successfully retrieved` })
    @ApiResponse({ status: 400, description: 'Bad Request: Usually a validation error' })
    @ApiResponse({ status: 500, description: 'Internal server error' })
    getAllFromUser(@Param("id") userUuid: string) {
  
      return this.stateLogService.getAllFromUser(userUuid);
    }

    @Post("/statelog")
    @UseGuards(BasicGuard)
    @ApiResponse({ status: 201, description: `The ${StateLogController.prototype.constructor.name.split("Controller").shift()} has been successfully added` })
    @ApiResponse({ status: 400, description: 'Bad Request: Usually a validation error' })
    @ApiResponse({ status: 500, description: 'Internal server error' })
    save(@Body() log: StateLogEntity) {
  
      return this.stateLogService.save(log);;
    }
  

}