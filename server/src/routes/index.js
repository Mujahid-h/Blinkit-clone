import { authRoutes } from "./auth.js";
import { categoriesRoutes, productRoutes } from "./product.js";

const prefix = "/api";

export const registerRoutes = async (fastify) => {
  fastify.register(authRoutes, { prefix: prefix });
  fastify.register(productRoutes, { prefix: prefix });
  fastify.register(categoriesRoutes, { prefix: prefix });
};
