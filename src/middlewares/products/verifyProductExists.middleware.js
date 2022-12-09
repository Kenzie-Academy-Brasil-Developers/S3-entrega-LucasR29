import { database } from "../../database/index.js"
import { AppError } from "../../errors.js";

export const verifyProductExists = async (request, response, next) => {
    const regexExp = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
    
    if(!regexExp.test(request.params.id)){
        throw new AppError("invalid product uuid", 404)
    }
    
    const product = await database.query(
        `SELECT * FROM products WHERE id = $1`,[request.params.id]
        ).then((res) => res.rows[0])
        
    if(product == undefined){
        throw new AppError("product does not exists")
    }
        
    request.id = request.params.id
        
    return next()
}