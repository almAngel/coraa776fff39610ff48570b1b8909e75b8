import { ApiProperty } from '@nestjs/swagger';
import { TagUUID } from './../tag/taguuid.dto';
export class ProductTag {

    @ApiProperty({
        example: [{uuid: "82ee43e0-f03e-4c2d-9c07-ee3c5b9499dc"}],
        isArray: true
    })
    tags: TagUUID[];
}