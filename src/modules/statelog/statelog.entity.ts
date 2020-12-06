import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsNotEmpty, IsUUID } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class StateLogEntity {
    
    @PrimaryGeneratedColumn("uuid")
    uuid!: string;
    
    @ApiProperty({
        example: "HUAWEI P8",
        minLength: 1,
        required: true
    })
    @IsNotEmpty()
    @IsDefined()
    @Column()
    device!: string;

    @ApiProperty({
        example: "b0722fdb-3c14-4280-9cc5-44980bc84760",
        minLength: 1,
        required: true
    })
    @Column()
    @IsNotEmpty()
    @IsDefined()
    @IsUUID("4")
    user!: string;

    @ApiProperty({
        example: "100",
        minLength: 1,
        required: true
    })
    @IsNotEmpty()
    @IsDefined()
    @Column()
    batteryPercentage!: number;

    
    @ApiProperty({
        example: "36.0000, -4.0000",
        minLength: 1,
        required: true
    })
    @IsNotEmpty()
    @IsDefined()
    @Column()
    position!: string;

    @ApiProperty({
        example: "1607268220",
        minLength: 1,
        required: true
    })
    @IsNotEmpty()
    @IsDefined()
    @Column()
    timestamp!: string;

}