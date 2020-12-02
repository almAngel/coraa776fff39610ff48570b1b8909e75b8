import { handleResponse } from 'src/utils/response.handler';
import { UserService } from './../user/user.service';
import { Repository } from 'typeorm';
import { Injectable } from "@nestjs/common";
import { User } from '../user/user.dto';
import { compare, hash as hashPass } from "bcrypt";

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService
    ) { }

    async validateUser(username: string, pass: string): Promise<boolean> {
        const result: any = await this.userService.findByUsernameAndPassword(username, pass);

        if(result && !result.code) {
            return true;
        } 
        
        return false;
    }

    async validatePassword(pass: string, hash: string) {
        let res = await compare(pass, hash);

        return res;
    }
}