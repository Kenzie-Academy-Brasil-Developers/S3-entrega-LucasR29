import { database } from "../../database/index.js"

export const listProductsByCategoryService = async (categoryID) => {
    const response = await database.query(
        `SELECT p.name, p.price, c.name AS category FROM products p JOIN categories c ON p.category_id = $1 AND c.id = $1`,[categoryID]
    ).then((res) => res.rows)

    return[200, response]
}