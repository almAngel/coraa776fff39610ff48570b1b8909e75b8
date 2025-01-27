import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsNotEmpty, Matches, Min } from "class-validator";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Tag } from "../tag/tag.dto";
import { TagEntity } from "../tag/tag.entity";
import { Product } from "./product.dto";

@Entity()
export class ProductEntity {

    @PrimaryGeneratedColumn("uuid")
    uuid!: string;

    @ApiProperty({
        example: "0000014F",
        minLength: 8,
        maxLength: 8,
        required: true
    })
    @Matches(/^\d{7}[A-Za-z]{1}$/)
    @IsNotEmpty()
    @IsDefined()
    @Column({ unique: true })
    ref!: string;

    @ApiProperty({
        example: "Mango",
        minLength: 1,
        required: true
    })
    @Column({ unique: true })
    name!: string;

    @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
    @IsNotEmpty()
    @IsDefined()
    @ApiProperty({
        example: "mango-keitt",
        minLength: 1,
        required: true
    })
    @Column({ unique: true })
    slug: string;

    @Min(0)
    @IsNotEmpty()
    @IsDefined()
    @ApiProperty({
        example: 0,
        minLength: 1,
        required: true
    })
    @Column({default: 0})
    quantity: number;

    @IsNotEmpty()
    @IsDefined()
    @ApiProperty({
        example: [{ uuid: "", name: "" }],
        isArray: true
    })
    @ManyToMany(
        type => TagEntity, 
        { cascade: true },
    )
    @JoinTable()
    tags: TagEntity[];

}