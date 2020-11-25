import { TagService } from './../tag/tag.service';
import { TagEntity } from './../tag/tag.entity';
import { ProductEntity } from './product.entity';
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from 'typeorm';
import { Product } from './product.dto';
import { handleResponse } from 'src/utils/response.handler';

@Injectable()
export class ProductService {


    constructor(
        @InjectRepository(ProductEntity)
        private readonly productRepository: Repository<ProductEntity>,
        @InjectRepository(TagEntity)
        private readonly tagRepository: Repository<TagEntity>
    ) { }


    async save(product: any) {

        let response = await handleResponse(
            this.productRepository.insert(product)
        );

        return response;
    }

    async load(id: string) {
        return await handleResponse(
            this.productRepository.findOne(id)
        );
    }

    async loadAll() {
        return await handleResponse(
            this.productRepository.find()
        );
    }

    async addTags(uuid, tags) {
        return await handleResponse(
            this.productRepository.save({ uuid: uuid, tags: tags })
        );
    }

    async delete(id: string) {
        return await handleResponse(
            this.productRepository.delete(id)
        );
    }

    async update(product: ProductEntity) {
        return await handleResponse(
            this.productRepository.save(product)
        );
    }

    async filter(arr, callback) {
        const fail = Symbol();
        return (await Promise.all(arr.map(async item => (await callback(item)) ? item : fail))).filter(i => i !== fail) as any[];
    }

    async saveTags(tags) {
        let tagRes;

        if (tags) {
            // PROCESS TAGS
            tags = await this.filter(tags, async tag => {
                // CHECK IF TAG ALREADY EXISTS
                let exists = await this.tagRepository.findOne(tag);

                if (!exists) {
                    delete tag.uuid;
                    return tag;
                }
            });

        }

        return tagRes;
    }



}