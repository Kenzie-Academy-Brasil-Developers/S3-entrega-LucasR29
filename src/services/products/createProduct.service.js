import { database } from "../../database/index.js"

export const createProductsService = async (productData) => {
    if(Object.keys(productData).includes("category_id")){
        const [response] = await database.query(
            `
            INSERT INTO products(id, name, price, category_id)
            VALUES($1,$2,$3,$4)
            RETURNING *
            `,[productData.id, productData.name, productData.price, productData.category_id]
        ).then((res) => res.rows)

        return [201, response]
    }else{
        const [response] = await database.query(
            `
            INSERT INTO products(id, name, price)
            VALUES($1,$2,$3)
            RETURNING *
            `,[productData.id, productData.name, productData.price]
        ).then(res => res.rows)
        return [201, response]
    }
}