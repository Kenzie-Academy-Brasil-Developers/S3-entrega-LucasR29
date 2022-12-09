import { createProductsService } from "../../services/products/createProduct.service.js"

export const createProductController = async (request, response) => {
    const [status, data] = await createProductsService(request.validatedBody)

    return response.status(status).json(data)
}