import { listCategoriesService } from "../../services/categories/listCategories.service.js"

export const listCategoriesController = async ( request, response) => {
    if(request.idCategory){
        console.log('oi')
        const [status, data] = await listCategoriesService(request.idCategory)

        return response.status(status).json(data)
    }

    const [status, data] = await listCategoriesService()

    return response.status(status).json(data)
}