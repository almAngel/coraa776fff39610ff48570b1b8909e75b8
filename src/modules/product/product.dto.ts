import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsNotEmpty, Matches } from "class-validator";

export abstract class Product {

    abstract uuid: string;

    @ApiProperty({
        example: "0000014F",
        minLength: 8,
        maxLength: 8,
        required: true
    })
    @Matches(/^\d{7}[A-Za-z]{1}$/)
    @IsNotEmpty()
    @IsDefined()
    abstract ref: string;

    @ApiProperty({
        example: "Mango",
        minLength: 1,
        required: true
    })
    abstract name: string;

    
    @ApiProperty({
        example: "[fruit, orange, green, tropical]",
        minLength: 1,
        required: true
    })
    abstract tags: string[];

}