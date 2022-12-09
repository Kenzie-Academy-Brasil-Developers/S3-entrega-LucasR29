import { Router } from "express"
import { createNewCategoryController } from "../controllers/categories/createCategory.controller.js"
import { deleteCategoryController } from "../controllers/categories/deleteCategory.controller.js"
import { listCategoriesController } from "../controllers/categories/listCategoriesController.js"
import { updateCategoryController } from "../controllers/categories/updateCategory.controller.js"
import { verifyCategoryExists } from "../middlewares/categories/verifyCategoryExists.middleware.js"

const categoriesRoute = Router()

categoriesRoute.post("", verifyCategoryExists("categoryCreation"), createNewCategoryController)

categoriesRoute.get("", listCategoriesController)

categoriesRoute.get("/:id", verifyCategoryExists("categoryUpdate"), listCategoriesController)

categoriesRoute.patch("/:id", verifyCategoryExists("categoryUpdate"), updateCategoryController)

categoriesRoute.delete("/:id", verifyCategoryExists("categoryUpdate"), deleteCategoryController)

export default categoriesRoute