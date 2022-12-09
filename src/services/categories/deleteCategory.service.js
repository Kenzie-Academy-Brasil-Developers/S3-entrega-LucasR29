import { database } from "../../database/index.js"
import { AppError } from "../../errors.js"

export const deleteCategoryService = async (categoryID) => {
        await database.query(
           `UPDATE products SET category_id = NULL WHERE category_id = $1`, [categoryID]
        )
    
        await database.query(
            `DELETE FROM categories WHERE id = $1`,[categoryID]
        )

        return [204]
    
}