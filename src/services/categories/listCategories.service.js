import { database } from "../../database/index.js"
import { AppError } from "../../errors.js"

export const listCategoriesService = async (categoryID) => {
    if(categoryID){
        console.log(categoryID)
        if(isNaN(categoryID)){
            throw new AppError("invalid category code", 404)
        }

        const resp = await database.query(`SELECT * FROM categories WHERE id = $1`,[categoryID]).then((res) => res.rows[0])

        if(resp == undefined){
            throw new AppError("category doesn't exists",404)
        }

        console.log(resp)

        return [200, resp]
    }

    const resp = await database.query(`SELECT * FROM categories ORDER BY id`).then((res) => res.rows)

    return [200, resp]
}