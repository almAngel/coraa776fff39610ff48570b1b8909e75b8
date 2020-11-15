import { Column, PrimaryGeneratedColumn } from "typeorm";

export class AuthBundleEntity {

    @PrimaryGeneratedColumn("uuid")
    uuid!: string;

    @Column()
    ref_token!: string;

    @Column()
    creation_timestamp: number;

}