import { updateProductService } from "../../services/products/updateProduct.service.js"

export const updateProductController = async (request, response) => {
    const [status, data] = await updateProductService(request.body, request.id)

    return response.status(status).json(data)
}