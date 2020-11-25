import { TagEntity } from './../tag/tag.entity';
import { ApiProperty, ApiQuery } from "@nestjs/swagger";
import { IsDefined, IsNotEmpty, Matches } from "class-validator";
import { Tag } from "../tag/tag.dto";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

export abstract class Product {

    abstract uuid: string;


    abstract ref: string;

    abstract name: string;

    abstract slug: string;

    tags: Tag[];

}