import { listProductsService } from "../../services/products/listProducts.service.js"

export const listProductsController = async ( request, response) => {
    if(request.id){
        const [status, data] = await listProductsService(request.id)

        return response.status(status).json(data)
    }
    const [status, data] = await listProductsService()

    return response.status(status).json(data)
}