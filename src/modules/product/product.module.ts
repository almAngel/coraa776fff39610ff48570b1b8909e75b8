import { UserEntity } from './../user/user.entity';
import { UserService } from './../user/user.service';
import { AuthService } from './../auth/auth.service';
import { BasicGuard } from './../auth/basic.guard';
import { TagService } from './../tag/tag.service';
import { TagEntity } from './../tag/tag.entity';
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductController } from "./product.controller";
import { ProductEntity } from "./product.entity";
import { ProductService } from "./product.service";


@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity, TagEntity, UserEntity])],
  providers: [ProductService, UserService, AuthService],
  controllers: [ProductController],
})
export class ProductModule {}