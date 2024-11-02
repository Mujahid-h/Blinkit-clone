import Fastify from "fastify";
import "dotenv/config";
import connectDB from "./src/config/db.js";
import { PORT } from "./src/config/config.js";
import { admin, buildAdminRouter } from "./src/config/admin.js";
import { registerRoutes } from "./src/routes/index.js";
import fastifySocketIO from "fastify-socket.io";

const start = async () => {
  connectDB();

  const app = Fastify();

  app.register(fastifySocketIO, {
    cors: {
      origin: "*",
    },
    pingInterval: 10000,
    pingTimeout: 5000,
    transports: ["websocket"],
  });

  await buildAdminRouter(app);

  await registerRoutes(app);

  app.listen({ port: PORT }, (err, addr) => {
    if (err) {
      console.log(err);
    } else {
      console.log(
        `Server started on http://localhost:${PORT}${admin.options.rootPath}`
      );
    }
  });

  app.ready().then(() => {
    app.io.on("connection", (socket) => {
      console.log("A user connected😍😍😍");

      socket.on("joinRoom", (orderId) => {
        socket.join(orderId);
        console.log(`"User joined room🤍🤍🤍" ${orderId}`);
      });

      socket.on("disconnect", () => {
        console.log("User disconnected🙂🙂🙂");
      });
    });
  });
};

start();
