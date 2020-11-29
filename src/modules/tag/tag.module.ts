import { TagService } from './tag.service';
import { TagEntity } from './tag.entity';
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TagController } from './tag.controller';
import { UserService } from '../user/user.service';
import { AuthService } from '../auth/auth.service';
import { UserEntity } from '../user/user.entity';



@Module({
  imports: [TypeOrmModule.forFeature([TagEntity, UserEntity])],
  providers: [TagService, UserService, AuthService],
  controllers: [TagController],
})
export class TagModule {}