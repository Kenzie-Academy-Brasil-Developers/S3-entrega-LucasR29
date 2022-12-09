import "express-async-errors";
import express from "express";
import categoriesRoute from "./routes/categories.routes.js";
import { productsRoute } from "./routes/products.routes.js";
import { errorHandler } from "./errors.js";

export const app = express();

app.use(express.json());

app.use("/categories", categoriesRoute);

app.use("/products", productsRoute)

app.use(errorHandler)
