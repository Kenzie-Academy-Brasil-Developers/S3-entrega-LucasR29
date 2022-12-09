import { Router } from "express";
import { createProductController } from "../controllers/products/createProduct.controller.js";
import { deleteProductController } from "../controllers/products/deleteProduct.controller.js";
import { listProductsController } from "../controllers/products/listProducts.controller.js";
import { listProductsByCategoryController } from "../controllers/products/listProductsByCategory.controller.js";
import { updateProductController } from "../controllers/products/updateProduct.controller.js";
import { verifyCategoryExists } from "../middlewares/categories/verifyCategoryExists.middleware.js";
import { verifyProductExists } from "../middlewares/products/verifyProductExists.middleware.js";
import { validateData } from "../middlewares/validation/validateData.middleware.js";
import { newProduct } from "../schemas/newProduct.schema.js";

export const productsRoute = Router()

productsRoute.post("", validateData(newProduct), verifyCategoryExists("product"), createProductController)

productsRoute.get("", listProductsController)

productsRoute.get("/:id", verifyProductExists, listProductsController)

productsRoute.get("/category/:id", verifyCategoryExists("listByCategory"), listProductsByCategoryController)

productsRoute.patch("/:id", verifyProductExists, verifyCategoryExists("product"), updateProductController)

productsRoute.delete("/:id", verifyProductExists, deleteProductController)