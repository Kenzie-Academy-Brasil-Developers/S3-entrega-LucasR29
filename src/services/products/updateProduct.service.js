import { database } from "../../database/index.js"

export const updateProductService = async (productData, productID) => {
    let query = 'UPDATE products SET '
    const keys = Object.keys(productData)
    const values = Object.values(productData)
   
    keys.forEach((key, index) => {
        query += `${key} = $${index+=1}, `
    })

    query = query.slice(0,-2)
    
    query += ` WHERE id = $${keys.length+=1} RETURNING *`

    const response = await database.query(
        query,[...values, productID]
    ).then((res) => res.rows[0])

   return [200, response]
}