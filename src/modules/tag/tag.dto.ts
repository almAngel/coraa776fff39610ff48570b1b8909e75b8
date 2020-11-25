import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsNotEmpty, Matches } from "class-validator";

export abstract class Tag {

    @ApiProperty({
        required: true
    })
    @IsNotEmpty()
    @IsDefined()
    abstract uuid: string;
    
    
    @ApiProperty({
        example: "tropical",
        minLength: 1,
        maxLength: 15,
        required: true
    })
    @IsNotEmpty()
    @IsDefined()
    abstract name: string;

}