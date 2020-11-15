import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";
import { User } from "./user.dto";

@Entity()
export class UserEntity extends User {
    @PrimaryGeneratedColumn("uuid")
    uuid!: string;

    @Column({ default: false })
    verified!: boolean;

    @Column({ unique: true })
    username!: string;

    @Column()
    firstName!: string;

    @Column()
    lastName!: string;

    @Column()
    nif!: string;

    @Column({ unique: true })
    email!: string;

    @Column({ default: false })
    admin!: boolean;

    @Column()
    password!: string;

    @Column()
    access_token!: string;

    @Column()
    registered_on!: number;

}