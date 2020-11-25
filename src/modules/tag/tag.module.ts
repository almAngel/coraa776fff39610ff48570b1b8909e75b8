import { TagService } from './tag.service';
import { TagEntity } from './tag.entity';
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TagController } from './tag.controller';



@Module({
  imports: [TypeOrmModule.forFeature([TagEntity])],
  providers: [TagService],
  controllers: [TagController],
})
export class TagModule {}