import { deleteProductService } from "../../services/products/deleteProduct.service.js"

export const deleteProductController = async (request, response) => {
    const [status] = await deleteProductService(request.id)

    return response.status(status).send()
}