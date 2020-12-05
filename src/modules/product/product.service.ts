import { TagUUID } from './../tag/taguuid.dto';
import { TagService } from './../tag/tag.service';
import { TagEntity } from './../tag/tag.entity';
import { ProductEntity } from './product.entity';
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Like, Repository } from 'typeorm';
import { Product } from './product.dto';
import { handleResponse } from 'src/utils/response.handler';
import { Tag } from '../tag/tag.dto';

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
            this.productRepository.save(product)
        );

        return response;
    }

    async load(id: string) {
        return await handleResponse(
            this.productRepository.findOne(id, { relations: ["tags"] })
        );
    }


    async loadAll() {

        let res = await this.productRepository.find({ relations: ["tags"] });

        return res;
    }

    async loadByTags(tags) {
        let res: ProductEntity[] = [];
        let finalRes: ProductEntity[] = [];

        if (tags.length > 0) {
            for (let t of tags) {
                res = await this.productRepository
                    .createQueryBuilder("product")
                    .leftJoinAndSelect("product.tags", "tag")
                    .where("tag.uuid = :uuid", { uuid: t.uuid })
                    .getMany();

                finalRes = finalRes.concat(res);

            }

            // DEDUPE
            finalRes = [...new Map(res.map(item => [item.uuid, item])).values()];
        } else {
            finalRes = await this.productRepository.find({ relations: ["tags"] })
        }

        return finalRes;
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