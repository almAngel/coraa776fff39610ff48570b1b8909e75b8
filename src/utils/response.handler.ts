import { BaseEntity, DeleteResult, Entity, InsertResult, UpdateResult } from "typeorm";

export async function handleResponse<T>(
    operationResult: Promise<T>
) {
    let error;
    let res: T;

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
        else if (res instanceof Object) {
            return res as T;
        }
    } else {
        if (error) {
            return {
                message: error.split(":").shift(),
                code: 500
            }
        }
        return error;
    }
}