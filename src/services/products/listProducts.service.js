import { database } from "../../database/index.js"

export const listProductsService = async (productID) => {
    if(productID){
        const [response] = await database.query(
            `SELECT * FROM products WHERE id = $1`,[productID]
        ).then((res) => res.rows)
    
        return [200, response]
    }

    const response = await database.query(
        `SELECT * FROM products`
    ).then(res => res.rows)

    return [200, response]
}