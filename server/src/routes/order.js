import {
  getOrderById,
  confirmOrder,
  createOrder,
  getOrders,
  updateOrderStatus,
} from "../controllers/order/order.js";
import { verifyToken } from "../middleware/auth.js";

export const orderRoutes = async (fastify, options) => {
  fastify.addHook("preHandler", async (request, reply) => {
    const isAuthenticated = verifyToken(request, reply);
    if (!isAuthenticated)
      return reply.code(404).send({ message: "Unauthenticated" });
  });

  fastify.post("/order/create", createOrder);
  fastify.get("/order", getOrders);
  fastify.patch("/order/:orderId/status", updateOrderStatus);
  fastify.post("/order/:orderId/confirm", confirmOrder);
  fastify.get("/order/:orderId", getOrderById);
};
