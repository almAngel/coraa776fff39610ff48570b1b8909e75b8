import { UserEntity } from "src/modules/user/user.entity";
import { BaseEntity, DeleteResult, InsertResult, UpdateResult } from "typeorm";

export async function handleResponse(
    operationResult: Promise<any>
) {
    let error;
    let res;

    try {
        res = await operationResult;
    } catch (e) {
        error = e.message;
    }

    if (res) {
        if (res instanceof InsertResult) {
            return {
                message: `Row inserted correctly`,
                code: 201
            };
        }
        return res;
    } else {
        return { 
            message: error.split(":").shift(),
            code: 500
        }
    }
}