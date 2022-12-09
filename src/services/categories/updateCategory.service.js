import { database } from "../../database/index.js"
import { AppError } from "../../errors.js"

export const updateCategoryService = async (categoryName, categoryID) => {
    try {
        const response = await database.query(
            `UPDATE categories SET name = $1 WHERE id = $2 RETURNING *`,[categoryName, categoryID]
        ).then(res => res.rows[0])

        return [200, response]
    } catch (error) {
        throw new AppError(error.errors, 400)
    }   
}