import { database } from "../../database/index.js"
import { AppError } from "../../errors.js"

export const deleteProductService = async (productID) => {
    try {
        await database.query(
            `DELETE FROM products WHERE id = $1`,[productID]
        )

        return [204]
    } catch (error) {
        throw new AppError(error.errors, 500)
    }
}