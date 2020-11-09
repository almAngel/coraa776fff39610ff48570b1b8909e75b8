import { DeleteResult, InsertResult, UpdateResult } from "typeorm";

export async function handleResponse(
    operationResult: Promise<InsertResult> | Promise<DeleteResult> | Promise<UpdateResult>
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
        
    } else {
        return { 
            message: error.split(":").shift(),
            code: 500
        }
    }
}