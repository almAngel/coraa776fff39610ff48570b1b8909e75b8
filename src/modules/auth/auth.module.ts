import { BasicGuard } from './basic.guard';
import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt/dist/jwt.module";
import { PassportModule } from "@nestjs/passport";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "../user/user.entity";
import { UserModule } from "../user/user.module";
import { UserService } from "../user/user.service";
import { AuthService } from "./auth.service";

@Module({
    imports: [UserModule, PassportModule, TypeOrmModule.forFeature([UserEntity])],
    providers: [UserService, AuthService, BasicGuard],
    exports: [],
})
export class AuthModule { }