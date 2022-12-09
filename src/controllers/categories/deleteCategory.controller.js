import { deleteCategoryService } from "../../services/categories/deleteCategory.service.js"

export const deleteCategoryController = async (request, response) => {
    const [status] = await deleteCategoryService(request.idCategory)

    return response.status(status).send()
}