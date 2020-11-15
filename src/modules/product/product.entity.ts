import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product.dto";

@Entity()
export class ProductEntity extends Product {

    @PrimaryGeneratedColumn("uuid")
    uuid!: string;

    @Column()
    ref!: string;

    @Column()
    name!: string;

    @Column("simple-array")
    tags: string[];    

}