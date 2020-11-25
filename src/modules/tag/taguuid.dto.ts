import { ApiProperty } from "@nestjs/swagger";

export class TagUUID {
    @ApiProperty({
        example: "82ee43e0-f03e-4c2d-9c07-ee3c5b9499dc"
    })
    uuid: string;
}