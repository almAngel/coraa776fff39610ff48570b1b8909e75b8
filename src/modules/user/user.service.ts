import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "./user.entity";
import { Repository } from "typeorm";
import { compare, hash as hashPass } from "bcrypt";
import { handleResponse } from "../../utils/response.handler";
import { User } from "./user.dto";
import { isUUID } from "class-validator";

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ) { }

    async save(user: any) {

        return handleResponse(
            this.insertAfterHash(user)
        );
    }

    async load(id: string) {
        let res = await handleResponse(
            this.userRepository.findOne(id)
        );

        if (res instanceof User) {
            delete res.password;
            delete res.uuid;
        }

        if (isUUID(id)) {
            return res;
        } else {
            return {
                message: `Parameter 'id' must be a valid UUIDv4`,
                code: 400
            };
        }
    }

    async findByUsername(username: string) {
        return await handleResponse(
            this.userRepository.findOne({ username: username })
        );
    }

    async findByUsernameAndPassword(username: string, password: string) {

        const res = await handleResponse(
            this.userRepository.findOne({ username: username })
        );

        console.log(res);
        

        if (res !== undefined) {
            if (res.username && res.password) {
                const isEqual = await compare(password, res.password);
                if (res.username == username) {
                    if (isEqual) {
                        return await this.userRepository.findOne({ username: username, password: res.password });
                    }
                }

            }
        }
        else {
            return {
                code: 404,
                message: "Resource not found"
            }
        }

    }

    async findByEmail(email: string) {
        return await handleResponse(
            this.userRepository.findOne({ email: email })
        );
    }

    async loadAll() {
        return handleResponse(
            this.userRepository.find()
        );
    }

    public async hashPassword(password: string) {
        if (password) {
            return await hashPass(password, 10);
        }
    }

    private async insertAfterHash(user: any) {
        const hash = await this.hashPassword(user.password);
        if (hash) {
            user.password = hash;

            return await this.userRepository.insert(user);
        }
    }
}