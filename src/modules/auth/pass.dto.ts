import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsNotEmpty, Matches, MaxLength, MinLength } from "class-validator";

export class Pass {

    @Matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/, { message: "Password must contain special characters 'ex: !@#$%^&*' and at least one number" })
    @MinLength(6)
    @MaxLength(16)
    @IsNotEmpty()
    @IsDefined()
    @ApiProperty({
        required: true,
    })
    password!: string;
    
    @Matches(/^\$2[ayb]\$.{56}$/, { message: "Hash is not a valid bcrypt hash" })
    @IsDefined()
    @IsNotEmpty()
    @ApiProperty({
        required: true,
    })
    hash!: string;

}