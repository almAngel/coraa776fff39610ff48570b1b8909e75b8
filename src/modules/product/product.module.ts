import { TagService } from './../tag/tag.service';
import { TagEntity } from './../tag/tag.entity';
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductController } from "./product.controller";
import { ProductEntity } from "./product.entity";
import { ProductService } from "./product.service";


@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity, TagEntity])],
  providers: [ProductService],
  controllers: [ProductController],
})
export class ProductModule {}