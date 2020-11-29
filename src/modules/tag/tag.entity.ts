import { ProductEntity } from './../product/product.entity';
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Tag } from "./tag.dto";
import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNotEmpty } from 'class-validator';

@Entity()
export class TagEntity {

    @PrimaryGeneratedColumn("uuid")
    uuid!: string;
    
    @ApiProperty({
        example: "Tropical",
        minLength: 1,
        required: true
    })
    @Column({ unique: true })
    name!: string;

}