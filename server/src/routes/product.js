import { getAllCategories } from "../controllers/product/category.js";
import { getProductsByCategoriesId } from "../controllers/product/product.js";

export const categoriesRoutes = async (fastify, options) => {
  fastify.get("/categories", getAllCategories);
};

export const productRoutes = async (fastify, options) => {
  fastify.get("/products/:categoryId", getProductsByCategoriesId);
};
