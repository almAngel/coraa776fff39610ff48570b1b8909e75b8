import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { handleResponse } from "src/utils/response.handler";
import { Repository } from "typeorm";
import { StateLogEntity } from "./statelog.entity";

@Injectable()
export class StateLogService {

    constructor(
        @InjectRepository(StateLogEntity)
        private readonly stateLogRepository: Repository<StateLogEntity>
    ) { }


    async getAllFromUser(id) {

        let res = await this.stateLogRepository
            .createQueryBuilder("statelog")
            .where("statelog.user = :user", { user: id })
            .getMany();

        return res;
    }

    async save(stateLog) {

        let response = await handleResponse(
            this.stateLogRepository.save(stateLog)
        );

        return response;
    }

}