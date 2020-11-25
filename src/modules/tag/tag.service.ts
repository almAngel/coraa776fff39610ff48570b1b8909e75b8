import { TagEntity } from './tag.entity';
import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tag } from './tag.dto';
import { handleResponse } from 'src/utils/response.handler';

@Injectable()
export class TagService {


    constructor(
        @InjectRepository(TagEntity)
        private readonly tagRepository: Repository<TagEntity>
    ) { }


    async save(tag: TagEntity) {
        return handleResponse(
            this.tagRepository.save(tag)
        );
    }

    async getAll() {
        return handleResponse(
            this.tagRepository.find()
        );
    }

    async delete(id: string) {
        return handleResponse(
            this.tagRepository.delete(id)
        );
    }

    async getById(id: string) {
        return handleResponse(
            this.tagRepository.findOne(id)
        );
    }

    async saveAll(tags: TagEntity[]) {
        let res;

        tags.forEach(tag => {
            res += tag + ":" + handleResponse(
                this.tagRepository.save(tag)
            ) + ",";
        });

        if(res) return res;
    }
}