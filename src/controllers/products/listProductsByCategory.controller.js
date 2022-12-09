import { listProductsByCategoryService } from "../../services/products/listProductsByCategory.service.js"

export const listProductsByCategoryController = async (request, response) => {
    const [status, data] = await listProductsByCategoryService(request.idCategory)

    return response.status(status).json(data)
}