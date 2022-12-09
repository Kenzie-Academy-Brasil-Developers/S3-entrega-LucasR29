import { updateCategoryService } from "../../services/categories/updateCategory.service.js"

export const updateCategoryController = async (request, response) => {
    const [status, data] = await updateCategoryService(request.body.name, request.idCategory)

    return response.status(status).json(data)
}