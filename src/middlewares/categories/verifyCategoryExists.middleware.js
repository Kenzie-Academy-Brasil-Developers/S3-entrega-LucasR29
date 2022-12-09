import { database } from "../../database/index.js"
import { AppError } from "../../errors.js"

export const verifyCategoryExists = (type) => async (request, response, next) => {
    if(type == "product"){

        let productCategory = ''

        if(request.validatedBody){
            if(request.validatedBody.category_id === undefined){
                return next()
            }
            productCategory = request.validatedBody.category_id

        }else if(request.body.category_id){
            productCategory = request.body.category_id

        }else if(request.body.category_id == null){
            return next()

        }else{
            return next()
        }

        const category = await database
            .query(`SELECT * FROM categories WHERE id = $1`,[productCategory])   
            .then((res) => res.rows)

        if(category[0] == undefined){
            throw new AppError("invalid category_id", 400)
        }

        return next()
    }

    let [category] = await database.query(
        `
        SELECT * FROM categories WHERE lower(unaccent(name)) = lower(unaccent($1))
        `,
        [request.body.name]
    ).then((res) => res.rows);

    if(request.params.id){

        request.idCategory = request.params.id

        if(isNaN(request.idCategory)){
            throw new AppError("invalid category code", 404)
        }

        category = await database.query(
            `SELECT * FROM categories WHERE id = $1`,[request.idCategory])
            .then((res) => res.rows[0])
    }

    console.log(category)

    if(category != undefined && type === "categoryCreation"){
        throw new AppError("category already created", 400)

    }else if(category == undefined && (type == "categoryUpdate" || type == "listByCategory") ){
        throw new AppError("category does not exist", 404)
    }

    return next()
}