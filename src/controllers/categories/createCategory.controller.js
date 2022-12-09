import { createNewCategoryService } from "../../services/categories/createCategories.service.js"

export const createNewCategoryController = async (request, response) => {
    const [status, data] = await createNewCategoryService(request.body.name)

    return response.status(status).json(data)
}