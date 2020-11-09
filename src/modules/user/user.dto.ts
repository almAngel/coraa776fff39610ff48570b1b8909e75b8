import { ApiBody, ApiParam, ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsNotEmpty, IsOptional, isString, IsUUID, Length, Matches, MaxLength, Min, MinLength } from "class-validator";

export abstract class User {

    abstract uuid: string;
    abstract verified: boolean;

    @ApiProperty({
        example: "exampleUser",
        minLength: 6,
        maxLength: 20,
        required: true
    })
    @Matches(/^(?=[a-zA-Z0-9._]{6,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/)
    @IsNotEmpty()
    @IsDefined()
    abstract username: string;

    @ApiProperty({
        example: "Alan",
        minLength: 2,
        required: true
    })
    @Matches(/^([A-Z]{1}[a-z]{1,})$/)
    @IsNotEmpty()
    @IsDefined()
    abstract firstName: string;

    @ApiProperty({
        example: "Brito",
        minLength: 2,
        required: true
    })
    @Matches(/^([A-Z]{1}[a-z]{1,})$/)
    abstract lastName: string;

    @ApiProperty({
        example: "01234567X",
        minLength: 8,
        maxLength: 8,
        required: true
    })
    @Matches(/^([0-9]{8})([A-Za-z]{1})$/)
    @IsNotEmpty()
    @IsDefined()
    abstract nif: string;

    @ApiProperty({
        example: "",
        minLength: 8,
        maxLength: 8,
        required: true
    })
    @Matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/, { message: "Password must contain special characters 'ex: !@#$%^&*' and at least one number" })
    @MinLength(6)
    @MaxLength(16)
    @IsNotEmpty()
    @IsDefined()
    abstract password: string;

}